var Ae=Object.defineProperty;var z=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var Y=(e,t,n)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))Te.call(t,n)&&Y(e,n,t[n]);if(z)for(var n of z(t))Fe.call(t,n)&&Y(e,n,t[n]);return e};import{a as l,p as k,i as se,b as v,h as f,c,m as x,d as F,s as _,e as ke,f as We,o as p,g as w,j as Ee,k as $e,l as L,n as Ie,r as oe,q as je,t as He,u as ie,v as Ue,w as ae,x as Ne,y as Be,z as Le,A as Ve}from"./chunk-14091e5e.js";function R(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function J(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function V(e){var t,n;"urlPathname"in e?(l(((t=Object.getOwnPropertyDescriptor(e,"urlPathname"))===null||t===void 0?void 0:t.get)===q),l(((n=Object.getOwnPropertyDescriptor(e,"urlParsed"))===null||n===void 0?void 0:n.get)===Q)):(Object.defineProperty(e,"urlPathname",{get:q,enumerable:!0,configurable:!0}),Object.defineProperty(e,"urlParsed",{get:Q,enumerable:!0,configurable:!0}))}function le(e){let{url:t,_baseUrl:n,_urlProcessor:i}=e;return l(n.startsWith("/")),l(i===null||se(i)),i!==null&&(t=i(t)),k(t,n)}function q(){const{pathname:e}=le(this),t=e;return l(t.startsWith("/")),t}function Q(){const e=le(this),{origin:t,pathname:n,pathnameOriginal:i,search:s,searchAll:o,searchOriginal:r,hash:a,hashOriginal:u}=e;return{origin:t,pathname:n,pathnameOriginal:i,search:s,searchAll:o,searchOriginal:r,hash:a,hashOriginal:u,get hashString(){return v(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0}),u},get searchString(){return v(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0}),r}}}function De(e,t){if(!R(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function Ke(e){return f(e,"then")&&se(e.then)}const U="@",$=":";function D(e,t){c(e==="*"||e.startsWith("/"),`Invalid route string \`${e}\`${e===""?" (empty string)":""}: route strings should start with a leading slash \`/\` (or be \`*\`).`),l(t.startsWith("/"));const n=e.split("/"),i=t.split("/"),s={};Ge(e),e==="*"&&(e="/*");for(let o=0;o<Math.max(n.length,i.length);o++){const r=n[o],a=i[o];if(r==="*")return s["*"]=i.slice(Math.max(1,o)).join("/"),{routeParams:s};if(r&&(r.startsWith(U)||r.startsWith($))){if(v(!r.startsWith($),`Outdated route string \`${e}\`, use \`${e.split($).join(U)}\` instead.`,{onlyOnce:!0}),!a)return null;s[r.slice(1)]=a}else if((r||"")!==(a||""))return null}return{routeParams:s}}function Ge(e){const t=e.split("*").length-1;c(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),c(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function C(e){const t=e.split("/").filter(a=>a!==""&&a!=="*"),n=a=>!a.startsWith(":");let i=0;for(const a of t){if(!n(a))break;i++}const s=t.filter(a=>n(a)).length,o=t.filter(a=>!n(a)).length,r=e.endsWith("*");return{numberOfParameterSegments:o,numberOfStaticSegmentsBeginning:i,numberOfStaticSegements:s,isCatchAll:r}}function X(e){const n=D(e,e);return n!==null&&Object.keys(n.routeParams).length===0}function ze(e){e.sort(Ye).sort(x(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(x(t=>t.routeType==="STRING"&&X(t.routeString)===!1)).sort(x(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(x(t=>t.routeType==="STRING"&&X(t.routeString)===!0)).sort(x(t=>t.routeType==="FILESYSTEM")).sort(x(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function Ye(e,t){var n,i;{const s=(n=e.precedence)!==null&&n!==void 0?n:0,o=(i=t.precedence)!==null&&i!==void 0?i:0;if(s!==o)return s>o?-1:1}if(!t.routeString||!e.routeString)return 0;{const o=F(r=>C(r).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(o!==0)return o}{const o=F(r=>C(r).numberOfStaticSegements)(e.routeString,t.routeString);if(o!==0)return o}{const o=F(r=>C(r).numberOfParameterSegments)(e.routeString,t.routeString);if(o!==0)return o}{if(C(t.routeString).isCatchAll)return-1;if(C(e.routeString).isCatchAll)return 1}return 0}function Je(e,t){return Ze(e)?D(e,t):qe(e,t)}function qe(e,t){return t=Qe(t),l(t.startsWith("/")),l(e.startsWith("/")),l(!t.endsWith("/")||t==="/"),l(!e.endsWith("/")||e==="/"),t!==e?null:{routeParams:{}}}function Qe(e){if(!e.endsWith("/"))return e;for(;e.endsWith("/");)e=_(e,0,-1);return e===""?"/":e}function Xe(e,t,n){const s=t.filter(({filesystemRoot:r})=>e.startsWith(r)).sort(F(({filesystemRoot:r})=>r.length))[0];let o;if(s){const{filesystemRoot:r,routeRoot:a}=s,u={pageId:e,filesystemRoot:r,routeRoot:a};l(a.startsWith("/")&&e.startsWith("/")&&r.startsWith("/"),u),l(e.startsWith(r),u),r!=="/"?(l(!r.endsWith("/"),u),o=_(e,r.length,0)):o=e,l(o.startsWith("/"),u),o=a+(a.endsWith("/")?"":"/")+_(o,1,0)}else o=Me(e,n);return l(o.startsWith("/")),o=o.split("/").filter(r=>r!=="pages"&&r!=="src"&&r!=="index").join("/"),l(!o.includes(".page.")),l(!o.endsWith(".")),o.endsWith("/index")&&(o=_(o,0,-6)),o===""&&(o="/"),l(o.startsWith("/")),l(!o.endsWith("/")||o==="/"),o}function Ze(e){return e.includes(U)}function Me(e,t){if(l(t.includes(e)),t.forEach(r=>{l(!r.includes("\\")),l(r.startsWith("/"))}),t.length===1){const r=e.split("/");let a=r.slice(r.indexOf("pages")).join("/");return a.startsWith("/")||(a="/"+a),a}const n=t[0].split("/"),i=[];for(const r in n){const a=n[r];if(a==="pages"||t.some(u=>u.split("/")[r]!==a))break;i.push(a)}const s=i.join("/");l(!s.endsWith("/")),l(e.startsWith(s));let o=e.slice(s.length);return o.startsWith("/")||(o="/"+o),o}async function et(e,t,n,i){const s=i,o="route()";let r;try{r=e.default({url:t,pageContext:n})}catch(d){return{hookError:d,hookName:o,hookFilePath:s}}c(!Ke(r)||e.iKnowThePerformanceRisksOfAsyncRouteFunctions,`The Route Function ${i} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`);try{r=await r}catch(d){return{hookError:d,hookName:o,hookFilePath:s}}if(r===!1)return null;r===!0&&(r={}),c(R(r),`The Route Function ${i} should return a boolean or a plain JavaScript object, instead it returns \`${f(r,"constructor")?r.constructor:r}\`.`);let a=null;f(r,"precedence")&&(a=r.precedence,c(typeof a=="number",`The \`precedence\` value returned by the Route Function ${i} should be a number.`)),c(!("pageContext"in r),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"),ue(r,`The \`routeParams\` object returned by the Route Function ${i} should`);const u=r.routeParams||{};return l(R(u)),Object.keys(r).forEach(d=>{c(d==="match"||d==="routeParams"||d==="precedence",`The Route Function ${i} returned an object with an unknown key \`{ ${d} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:a,routeParams:u}}function ue(e,t){l(t.endsWith(" should")),f(e,"routeParams")&&(c(R(e.routeParams),`${t} be a plain JavaScript object.`),c(Object.values(e.routeParams).every(n=>typeof n=="string"),`${t} only hold string values.`))}function ce(e,{hook:t,errorMessagePrefix:n}){if(!n){l(t);const{hookName:i,hookFilePath:s}=t;l(s.startsWith("/")),l(!i.endsWith(")")),n=`The \`pageContext\` provided by the \`export { ${i} }\` of ${s}`}c(ke(e),`${n} should be an object.`),c(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),v(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{onlyOnce:!0})}async function tt(e,t){const n=e.filePath,i="onBeforeRoute";let s;try{s=await e.onBeforeRoute(t)}catch(a){return{hookError:a,hookName:i,hookFilePath:n}}const o=`The \`onBeforeRoute()\` hook exported by ${e.filePath}`;if(c(s==null||De(s,["pageContext"])&&f(s,"pageContext"),`${o} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),s==null)return{};if(c(f(s,"pageContext","object"),`${o} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),f(s.pageContext,"_pageId")&&!f(s.pageContext,"_pageId","null")){const a=`${o} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;c(f(s.pageContext,"_pageId","string"),`${a} a string or \`null\``),c(t._allPageIds.includes(s.pageContext._pageId),`${a} one of following values: \`[${t._allPageIds.map(u=>`'${u}'`).join(", ")}]\`.`)}f(s.pageContext,"routeParams")&&ue(s.pageContext,`${o} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const r=s.pageContext;return ce(r,{hook:{hookFilePath:n,hookName:i}}),{pageContextProvidedByUser:r}}async function nt(e){let t=null;const n=[];await Promise.all(e._pageFilesAll.filter(r=>r.fileType===".page.route").map(r=>{var a;return(a=r.loadFile)===null||a===void 0?void 0:a.call(r)})),e._pageFilesAll.filter(r=>r.fileType===".page.route"&&r.isDefaultPageFile).forEach(({filePath:r,fileExports:a})=>{if(l(a),"onBeforeRoute"in a){c(f(a,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${r} should be a function.`);const{onBeforeRoute:u}=a;t={filePath:r,onBeforeRoute:u}}"filesystemRoutingRoot"in a&&(c(f(a,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${r} should be a string.`),c(f(a,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${r} is \`'${a.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),n.push({filesystemRoot:rt(r),routeRoot:a.filesystemRoutingRoot}))});const i=e._allPageIds,s=[],o=i.filter(r=>!We(r)).filter(r=>{const a=e._pageFilesAll.find(g=>g.pageId===r&&g.fileType===".page.route");if(!a)return!0;const{filePath:u,fileExports:d}=a;l(d),c("default"in d,`${u} should have a default export.`),c(f(d,"default","string")||f(d,"default","function"),`The default export of ${u} should be a string or a function.`),c(!("iKnowThePerformanceRisksOfAsyncRouteFunctions"in d)||f(d,"iKnowThePerformanceRisksOfAsyncRouteFunctions","boolean"),`The export \`iKnowThePerformanceRisksOfAsyncRouteFunctions\` of ${u} should be a boolean.`);const P=d.default;return s.push({pageId:r,filesystemRoute:null,pageRouteFile:{filePath:u,fileExports:d,routeValue:P}}),!1});return o.forEach(r=>{const a=Xe(r,n,o);l(a.startsWith("/")),l(!a.endsWith("/")||a==="/"),s.push({pageId:r,filesystemRoute:a,pageRouteFile:null})}),{pageRoutes:s,onBeforeRouteHook:t}}function rt(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=_(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}var T;function Z(...e){var t,n;T||(T=(n=(t=globalThis).__vite_plugin_ssr_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),T&&T(...e)}async function fe(e){V(e);const{pageRoutes:t,onBeforeRouteHook:n}=await nt(e);Z("Pages routes:",t.map(g=>({pageId:g.pageId,filesystemRoute:g.filesystemRoute,pageRouteFile:g.pageRouteFile&&{filePath:g.pageRouteFile.filePath,routeValue:g.pageRouteFile.routeValue}})));const i={};if(n){const g=await tt(n,e);if("hookError"in g)return g;if("pageContextProvidedByUser"in g){if(p(i,g.pageContextProvidedByUser),f(i,"_pageId","string")||f(i,"_pageId","null"))return f(i,"routeParams")?l(f(i,"routeParams","object")):p(i,{routeParams:{}}),p(i,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:i};p(e,i)}}p(i,{_routingProvidedByOnBeforeRouteHook:!1});const s=e._allPageIds;l(s.length>=0),c(s.length>0,"No `*.page.js` file found. You must create a `*.page.js` file, e.g. `pages/index.page.js` (or `pages/index.page.{jsx, tsx, vue, ...}`).");const{urlPathname:o}=e;l(o.startsWith("/"));const r=[],a=[];if(await Promise.all(t.map(async g=>{const{pageId:h,filesystemRoute:W,pageRouteFile:S}=g;if(S){const y=S.fileExports,O=S.filePath;if(f(y,"default","string")){const m=y.default;c(m.startsWith("/"),`A Route String should start with a leading \`/\` but \`${O}\` has \`export default '${m}'\`. Make sure to \`export default '/${m}'\` instead.`);const A=D(m,o);if(A){const{routeParams:E}=A;a.push({pageId:h,routeString:m,routeParams:E,routeType:"STRING"})}}else if(f(y,"default","function")){const m=await et(y,o,e,O);if(m&&"hookError"in m){r.push(m);return}if(m){const{routeParams:A,precedence:E}=m;a.push({pageId:h,precedence:E,routeParams:A,routeType:"FUNCTION"})}}else l(!1)}else{const y=Je(W,o);if(y){const{routeParams:O}=y;a.push({pageId:h,routeParams:O,routeType:"FILESYSTEM"})}}})),r.length>0)return r[0];ze(a);const u=a[0];if(Z(`Route matches for URL \`${o}\` (in precedence order):`,a),p(i,{_routeMatches:a}),!u)return p(i,{_pageId:null,routeParams:{}}),{pageContextAddendum:i};const{pageId:d,routeParams:P}=u;return l(R(P)),p(i,{_pageId:d,routeParams:P}),{pageContextAddendum:i}}function de(){const e="/blog/";return st(e)?"/":e}function st(e){return!!e.startsWith("http")}function he(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function ot(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}function it(e){return k(e,"/").pathname}function K(e){window.location.href=e}const at="/";function lt(e,t,n){l(t!==".pageContext.json"||n===!0);const{pathnameOriginal:i,searchOriginal:s,hashOriginal:o}=k(e,at);e.startsWith("/")&&l(e===`${i}${s||""}${o||""}`,{url:e});let r=i;if(n)r.endsWith("/")&&(r=_(r,0,-1)),l(!r.endsWith("/")),r===""&&(r="/index");else{const u=i.endsWith("/")?"":"/";r=r+`${u}index`}return`${r}${t}${s||""}${o||""}`}const ut=w();let M=!1;const ge={markNavigationChange(){M=!0},get noNavigationChangeYet(){return!M&&this.isOriginalUrl(w())},isOriginalUrl(e){return e===ut}};function pe(e,t){return Ee(e,t)}async function ct(e,t){const i=pe(e,t).filter(o=>o.fileType===".page.server");return await Promise.all(i.map(async o=>{o.exportNames||(l(o.loadExportNames,t),await o.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:i.some(({exportNames:o})=>(l(o),o.includes("onBeforeRender")))}}function ft(e,t,n,i){l(!t.endsWith(")"));const s=`The \`export { ${t} }\` of ${i}`;c(e==null||R(e),`${s} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(dt(e,n,s),"pageContext"in e&&ce(e.pageContext,{hook:{hookName:t,hookFilePath:i}}))}function dt(e,t,n){const i=[],s=Object.keys(e);for(const o of s)t.includes(o)||i.push(o);c(i.length===0,[n,"returned an object with unknown keys",J(i)+".","Only following keys are allowed:",J(t)+"."].join(" "))}async function ht(e){return e._isFirstRenderAttempt&&ge.isOriginalUrl(e.url)?await gt(e):await pt(e)}async function gt(e){const t=$e();me(t),p(t,{isHydration:!0,_comesDirectlyFromServer:!0});{const{exports:n,exportsAll:i,pageExports:s,pageFilesLoaded:o}=await L(e._pageFilesAll,t._pageId);p(t,{exports:n,exportsAll:i,pageExports:s,_pageFilesLoaded:o})}return t}async function pt(e){const t={isHydration:!1};p(t,await yt(e));{let n;try{n=await L(e._pageFilesAll,t._pageId)}catch(a){throw K(e.url),a}const{exports:i,exportsAll:s,pageExports:o,pageFilesLoaded:r}=n;p(t,{exports:i,exportsAll:s,pageExports:o,_pageFilesLoaded:r})}return p(t,await mt(b(b({},e),t))),l([!0,!1].includes(t._comesDirectlyFromServer)),t}async function mt(e){const t=Ie(e,"onBeforeRender");if(t){const i=t.hook,s={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},o=oe(b(b({},e),s)),r=await i(o);ft(r,"onBeforeRender",["pageContext"],t.filePath);const a=r==null?void 0:r.pageContext;return p(s,a),s}else if((await ct(e._pageFilesAll,e._pageId)).hasOnBeforeRenderServerSideOnlyHook){const i=await bt(e),s={};return Object.assign(s,i),p(s,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:i}),s}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function yt(e){const t=await fe(e);if("hookError"in t)throw t.hookError;const n=t.pageContextAddendum;return n._pageId===null?(setTimeout(()=>{Pt(e)},0),c(!1,`[404] Page ${e.url} does not exist. (\`vite-plugin-ssr\` will now server-side route to \`${e.url}\`.)`)):l(f(n,"_pageId","string")),n}function Pt(e){window.location.pathname=e.url}async function bt(e){const t=lt(e.url,".pageContext.json",!0),n=await fetch(t);l(n.status!==404);{const r=n.headers.get("content-type");c(r&&r.includes("application/json"),`Wrong HTTP Response Header \`content-type\` value for URL ${t} (it should be \`application/json\` but we got \`${r}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const i=await n.text(),s=je(i);if(l(!("pageContext404PageDoesNotExist"in s)),"serverSideError"in s)throw He("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(f(s,"pageContext"));const o=s.pageContext;return l(R(o)),l(f(o,"_pageId","string")),me(o),o}const ee=["urlPathname","urlParsed"],vt=["Page","pageExports","exports"];function me(e){[...vt,...ee].forEach(n=>{n in e&&(ee.includes(n)?(l(n.startsWith("url")),v(!1,`\`pageContext.${n}\` is already available in the browser when using \`useClientRouter()\`; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):v(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[n])})}let I;async function ye(){return I||(I=await wt()),I}async function wt(){const e=de();ie(e);const t={_urlProcessor:null,_baseUrl:e,_objectCreatedByVitePluginSsr:!0,_isProduction:!0},{pageFilesAll:n,allPageIds:i}=Ue();return p(t,{_pageFilesAll:n,_allPageIds:i}),t}async function Pe(e){const t=await ye(),n=b({url:e},t),i=t._pageFilesAll;V(n);const s=await fe(n);if(!("pageContextAddendum"in s))return{pageId:null,pageFilesAll:i};const o=s.pageContextAddendum._pageId;return o?{pageId:o,pageFilesAll:i}:{pageId:null,pageFilesAll:i}}function N(e){return e.exportNames?e.exportNames:(l(e.fileExports,e.pageId),Object.keys(e.fileExports))}function Rt({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:i(),isClientRouting:o()};function i(){return t.some(u=>u.pageId===n&&u.fileType===".page")?(s(),!1):t.some(u=>u.pageId===n&&u.fileType===".page.server")}function s(){const r=e.some(a=>N(a).includes("render"));c(r,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,u)=>` (${u+1}): ${a.filePath}`)].join(`
`)].join(" "))}function o(){return e.some(a=>N(a).includes("clientRouting"))}}function St({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:i}){let s=[];const o=t.filter(a=>!e.includes(a)),r=[];if(r.push(...e.map(a=>({id:a.filePath,onlyAssets:!1}))),r.push(...o.map(a=>({id:a.filePath,onlyAssets:!0}))),n)s=e.map(a=>a.filePath);else{const a=i?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js";r.push({id:a,onlyAssets:!1}),s=[a]}return{clientEntries:s,clientDependencies:r}}function xt(e,t){let n=ae(e,t);const i=pe(e,t),{isHtmlOnly:s,isClientRouting:o}=Rt({pageFilesClientSide:n,pageFilesServerSide:i,pageId:t});s&&(n=n.filter(u=>u.fileType===".page.client"&&!N(u).includes("render")));const{clientEntries:r,clientDependencies:a}=St({pageFilesClientSide:n,pageFilesServerSide:i,isHtmlOnly:s,isClientRouting:o});return{isHtmlOnly:s,isClientRouting:o,clientEntries:r,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:i}}async function _t(e,t,{sharedPageFilesAlreadyLoaded:n}){const i=ae(e,t);await Promise.all(i.map(async s=>{var o;l(s.fileType===".page"||s.fileType===".page.client"),!(n&&s.fileType===".page")&&await((o=s.loadExportNames)===null||o===void 0?void 0:o.call(s))}))}async function be(e){const{pageId:t,pageFilesAll:n}=await Pe(e);if(!t)return!1;await _t(n,t,{sharedPageFilesAlreadyLoaded:!1});const{isHtmlOnly:i,isClientRouting:s}=xt(n,t);return!i&&s}function ve(e){const t=e.getAttribute("href");return!!(t===null||t===""||he(t)||Ct(e)||Ot(t)||!At(t)||!Ne(t))}function Ct(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function Ot(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function At(e){const t=de();ie(t);const{hasBaseUrl:n}=k(e,t);return n}function Tt(e,t){const n=Ft(e,t);return{prefetchPageContext:!1,prefetchStaticAssets:n}}function Ft(e,t){let n=kt(t),i=(()=>n!==null?(v(n===null,"The `data-prefetch` attribute is outdated.",{onlyOnce:!0}),n===!0?{when:"VIEWPORT"}:{when:"HOVER"}):("prefetchLinks"in e.exports&&c(n===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports?e.exports.prefetchStaticAssets===!1?!1:e.exports.prefetchStaticAssets:{when:"HOVER"}))();return i&&i.when==="VIEWPORT"&&!e._isProduction&&(Be(!1,"Viewport prefetching is disabled in development, see https://vite-plugin-ssr.com/useClientRouter"),i={when:"HOVER"}),i}function kt(e){const t=e.getAttribute("data-prefetch");if(t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;c(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const we=new Map;function Re(e){const t=xe(e);return we.has(t)}function Se(e){const t=xe(e);we.set(t,!0)}function xe(e){return it(e)}const te=new Map;async function j(e){if(c(!he(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),Re(e))return;Se(e);const{pageId:t,pageFilesAll:n}=await Pe(e);if(t)try{await L(n,t)}catch(i){throw jt(),i}}function Wt(e){Se(e.url),[...document.getElementsByTagName("A")].forEach(async n=>{if(te.has(n))return;te.set(n,!0);const i=n.getAttribute("href");if(ve(n)||(l(i),!await be(i))||Re(i))return;const s=Tt(e,n);if(s.prefetchStaticAssets){if(s.prefetchStaticAssets.when==="HOVER")n.addEventListener("mouseover",()=>j(i)),n.addEventListener("touchstart",()=>j(i),{passive:!0});else if(s.prefetchStaticAssets.when==="VIEWPORT"){const o=new IntersectionObserver(r=>{r.forEach(a=>{a.isIntersecting&&(j(i),o.disconnect())})});o.observe(n)}}else return})}function Et(){return!!$t()}function $t(){return!!window.__REACT_DEVTOOLS_GLOBAL_HOOK__}const It="__vite_plugin_ssr__navigate";zt();let H,_e=!1;function jt(){_e=!0}function Ht(){Kt(),Ut((s,{keepScrollPosition:o})=>{i(o?"preserve-scroll":"scroll-to-top-or-hash",s)}),Nt(s=>{i(s)}),globalThis[It]=async(s,{keepScrollPosition:o,overwriteLastHistoryEntry:r})=>{await i(o?"preserve-scroll":"scroll-to-top-or-hash",s,r)};let e=0,t,n=!1;i("preserve-scroll");return;async function i(s,o=w(),r=!1){var a,u;_e&&K(o);const d=++e;l(d>=1),d>1&&n===!1&&(H&&H(),n=!0);const P=()=>Et()&&d===1?!1:d!==e,g=await ye();if(P())return;const h=b({url:o,_isFirstRenderAttempt:d===1},g);V(h);const W=await ht(h);P()||(p(h,W),"onPageTransitionStart"in h.exports&&(c(f(h.exports,"onPageTransitionStart","function"),"The `export { onPageTransitionStart }` of "+h.exportsAll.onPageTransitionStart[0]._filePath+" should be a function."),H=h.exports.onPageTransitionStart),t&&await t,!P()&&(Bt(o,r),ge.markNavigationChange(),l(t===void 0),t=(async()=>{const S=oe(h);Le(h);const y=await h.exports.render(S);c(y===void 0,"`export { render }` of "+h.exportsAll.render[0]._filePath+" should not return any value"),l(h.url===o),Wt(h)})(),await t,t=void 0,h._isFirstRenderAttempt?(Ve(h,"onHydrationEnd"),await((u=(a=h.exports).onHydrationEnd)===null||u===void 0?void 0:u.call(a,h))):d===e&&(h.exports.onPageTransitionEnd&&(c(f(h.exports,"onPageTransitionEnd","function"),"The `export { onPageTransitionEnd }` of "+h.exportsAll.onPageTransitionEnd[0]._filePath+" should be a function."),h.exports.onPageTransitionEnd()),n=!1),Vt(s),G(),Ce=!0))}}function Ut(e){document.addEventListener("click",t);return;async function t(s){if(!n(s))return;const o=i(s.target);if(!o)return;const r=o.getAttribute("href");if(ve(o))return;if(l(r),s.preventDefault(),!await be(r)){K(r);return}const a=![null,"false"].includes(o.getAttribute("keep-scroll-position"));e(r,{keepScrollPosition:a})}function n(s){return s.button===0&&!s.ctrlKey&&!s.shiftKey&&!s.altKey&&!s.metaKey}function i(s){for(;s.tagName!=="A";){const{parentNode:o}=s;if(!o)return null;s=o}return s}}let B=w({withoutHash:!0});function Nt(e){window.addEventListener("popstate",t=>{const n=w({withoutHash:!0});if(n==B)return;B=n;const s=Dt(t.state)||"scroll-to-top-or-hash";e(s)})}function Bt(e,t){w()!==e&&(G(),t?window.history.replaceState(void 0,"",e):window.history.pushState(void 0,"",e),B=w({withoutHash:!0}))}function Lt(){return{x:window.scrollX,y:window.scrollY}}function Vt(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const s=Gt();if(s&&s!=="top"){const o=document.getElementById(s)||document.getElementsByName(s)[0];if(o){o.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;const{x:n,y:i}=t;window.scrollTo(n,i)}function Dt(e=window.history.state){return f(e,"scrollPosition")?e.scrollPosition:null}function Kt(){window.addEventListener("scroll",ot(ne,Math.ceil(1e3/3)),{passive:!0}),Oe(ne)}function ne(){const e=Lt();window.history.replaceState({scrollPosition:e},"")}function Gt(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}let Ce=!1;function zt(){re(),Oe(re),Yt(()=>Ce&&G())}function G(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function re(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function Oe(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function Yt(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}Ht();
