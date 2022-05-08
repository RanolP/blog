var ve=Object.defineProperty;var L=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var V=(e,t,n)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))Re.call(t,n)&&V(e,n,t[n]);if(L)for(var n of L(t))xe.call(t,n)&&V(e,n,t[n]);return e};import{a,p as U,i as Z,h as f,b as $,c as T,m as x,s as S,d as u,e as Se,f as Ce,o as p,g as A,j as _e,l as E,k as Te,r as M,n as $e,q as Ae,t as ee,u as We,v as Fe,w as Oe,x as N,y as ke,z as Ie}from"./chunk-97adf383.js";function w(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Object"}function D(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function B(e){var t,n;"urlPathname"in e?(a(((t=Object.getOwnPropertyDescriptor(e,"urlPathname"))===null||t===void 0?void 0:t.get)===K),a(((n=Object.getOwnPropertyDescriptor(e,"urlParsed"))===null||n===void 0?void 0:n.get)===G)):(Object.defineProperty(e,"urlPathname",{get:K,enumerable:!0,configurable:!0}),Object.defineProperty(e,"urlParsed",{get:G,enumerable:!0,configurable:!0}))}function te(e){let{url:t,_baseUrl:n,_urlProcessor:o}=e;return a(n.startsWith("/")),a(o===null||Z(o)),o!==null&&(t=o(t)),U(t,n)}function K(){const{pathnameWithoutBaseUrl:e}=te(this),t=e;return a(t.startsWith("/")),t}function G(){const e=te(this),{origin:t,pathnameWithoutBaseUrl:n,search:o,hash:r,searchString:s,hashString:i}=e;return{origin:t,pathname:n,search:o,hash:r,searchString:s,hashString:i}}function je(e,t){if(!w(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function Ue(e){return f(e,"then")&&Z(e.then)}function Ee(e,t){const n=Ne({path:e,caseSensitive:!0},t);if(!n)return null;const o=n.params;return a(w(o)),{routeParams:o}}function Ne(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Be(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let s=r[0],i=s.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:o.reduce((c,g,m)=>{if(g==="*"){let d=l[m]||"";i=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return c[g]=He(l[m]||"",g),c},{}),pathname:s,pathnameBase:i,pattern:e}}function Be(e,t=!1,n=!0){$(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`,{onlyOnce:!0});let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(i,l)=>(o.push(l),"([^\\/]+)"));return e.endsWith("*")?(o.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:\\b|$)",[new RegExp(r,t?void 0:"i"),o]}function He(e,t){try{return decodeURIComponent(e)}catch(n){return $(!1,`The value for the URL param "${t}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`,{onlyOnce:!0}),e}}function ne(e,t){return Ee(e,t)}function Le(e,t){if(!t.routeString||!e.routeString)return 0;{const o=T(r=>C(r).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(o!==0)return o}{const o=T(r=>C(r).numberOfStaticSegements)(e.routeString,t.routeString);if(o!==0)return o}{const o=T(r=>C(r).numberOfParameterSegments)(e.routeString,t.routeString);if(o!==0)return o}{if(C(t.routeString).isCatchAll)return-1;if(C(e.routeString).isCatchAll)return 1}return 0}function C(e){const t=e.split("/").filter(l=>l!==""&&l!=="*"),n=l=>!l.startsWith(":");let o=0;for(const l of t){if(!n(l))break;o++}const r=t.filter(l=>n(l)).length,s=t.filter(l=>!n(l)).length,i=e.endsWith("*");return{numberOfParameterSegments:s,numberOfStaticSegmentsBeginning:o,numberOfStaticSegements:r,isCatchAll:i}}function Y(e){const n=ne(e,e);return n!==null&&Object.keys(n.routeParams).length===0}function Ve(e){return e.sort(Le).sort(x(o=>o.routeType==="FUNCTION"&&!!o.precedence&&o.precedence<0)).sort(x(o=>o.routeType==="STRING"&&Y(o.routeString)===!1)).sort(x(o=>o.routeType==="FUNCTION"&&!o.precedence)).sort(x(o=>o.routeType==="STRING"&&Y(o.routeString)===!0)).sort(x(o=>o.routeType==="FILESYSTEM")).sort(x(o=>o.routeType==="FUNCTION"&&!!o.precedence&&o.precedence>0))[0]}function De(e,t){return Ke(e,t)}function Ke(e,t){return t=Ge(t),a(t.startsWith("/")),a(e.startsWith("/")),a(!t.endsWith("/")||t==="/"),a(!e.endsWith("/")||e==="/"),t!==e?null:{routeParams:{}}}function Ge(e){if(!e.endsWith("/"))return e;for(;e.endsWith("/");)e=S(e,0,-1);return e===""?"/":e}function Ye(e,t){const o=t.filter(({rootPath:s})=>e.startsWith(s)).sort(T(({rootPath:s})=>s.length))[0];let r;if(o){const{rootPath:s,rootValue:i}=o,l={pageId:e,rootPath:s,rootValue:i};a(i.startsWith("/")&&e.startsWith("/")&&s.startsWith("/"),l),a(e.startsWith(s),l),s!=="/"?(a(!s.endsWith("/"),l),r=S(e,s.length,0)):r=e,a(r.startsWith("/"),l),r=i+(i.endsWith("/")?"":"/")+S(r,1,0)}else r=e;return a(r.startsWith("/")),r=r.split("/pages/").join("/"),r=r.split("/src/").join("/"),r=r.split("/index/").join("/"),a(!r.includes(".page.")),r.endsWith("/index")&&(r=S(r,0,-6)),r===""&&(r="/"),a(r.startsWith("/")),a(!r.endsWith("/")||r==="/"),r}async function Je(e,t,n,o){const r=o,s="route()";let i;try{i=e.default({url:t,pageContext:n})}catch(c){return{hookError:c,hookName:s,hookFilePath:r}}u(!Ue(i)||e.iKnowThePerformanceRisksOfAsyncRouteFunctions,`The Route Function ${o} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`);try{i=await i}catch(c){return{hookError:c,hookName:s,hookFilePath:r}}if(i===!1)return null;i===!0&&(i={}),u(w(i),`The Route Function ${o} should return a boolean or a plain JavaScript object, instead it returns \`${f(i,"constructor")?i.constructor:i}\`.`);let l=null;f(i,"precedence")&&(l=i.precedence,u(typeof l=="number",`The \`precedence\` value returned by the Route Function ${o} should be a number.`)),u(!("pageContext"in i),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"),re(i,`The \`routeParams\` object returned by the Route Function ${o} should`);const h=i.routeParams||{};return a(w(h)),Object.keys(i).forEach(c=>{u(c==="match"||c==="routeParams"||c==="precedence",`The Route Function ${o} returned an object with an unknown key \`{ ${c} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:null,routeParams:h}}function re(e,t){a(t.endsWith(" should")),f(e,"routeParams")&&(u(w(e.routeParams),`${t} be a plain JavaScript object.`),u(Object.values(e.routeParams).every(n=>typeof n=="string"),`${t} only hold string values.`))}function oe(e,{hook:t,errorMessagePrefix:n}){if(!n){a(t);const{hookName:o,hookFilePath:r}=t;a(r.startsWith("/")),a(!o.endsWith(")")),n=`The \`pageContext\` provided by the \`export { ${o} }\` of ${r}`}u(Se(e),`${n} should be an object.`),u(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),a(!("_pageId"in e))}async function ze(e,t){const n=e.filePath,o="onBeforeRoute";let r;try{r=await e.onBeforeRoute(t)}catch(l){return{hookError:l,hookName:o,hookFilePath:n}}const s=`The \`onBeforeRoute()\` hook exported by ${e.filePath}`;if(u(r==null||je(r,["pageContext"])&&f(r,"pageContext"),`${s} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),r==null)return{};if(u(f(r,"pageContext","object"),`${s} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),f(r.pageContext,"_pageId")&&!f(r.pageContext,"_pageId","null")){const l=`${s} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;u(f(r.pageContext,"_pageId","string"),`${l} a string or \`null\``),u(t._allPageIds.includes(r.pageContext._pageId),`${l} one of following values: \`[${t._allPageIds.map(h=>`'${h}'`).join(", ")}]\`.`)}f(r.pageContext,"routeParams")&&re(r.pageContext,`${s} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const i=r.pageContext;return oe(i,{hook:{hookFilePath:n,hookName:o}}),{pageContextProvidedByUser:i}}async function qe(e){let t=null;const n=[];await Promise.all(e._pageFilesAll.filter(s=>s.fileType===".page.route").map(s=>{var i;return(i=s.loadFile)===null||i===void 0?void 0:i.call(s)})),e._pageFilesAll.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).map(async({filePath:s,fileExports:i})=>{if(a(i),"onBeforeRoute"in i){u(f(i,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:l}=i;t={filePath:s,onBeforeRoute:l}}"filesystemRoutingRoot"in i&&(u(f(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),u(f(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${i.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),n.push({rootPath:Qe(s),rootValue:i.filesystemRoutingRoot}))});const o=e._allPageIds,r=[];return o.filter(s=>!Ce(s)).map(async s=>{const i=Ye(s,n);a(i.startsWith("/")),a(!i.endsWith("/")||i==="/");const l={pageId:s,filesystemRoute:i},h=e._pageFilesAll.find(c=>c.pageId===s&&c.fileType===".page.route");if(h){const{filePath:c,fileExports:g}=h;a(g),u("default"in g,`${c} should have a default export.`),u(f(g,"default","string")||f(g,"default","function"),`The default export of ${c} should be a string or a function.`),u(!("iKnowThePerformanceRisksOfAsyncRouteFunctions"in g)||f(g,"iKnowThePerformanceRisksOfAsyncRouteFunctions","boolean"),`The export \`iKnowThePerformanceRisksOfAsyncRouteFunctions\` of ${c} should be a boolean.`);const m=g.default;p(l,{pageRouteFile:{filePath:c,fileExports:g,routeValue:m}}),r.push(l)}else r.push(l)}),{pageRoutes:r,onBeforeRouteHook:t}}function Qe(e){a(e.startsWith("/")),a(!e.endsWith("/"));const t=e.split("/"),n=S(t,0,-1).join("/")||"/";return a(n.startsWith("/")),a(!n.endsWith("/")||n==="/"),n}async function se(e){B(e);const{pageRoutes:t,onBeforeRouteHook:n}=await qe(e),o={};if(n){const m=await ze(n,e);if("hookError"in m)return m;if("pageContextProvidedByUser"in m){if(p(o,m.pageContextProvidedByUser),f(o,"_pageId","string")||f(o,"_pageId","null"))return f(o,"routeParams")?a(f(o,"routeParams","object")):p(o,{routeParams:{}}),{pageContextAddendum:o};p(e,o)}}const r=e._allPageIds;a(r.length>=0),u(r.length>0,"No `*.page.js` file found. You must create a `*.page.js` file, e.g. `pages/index.page.js` (or `pages/index.page.{jsx, tsx, vue, ...}`).");const{urlPathname:s}=e;a(s.startsWith("/"));const i=[],l=[];if(await Promise.all(t.map(async m=>{const{pageId:d,filesystemRoute:W,pageRouteFile:b}=m;if(b){const P=b.fileExports,R=b.filePath;if(f(P,"default","string")){const y=P.default;u(y.startsWith("/"),`A Route String should start with a leading \`/\` but \`${R}\` has \`export default '${y}'\`. Make sure to \`export default '/${y}'\` instead.`);const _=ne(y,s);if(_){const{routeParams:F}=_;l.push({pageId:d,routeString:y,routeParams:F,routeType:"STRING"})}}else if(f(P,"default","function")){const y=await Je(P,s,e,R);if(y&&"hookError"in y){i.push(y);return}if(y){const{routeParams:_,precedence:F}=y;l.push({pageId:d,precedence:F,routeParams:_,routeType:"FUNCTION"})}}else a(!1)}else{const P=De(W,s);if(P){const{routeParams:R}=P;l.push({pageId:d,routeParams:R,routeType:"FILESYSTEM"})}}})),i.length>0)return i[0];const h=Ve(l);if(!h)return p(o,{_pageId:null,routeParams:{}}),{pageContextAddendum:o};const{pageId:c,routeParams:g}=h;return a(w(g)),p(o,{_pageId:c,routeParams:g}),{pageContextAddendum:o}}function ie(){const e="/";return Xe(e)?"/":e}function Xe(e){return!!e.startsWith("http")}function ae(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function Ze(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}function Me(e,t,n){a(t!==".pageContext.json"||n===!0);const{pathnameWithoutBaseUrl:o,searchString:r,hashString:s}=U(e,"/");e.startsWith("/")&&a(e===`${o}${r||""}${s||""}`,{url:e});let i=o;if(n)i.endsWith("/")&&(i=S(i,0,-1)),a(!i.endsWith("/")),i===""&&(i="/index");else{const h=o.endsWith("/")?"":"/";i=i+`${h}index`}return`${i}${t}${r||""}${s||""}`}const et=A();let J=!1;const le={markNavigationChange(){J=!0},get noNavigationChangeYet(){return!J&&this.isOriginalUrl(A())},isOriginalUrl(e){return e===et}};function tt(e,t,n,o){a(!t.endsWith(")"));const r=`The \`export { ${t} }\` of ${o}`;u(e==null||w(e),`${r} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(nt(e,n,r),"pageContext"in e&&oe(e.pageContext,{hook:{hookName:t,hookFilePath:o}}))}function nt(e,t,n){const o=[],r=Object.keys(e);for(const s of r)t.includes(s)||o.push(s);u(o.length===0,[n,"returned an object with unknown keys",D(o)+".","Only following keys are allowed:",D(t)+"."].join(" "))}async function rt(e){return e._isFirstRenderAttempt&&le.isOriginalUrl(e.url)?await ot(e):await st(e)}async function ot(e){const t=_e();ue(t);const n=await E(e._pageFilesAll,t._pageId,!0);return p(t,n),p(t,{isHydration:!0,_comesDirectlyFromServer:!0}),t}async function st(e){const t={isHydration:!1};return p(t,await at(e)),p(t,await E(e._pageFilesAll,t._pageId,!0)),p(t,await it(v(v({},e),t))),a([!0,!1].includes(t._comesDirectlyFromServer)),t}async function it(e){const t=Te(e,"onBeforeRender");if(t){const o=t.hook,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},s=M(v(v({},e),r)),i=await o(s);tt(i,"onBeforeRender",["pageContext"],t.filePath);const l=i==null?void 0:i.pageContext;return p(r,l),r}else if(await ut(e)){const o=await ct(e),r={};return Object.assign(r,o),p(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:o}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function at(e){const t=await se(e);if("hookError"in t)throw t.hookError;const n=t.pageContextAddendum;return n._pageId===null?(setTimeout(()=>{lt(e)},0),u(!1,`[404] Page ${e.url} does not exist. (\`vite-plugin-ssr\` will now server-side route to \`${e.url}\`.)`)):a(f(n,"_pageId","string")),n}function lt(e){window.location.pathname=e.url}async function ut(e){const t=e._pageFilesAll.filter(n=>n.fileType===".page.server"&&n.isRelevant(e._pageId));return await Promise.all(t.map(n=>{var o;return(o=n.loadExportNames)===null||o===void 0?void 0:o.call(n)})),t.some(({exportNames:n})=>(a(n),n.includes("onBeforeRender")))}async function ct(e){const t=Me(e.url,".pageContext.json",!0),n=await fetch(t);a(n.status!==404);{const i=n.headers.get("content-type");u(i&&i.includes("application/json"),`Wrong HTTP Response Header \`content-type\` value for URL ${t} (it should be \`application/json\` but we got \`${i}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const o=await n.text(),r=$e(o);if(a(!("pageContext404PageDoesNotExist"in r)),"serverSideError"in r)throw Ae("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");a(f(r,"pageContext"));const s=r.pageContext;return a(w(s)),a(f(s,"_pageId","string")),ue(s),s}const z=["urlPathname","urlParsed"],ft=["Page","pageExports","exports"];function ue(e){[...ft,...z].forEach(n=>{n in e&&(z.includes(n)?(a(n.startsWith("url")),$(!1,`\`pageContext.${n}\` is already available in the browser when using \`useClientRouter()\`; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):$(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[n])})}let O;async function ce(){return O||(O=await dt()),O}async function dt(){const e=ie();ee(e);const t={_urlProcessor:null,_baseUrl:e,_objectCreatedByVitePluginSsr:!0,_isProduction:!0},{pageFilesAll:n,allPageIds:o}=We();return p(t,{_pageFilesAll:n,_allPageIds:o}),t}async function fe(e){const t=await ce(),n=v({url:e},t),o=t._pageFilesAll;B(n);const r=await se(n);if(!("pageContextAddendum"in r))return{pageId:null,pageFilesAll:o};const s=r.pageContextAddendum._pageId;return s?{pageId:s,pageFilesAll:o}:{pageId:null,pageFilesAll:o}}function ht(e,t,n){const o=t.filter(l=>(l.fileType===".page.client"||l.fileType===".page")&&l.isRelevant(e)),r=o.some(l=>gt(l,n)),s=o.some(l=>de(l,n).includes("render"));return{isHtmlOnly:!r||!s,pageFilesClientCandidates:o}}function de(e,t){if(e.fileType===".page.client")return a(e.exportNames,e.filePath),e.exportNames;if(e.fileType===".page"){if(e.exportNames)return e.exportNames;if(!t&&e.fileExports)return Object.keys(e.fileExports);a(!1,e.filePath)}a(!1)}function gt(e,t){const n=de(e,t);return n.includes("default")||n.includes("Page")}async function he(e){const{pageId:t,pageFilesAll:n}=await fe(e);if(!t)return!1;await Promise.all(n.filter(r=>(r.fileType===".page"||r.fileType===".page.client")&&r.isRelevant(t)).map(r=>{var s;return(s=r.loadExportNames)===null||s===void 0?void 0:s.call(r)}));const{isHtmlOnly:o}=ht(t,n,!0);return!o}function ge(e){const t=e.getAttribute("href");return!!(t===null||t===""||ae(t)||pt(e)||mt(t)||!yt(t)||!Fe(t))}function pt(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function mt(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function yt(e){const t=ie();ee(t);const{hasBaseUrl:n}=U(e,t);return n}const pe=new Map,q=new Map;async function k(e){if(u(!ae(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),me(e))return;ye(e);const{pageId:t,pageFilesAll:n}=await fe(e);t&&await E(n,t,!0)}function Pt(e,t){ye(t),[...document.getElementsByTagName("A")].forEach(async o=>{if(q.has(o))return;q.set(o,!0);const r=o.getAttribute("href");if(ge(o)||(a(r),!await he(r))||me(r))return;let s=bt(o);if(s===null&&(s=e),a([!0,!1].includes(s)),s){const i=new IntersectionObserver(l=>{l.forEach(h=>{h.isIntersecting&&(k(r),i.disconnect())})});i.observe(o)}else o.addEventListener("mouseover",()=>k(r)),o.addEventListener("touchstart",()=>k(r),{passive:!0})})}function me(e){const t=Pe(e);return pe.has(t)}function ye(e){const t=Pe(e);pe.set(t,!0)}function Pe(e){return Oe(e)}function bt(e){const t=e.getAttribute("data-prefetch");if(t===null)return null;if(a(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;u(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}function wt(){return!!vt()}function vt(){return!!window.__REACT_DEVTOOLS_GLOBAL_HOOK__}Ft();let I;function Rt(){At(),xt((r,{keepScrollPosition:s})=>{o(s?"preserve-scroll":"scroll-to-top-or-hash",r)}),St(r=>{o(r)});let e=0,t,n=!1;o("preserve-scroll");return;async function o(r,s=A(),i=!1){var l,h;const c=++e;a(c>=1),c>1&&n===!1&&(I&&I(),n=!0);const g=()=>wt()&&c===1?!1:c!==e,m=await ce();if(g())return;const d=v({url:s,_isFirstRenderAttempt:c===1},m);B(d);const W=await rt(d);g()||(p(d,W),"onPageTransitionStart"in d.exports&&(u(f(d.exports,"onPageTransitionStart","function"),"The `export { onPageTransitionStart }` of "+d.exportsAll.onPageTransitionStart[0].filePath+" should be a function."),I=d.exports.onPageTransitionStart),t&&await t,!g()&&(Ct(s,i),le.markNavigationChange(),a(t===void 0),t=(async()=>{var b;const P=M(d);ke(d);const R=await d.exports.render(P);u(R===void 0,"`export { render }` of "+d.exportsAll.render[0].filePath+" should not return any value"),Pt(!!(!((b=d.exports)===null||b===void 0)&&b.prefetchLinks),s)})(),await t,t=void 0,d._isFirstRenderAttempt?(Ie(d,"onHydrationEnd"),await((h=(l=d.exports).onHydrationEnd)===null||h===void 0?void 0:h.call(l,d))):c===e&&(d.exports.onPageTransitionEnd&&(u(f(d.exports,"onPageTransitionEnd","function"),"The `export { onPageTransitionEnd }` of "+d.exportsAll.onPageTransitionEnd[0].filePath+" should be a function."),d.exports.onPageTransitionEnd()),n=!1),Tt(r),H(),be=!0))}}function xt(e){document.addEventListener("click",t);return;async function t(r){if(!n(r))return;const s=o(r.target);if(!s)return;const i=s.getAttribute("href");if(ge(s))return;if(a(i),r.preventDefault(),!await he(i)){window.location.href=i;return}const l=![null,"false"].includes(s.getAttribute("keep-scroll-position"));e(i,{keepScrollPosition:l})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function o(r){for(;r.tagName!=="A";){const{parentNode:s}=r;if(!s)return null;r=s}return r}}let j=N();function St(e){window.addEventListener("popstate",t=>{const n=N();if(n==j)return;j=n;const r=$t(t.state)||"scroll-to-top-or-hash";e(r)})}function Ct(e,t){A()!==e&&(H(),t?window.history.replaceState(void 0,"",e):window.history.pushState(void 0,"",e),j=N())}function _t(){return{x:window.scrollX,y:window.scrollY}}function Tt(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const r=Wt();if(r&&r!=="top"){const s=document.getElementById(r)||document.getElementsByName(r)[0];if(s){s.scrollIntoView();return}}t={x:0,y:0}}else a("x"in e&&"y"in e),t=e;const{x:n,y:o}=t;window.scrollTo(n,o)}function $t(e=window.history.state){return f(e,"scrollPosition")?e.scrollPosition:null}function At(){window.addEventListener("scroll",Ze(Q,100),{passive:!0}),we(Q)}function Q(){const e=_t();window.history.replaceState({scrollPosition:e},"")}function Wt(){let{hash:e}=window.location;return e===""?null:(a(e.startsWith("#")),e=e.slice(1),e)}let be=!1;function Ft(){X(),we(X),Ot(()=>be&&H())}function H(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function X(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function we(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function Ot(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}Rt();
