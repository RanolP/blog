import{v as a}from"./chunk-1659798d.js";import{u as l,m as c,h as m,y as B}from"./chunk-72af033d.js";import{j as n,a as s,F as d}from"./chunk-28d4f1e3.js";import{s as h}from"./chunk-6e086343.js";function f({href:e,children:C}){if(!e.startsWith("/"))throw new Error("Link href should start with /");e=e.slice(1);const i=l(),u=["navigation-link",i.urlPathname===e&&"is-active"].filter(Boolean).join(" ");return n("a",{href:"/blog/"+e,className:u,children:C})}function w(){return s(d,{children:[n(f,{href:"/posts/\uBE14\uB85C\uADF8\uB97C-\uB9CC\uB4E4\uAE30-\uC704\uD55C-\uD55C-\uAC78\uC74C/edit",children:"\uC5EC\uAE30"}),"\uC5D0\uC11C \uC5D0\uB514\uD130\uB97C \uAD6C\uACBD\uD558\uC138\uC694 \uC544\uC9C1 \uC544\uBB34\uAC83\uB3C4 \uC548 \uB428",n(E,{})]})}const g=h("div",{border:"0.2em solid #d2d2d2",borderRadius:"0.4em",width:"40em",minHeight:"8em",padding:"0.2em",margin:"0.5em",outline:"none","&:focus":{borderColor:"#73a3d2"}});function E(){const[e,C]=c([]),[i,u]=c({begin:0,end:0}),t=m(null);return B(()=>{function o(){const r=document.getSelection();if(!r){u(null);return}!t.current||!t.current.contains(r.anchorNode)||!t.current.contains(r.focusNode)||(console.log(r),u({begin:0,end:0}))}return document.addEventListener("selectionchange",o),()=>{document.removeEventListener("selectionchange",o)}},[i]),s(d,{children:[n("h2",{children:"\uB9CC\uB4E4\uACE0 \uBD80\uC234\uC57C\uC9C0 \uADF8\uB0E5\uC740 \uBABB \uB9CC\uB4E4\uACA0\uB2E4"}),n(g,{contentEditable:!0,ref:t,children:e.map(o=>n(p,{node:o}))})]})}function p({node:e}){return a(e.kind,e.props)}export{E as Editor,p as OlimNodeView,w as Page};
