(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{24905:function(e,n,r){"use strict";r.d(n,{Z:function(){return I}});var t=r(96156),c=r(81253),s=r(85893),i=r(86243),a=r(67294),o=r(97762),l=r(18397),u=r(50542),d=r(69964),p=r(14212),f=r(72642),h=r(15020);function m(e){e.className;var n=e.children,r=(0,a.useState)(!1),t=r[0],c=r[1],i=(0,a.useState)(0),m=i[0],j=i[1],g=n[0].props.children.map((function(e,n){var r=o.renderToString(e).replace('<li data-reactroot="">',"").slice(0,-5),t=r.endsWith("*");if(t){var c=r.slice(0,-1);return{index:n,correct:t,li:(0,h.ZP)(c)}}return{index:n,correct:t,li:(0,h.ZP)(r)}})),x=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);return g.some((function(e){return e.correct}))?(0,s.jsxs)("div",{id:x,className:"quiz",children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=Array.from(e.target.querySelectorAll('input[type="checkbox"]:checked')).map((function(e){return e.value})).map((function(e){return parseInt(e)})),r=g.filter((function(e){return e.correct})).map((function(e){return e.index})),t=r.map((function(e){return parseInt(e)})),s=n.every((function(e){return t.includes(e)}))&&n.length===r.length;s?(document.getElementById(x).style.backgroundColor="rgba(0, 170, 100, 0.3)",document.getElementById("".concat(x,"-submit")).remove(),c(!0),j(s)):(document.getElementById(x).style.backgroundColor="rgba(255, 0, 0, 0.3)",document.getElementById("".concat(x,"-submit")).innerHTML="Try again!")},style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,s.jsxs)(l.Z,{component:"fieldset",children:[(0,s.jsx)(d.Z,{component:"legend",children:"Quiz"}),g.map((function(e){return(0,s.jsx)(u.Z,{value:e.index,control:(0,s.jsx)(p.Z,{}),label:e.li,className:"".concat(x,"-checkbox"),disabled:t},e.index)}))]}),(0,s.jsx)(f.Z,{type:"submit",variant:"contained",color:"primary",className:"quizButton",id:"".concat(x,"-submit"),children:"Check my answer"})]}),m?(0,s.jsx)("p",{children:"Correct!"}):(0,s.jsx)("p",{})]}):(0,s.jsx)("ul",{children:n})}var j=r(28579),g=(r(17658),r(25675)),x=r(72165),v=(r(36063),r(40947)),b=r(81365),y=r(69260),N=r(81215),O=r(35595);function Z(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var w=function(e){var n=e.className,r=e.children,t=(0,a.useState)(!1),c=t[0],i=t[1],o=r.props.children,l=r.props.className;if(void 0!==l){var u=l.replace("lang-",""),d=j.Z.highlight(o,{language:u,ignoreIllegals:!0}),p=j.Z.getLanguage(d.language).name;return(0,s.jsxs)("div",{className:"code-block",onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[c&&(0,s.jsx)("div",{className:"hljs",children:u&&(0,s.jsx)("span",{className:"language",children:p})}),(0,s.jsx)("pre",{className:n+" "+u,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:d.value}})})]})}return(0,s.jsx)("pre",{className:n,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:o}})})},k=function(e){e.className;var n=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},(0,c.Z)(e,["className"])),r=n.src;return(0,s.jsx)("div",{className:"image-container",children:(0,s.jsx)(x.Z,{children:(0,s.jsx)("div",{className:"markdown-image-container",children:(0,s.jsx)(g.default,{className:"markdown-image",src:r,alt:n.alt,layout:"fill",objectFit:"cover"})})})})},P=function(e){e.className;var n=e.children;if(n.length>0&&"object"===typeof n[0]){var r=n[0].props.children.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(v.Z,{defaultCode:r})})}var t=n.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(v.Z,{defaultCode:t})})},S=function(e){e.className;var n=e.children.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(O.Z,{defaultCode:n})})},C=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(b.Z,{})})},_=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(N.Z,{})})},E=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(y.Z,{})})},T=function(e){e.className;var n=e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(m,{children:n})})};function I(e){return(0,i.n)(e,{overrides:{pre:{component:w,props:{className:"hljs"}},img:{component:k,props:{className:"image"}},Quiz:T,CodeEditor:P,PythonREPL:C,Terminal:_,JSInterpreter:E,EditorWithTabs:S}})}},91850:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t=r(85893),c=r(96156),s=r(34699),i=r(67294),a=r(62318),o=r(72642),l=r(16323);function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,c.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){var r=i.useState({top:!1,left:!1,bottom:!1,right:!1}),u=(0,s.Z)(r,2),p=u[0],f=u[1],h=function(e,n){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&f(d(d({},p),{},(0,c.Z)({},e,n)))}};return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsxs)(o.Z,{color:"primary","aria-label":"open drawer",className:"sidebar-button",onClick:h("left",!0),children:[(0,t.jsx)(l.Z,{}),"Table of Contents"]}),(0,t.jsx)(a.ZP,{variant:"temporary",open:p.left,className:"drawer-left temporary",onClose:h("left",!1),ModalProps:{keepMounted:!0},children:(0,t.jsx)("nav",{className:"sidenav",children:(0,t.jsx)("ul",{onClick:h("left",!1),onKeyDown:h("left",!1),children:e})})}),(0,t.jsx)(a.ZP,{variant:"permanent",anchor:"left",open:p.left,onClose:h("left",!1),className:"drawer-left permanent",sx:{flexShrink:0,zIndex:1,display:{xs:"none",sm:"none",md:"none",lg:"block"}},children:(0,t.jsx)("nav",{className:"sidenav",children:(0,t.jsx)("ul",{children:e})})})]})}},87968:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return d},default:function(){return p}});var t=r(85893),c=(r(41664),r(67294)),s=r(24905),i=r(11163),a=r(16492),o=r(26447),l=(r(28579),r(91850)),u=(r(25675),r(54065)),d=!0;function p(e){e.workshops,e.guides;var n=e.insights,r=(0,i.useRouter)().query.slug,d=n.find((function(e){return e.slug===r})).content,p=function(e){var n=(0,s.Z)(e),r=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type?r.push([n]):r[r.length-1].push(n)),e}),[]);return r.map((function(e,n){return(0,t.jsx)("div",{children:e.map((function(e,n){return(0,t.jsx)(c.Fragment,{children:e},n)}))},n)}))},f=(0,c.useState)(1),h=f[0],m=f[1],j=(0,c.useState)([]),g=j[0],x=j[1],v=(0,c.useState)([]),b=v[0],y=v[1],N=(0,c.useState)([]),O=(N[0],N[1]),Z=g.map((function(e,n){var r=void 0;return r=0===n?e.props.children[0].props.children:e.props.children[0].props.children.props.children[0],(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:h===n+1?"active":"",onClick:function(){return P(event,n+1)},children:r})},n)})),w=(0,l.Z)(Z,h);(0,c.useEffect)((function(){x(p(d)),y(p(d)[0]),O(Z)}),[d]);var k=function(e){return(0,t.jsx)(o.Z,{className:"pagination",children:(0,t.jsx)(a.Z,{count:g.length,page:e,onChange:P,siblingCount:2,boundaryCount:2})})},P=function(e,n){m(n),y(g[n-1]),window.scrollTo({top:0,behavior:"smooth"})};return(0,t.jsxs)(u.Z,{maxWidth:"xl",style:{display:"flex",marginTop:"1rem"},children:[(0,t.jsx)("div",{className:"sidebar",sx:{display:{md:"none"}},children:w}),(0,t.jsx)("div",{className:"content card-page",children:(0,t.jsxs)("div",{className:"workshop-container",children:[(0,t.jsx)("div",{children:k(h)}),b,(0,t.jsx)("div",{children:k(h)})]})})]})}},87616:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/insights/[slug]",function(){return r(87968)}])}},function(e){e.O(0,[774,164,635,757,571,902,318,321,995,636,888,179],(function(){return n=87616,e(e.s=n);var n}));var n=e.O();_N_E=n}]);