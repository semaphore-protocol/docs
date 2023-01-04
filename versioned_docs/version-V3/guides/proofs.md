---
sidebar_position: 3
title: Proofs
---

# Semaphore proofs

Once a user joins their [Semaphore identity](/docs/glossary#semaphore-identity) to a [Semaphore group](/docs/glossary#semaphore-group), the user can signal anonymously with a zero-knowledge proof that proves the following:

-   the user is a member of the group,
-   the same user created the signal and the proof.

Developers can use Semaphore for the following:

-   [**Generate a proof off-chain**](#generate-a-proof-off-chain)
-   [**Verify a proof off-chain**](#verify-a-proof-off-chain)
-   [**Verify a proof on-chain**](#verify-a-proof-on-chain)

## Generate a proof off-chain

Use the [`@semaphore-protocol/proof`](https://github.com/semaphore-protocol/semaphore/tree/main/packages/proof) library to generate an off-chain proof.
To generate a proof, pass the following parameters to the `generateProof` function:

-   `identity`: the Semaphore identity of the user broadcasting the signal and generating the proof;
-   `group`: the group to which the user belongs;
-   `externalNullifier`: the value that prevents double-signaling;
-   `signal`: the signal the user wants to send anonymously;
-   `snarkArtifacts`: the `zkey` and `wasm` [trusted setup files](/docs/glossary/#trusted-setup-files).

In the voting system use case, once all the voters have joined their [identities](/docs/guides/identities#create-an-identity) to the ballot [group](/docs/guides/groups),
a voter can generate a proof to vote for a proposal.
In the call to `generateProof`, the voting system passes the unique ballot ID (the [Merkle tree](/docs/glossary/#merkle-tree/) root of the group) as the
`externalNullifier` to prevent the voter signaling more than once for the ballot.
The following code sample shows how to use `generateProof` to generate the voting proof:

```ts
import { generateProof } from "@semaphore-protocol/proof"

const externalNullifier = group.root
const signal = 1

const fullProof = await generateProof(identity, group, externalNullifier, signal, {
    zkeyFilePath: "./semaphore.zkey",
    wasmFilePath: "./semaphore.wasm"
})
```

## Verify a proof off-chain

Use the [`@semaphore-protocol/proof`](https://github.com/semaphore-protocol/semaphore/tree/main/packages/proof) library to verify a Semaphore proof off-chain.
To verify a proof, pass the following to the `verifyProof` function:

-   `fullProof`: the Semaphore proof;
-   `treeDepth`: the Merkle tree depth.

The following code sample shows how to verify the previously generated proof:

```ts
import { verifyProof } from "@semaphore-protocol/proof"

await verifyProof(fullProof, 20) // true or false.
```

`verifyProof` returns a Promise that resolves to `true` or `false`.

## Verify a proof on-chain

Use the [`Semaphore.sol`](/docs/technical-reference/contracts#semaphoresol) contract to verify proofs on-chain.

:::info
See our [deployed contracts](/docs/deployed-contracts) to find the addresses for your network.
::::

To verify Semaphore proofs in your contract, import `ISemaphore.sol`, pass it the `Semaphore.sol` address and call the `verifyProof` method with following parameters:

-   `groupId`: the identifier of the group;
-   `merkleTreeRoot`: the root of the Merkle tree;
-   `signal`: the signal the user wants to send anonymously;
-   `nullifierHash`: a [nullifier hash](#retrieve-a-nullifier-hash);
-   `externalNullifier`: the value that prevents double-signaling;
-   `proof`: a [Solidity-compatible Semaphore proof](#generate-a-solidity-compatible-proof).

:::info
You can import `ISemaphore.sol` and other Semaphore contracts from the [`@semaphore-protocol/contracts`](https://github.com/semaphore-protocol/semaphore/tree/main/packages/contracts) NPM module.
:::

### Generate a Solidity-compatible proof

To transform a proof to be compatible with Solidity contracts, pass the proof to the `packToSolidityProof` utility function. For example:

```ts
import { packToSolidityProof } from "@semaphore-protocol/proof"

const solidityProof = packToSolidityProof(fullProof.proof)
```

It returns a new Solidity-compatible instance of the proof.

### Retrieve a nullifier hash

To get the Semaphore proof nullifier hash, access the proof's `publicSignals.nullifierHash` property. For example:

```ts
const { nullifierHash } = fullProof.publicSignals
```
