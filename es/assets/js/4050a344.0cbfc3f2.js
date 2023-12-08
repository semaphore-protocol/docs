"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[9656],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const n={sidebar_position:3},s="Contratos",i={unversionedId:"technical-reference/contracts",id:"version-V3/technical-reference/contracts",title:"Contratos",description:"Semaphore incluye dos tipos de contratos:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-V3/technical-reference/contracts.md",sourceDirName:"technical-reference",slug:"/technical-reference/contracts",permalink:"/es/docs/technical-reference/contracts",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V3/technical-reference/contracts.md",tags:[],version:"V3",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-V3/mySidebar",previous:{title:"Circuitos",permalink:"/es/docs/technical-reference/circuits"},next:{title:"Contratos desplegados",permalink:"/es/docs/deployed-contracts"}},c={},l=[{value:"Contratos base",id:"contratos-base",level:2},{value:"Contratos para la extensi\xf3n",id:"contratos-para-la-extensi\xf3n",level:2},{value:"Semaphore.sol",id:"semaphoresol",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contratos"},"Contratos"),(0,o.kt)("p",null,"Semaphore incluye dos tipos de contratos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/technical-reference/contracts#base-contracts"},(0,o.kt)("strong",{parentName:"a"},"Contratos base"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/technical-reference/contracts#extension-contracts"},(0,o.kt)("strong",{parentName:"a"},"Contratos para la extensi\xf3n")))),(0,o.kt)("p",null,"as\xed como ",(0,o.kt)("a",{parentName:"p",href:"/docs/technical-reference/contracts#semaphoresol"},(0,o.kt)("strong",{parentName:"a"},"Semaphore.sol")),", el principal contrato desplegado en las redes soportadas por Semaphore."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Para utilizar los contratos e interfaces Semaphore en su proyecto, instale el paquete NPM ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/main/packages/contracts"},(0,o.kt)("inlineCode",{parentName:"a"},"@semaphore-protocol/contracts")),".")),(0,o.kt)("h2",{id:"contratos-base"},"Contratos base"),(0,o.kt)("p",null,"Semaphore ofrece los siguientes contratos base:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/base/SemaphoreVerifier.sol"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreVerifier.sol")),": contiene una funci\xf3n para verificar pruebas Semaphore;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/base/SemaphoreGroups.sol"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreGroups.sol")),": contiene las funciones para crear grupos y a\xf1adir/remover/actualizar miembros.")),(0,o.kt)("p",null,"Los contratos base est\xe1n relacionados de forma muy cercana al protocolo.\nPuede utilizarlos en su contrato o puede utilizar ",(0,o.kt)("a",{parentName:"p",href:"/docs/technical-reference/contracts#semaphoresol"},(0,o.kt)("strong",{parentName:"a"},"Semaphore.sol"))," que ya los tiene integrados."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Si bien algunas dApps pueden utilizar grupos internos a la cadena, otros puede que prefieran utilizar grupos externos a la cadena, por lo que \xfanicamente guardar\xe1n las ra\xedces de sus \xe1rboles en el contrato.")),(0,o.kt)("h2",{id:"contratos-para-la-extensi\xf3n"},"Contratos para la extensi\xf3n"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/extensions/SemaphoreVoting.sol"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreVoting.sol")),": contrato para votaciones que contiene las funciones esenciales para crear encuestas, a\xf1adir electores, y emitir votos de forma an\xf3nima;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/extensions/SemaphoreWhistleblowing.sol"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreWhistleblowing.sol")),": contrato para denuncias que contiene las funciones esenciales para crear entidades (por ejemplo: organizaciones sin fines de lucro), a\xf1ade denunciantes, y filtraciones publicadas de forma an\xf3nima.")),(0,o.kt)("p",null,"Estos contratos extienden las capacidades del protocolo y proveen una aplicaci\xf3n l\xf3gica para casos de uso espec\xedficos.\nEn un futuro se incluir\xe1n m\xe1s extensiones."),(0,o.kt)("h2",{id:"semaphoresol"},"Semaphore.sol"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/contracts/Semaphore.sol"},(0,o.kt)("inlineCode",{parentName:"a"},"Semaphore.sol"))," utiliza los contratos base como punto de partida, los integra y de forma adicional brinda:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"un sistema que solamente permite que administradores (ej. cuentas de Ethereum o contratos inteligentes) controlen grupos;"),(0,o.kt)("li",{parentName:"ul"},"un mecanismo que guarda los ",(0,o.kt)("a",{parentName:"li",href:"/docs/technical-reference/circuits#nullifier-hash"},"hashes anuladores")," (nullifier hashes) de cada grupo y evita que el mismo miembro emita dos se\xf1ales;"),(0,o.kt)("li",{parentName:"ul"},"un mecanismo que permite que pruebas Semaphore generadas con ra\xedces de Merkle antiguas sean verificadas por un periodo de tiempo determinado por el administrador del grupo.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Visitando ",(0,o.kt)("a",{parentName:"p",href:"/docs/deployed-contracts"},"contratos desplegados")," puede encontrar las direcciones correspondientes a su red.")))}u.isMDXComponent=!0}}]);