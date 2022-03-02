(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{24905:function(e,n,r){"use strict";r.d(n,{Z:function(){return T}});var t=r(96156),i=r(81253),s=r(85893),c=r(86243),l=r(67294),o=r(97762),a=r(18397),u=r(50542),d=r(69964),p=r(14212),h=r(72642),f=r(15020);function m(e){e.className;var n=e.children,r=(0,l.useState)(!1),t=r[0],i=r[1],c=(0,l.useState)(0),m=c[0],j=c[1],x=n[0].props.children.map((function(e,n){var r=o.renderToString(e).replace('<li data-reactroot="">',"").slice(0,-5),t=r.endsWith("*");if(t){var i=r.slice(0,-1);return{index:n,correct:t,li:(0,f.ZP)(i)}}return{index:n,correct:t,li:(0,f.ZP)(r)}})),g=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);return x.some((function(e){return e.correct}))?(0,s.jsxs)("div",{id:g,className:"quiz",children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=Array.from(e.target.querySelectorAll('input[type="checkbox"]:checked')).map((function(e){return e.value})).map((function(e){return parseInt(e)})),r=x.filter((function(e){return e.correct})).map((function(e){return e.index})),t=r.map((function(e){return parseInt(e)})),s=n.every((function(e){return t.includes(e)}))&&n.length===r.length;s?(document.getElementById(g).style.backgroundColor="rgba(0, 170, 100, 0.3)",document.getElementById("".concat(g,"-submit")).remove(),i(!0),j(s)):(document.getElementById(g).style.backgroundColor="rgba(255, 0, 0, 0.3)",document.getElementById("".concat(g,"-submit")).innerHTML="Try again!")},style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,s.jsxs)(a.Z,{component:"fieldset",children:[(0,s.jsx)(d.Z,{component:"legend",children:"Quiz"}),x.map((function(e){return(0,s.jsx)(u.Z,{value:e.index,control:(0,s.jsx)(p.Z,{}),label:e.li,className:"".concat(g,"-checkbox"),disabled:t},e.index)}))]}),(0,s.jsx)(h.Z,{type:"submit",variant:"contained",color:"primary",className:"quizButton",id:"".concat(g,"-submit"),children:"Check my answer"})]}),m?(0,s.jsx)("p",{children:"Correct!"}):(0,s.jsx)("p",{})]}):(0,s.jsx)("ul",{children:n})}var j=r(28579),x=(r(17658),r(25675)),g=r(72165),v=(r(36063),r(40947)),y=r(81365),b=r(69260),N=r(81215),k=r(35595);function Z(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var w=function(e){var n=e.className,r=e.children,t=(0,l.useState)(!1),i=t[0],c=t[1],o=r.props.children,a=r.props.className;if(void 0!==a){var u=a.replace("lang-",""),d=j.Z.highlight(o,{language:u,ignoreIllegals:!0}),p=j.Z.getLanguage(d.language).name;return(0,s.jsxs)("div",{className:"code-block",onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:[i&&(0,s.jsx)("div",{className:"hljs",children:u&&(0,s.jsx)("span",{className:"language",children:p})}),(0,s.jsx)("pre",{className:n+" "+u,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:d.value}})})]})}return(0,s.jsx)("pre",{className:n,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:o}})})},O=function(e){e.className;var n=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},(0,i.Z)(e,["className"])),r=n.src;return(0,s.jsx)("div",{className:"image-container",children:(0,s.jsx)(g.Z,{children:(0,s.jsx)("div",{className:"markdown-image-container",children:(0,s.jsx)(x.default,{className:"markdown-image",src:r,alt:n.alt,layout:"fill",objectFit:"cover"})})})})},P=function(e){e.className;var n=e.children.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(v.Z,{defaultCode:n})})},S=function(e){e.className;var n=e.children.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(k.Z,{defaultCode:n})})},C=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(y.Z,{})})},E=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(N.Z,{})})},_=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(b.Z,{})})},I=function(e){e.className;var n=e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(m,{children:n})})};function T(e){return(0,c.n)(e,{overrides:{pre:{component:w,props:{className:"hljs"}},img:{component:O,props:{className:"image"}},Quiz:I,CodeEditor:P,PythonREPL:C,Terminal:E,JSInterpreter:_,EditorWithTabs:S}})}},91850:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t=r(85893),i=r(96156),s=r(34699),c=r(67294),l=r(62318),o=r(11781),a=r(66735);function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){var r=c.useState({top:!1,left:!1,bottom:!1,right:!1}),u=(0,s.Z)(r,2),p=u[0],h=u[1],f=function(e,n){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&h(d(d({},p),{},(0,i.Z)({},e,n)))}};return(0,t.jsxs)(c.Fragment,{children:[(0,t.jsxs)(o.Z,{color:"primary","aria-label":"open drawer",className:"sidebar-button",onClick:f("left",!0),children:["Table of Contents",(0,t.jsx)(a.Z,{})]}),(0,t.jsx)(l.ZP,{variant:"temporary",open:p.left,className:"drawer-left temporary",onClose:f("left",!1),ModalProps:{keepMounted:!0},children:(0,t.jsx)("nav",{className:"sidenav",children:(0,t.jsx)("ul",{onClick:f("left",!1),onKeyDown:f("left",!1),children:e})})}),(0,t.jsx)(l.ZP,{variant:"permanent",anchor:"left",open:p.left,onClose:f("left",!1),className:"drawer-left permanent",sx:{flexShrink:0,zIndex:1,display:{xs:"none",sm:"none",md:"none",lg:"block"}},children:(0,t.jsx)("nav",{className:"sidenav",children:(0,t.jsx)("ul",{children:e})})})]})}},17732:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return b},default:function(){return N}});var t=r(85893),i=r(67294),s=r(24905),c=r(11163),l=r(16492),o=r(26447),a=r(96156),u=r(6413);var d=r(91850),p=r(54065),h=r(34699),f=r(86243),m=(r(4298),r(85012)),j=r(72642),x=r(47376),g=r(19536),v=r(19755);function y(e){var n=i.useState(!1),s=(0,h.Z)(n,2),c=s[0],l=s[1],o=function(){return l(!1)},a=e.content.content,u=e.content.title;(0,i.useEffect)((function(){globalThis.jQuery=v;window.addEventListener("keydown",(function(e){"Escape"===e.key&&o()}))}),[o]);var d=function(e){var n=(0,f.n)(e),r=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type||"h2"===n.type?r.push([n]):r[r.length-1].push(n)),e}),[]);return r}(a),p=function(){var e=r(36340),n=e.Deck,i=e.Slide,s=e.Heading;e.CodePane;return(0,t.jsxs)(n,{style:{height:"100%",width:"100%",backgroundColor:"#fff"},children:[(0,t.jsxs)(i,{children:[(0,t.jsx)(j.Z,{onClick:o,style:{position:"absolute",width:"50px"},children:(0,t.jsx)(g.Z,{})}),(0,t.jsx)(s,{size:1,children:u})]}),d.map((function(e,n){return(0,t.jsxs)(i,{children:[(0,t.jsx)(j.Z,{onClick:o,style:{position:"absolute",width:"50px"},children:(0,t.jsx)(g.Z,{})}),(0,t.jsx)("div",{className:"slides",style:{overflow:"auto",height:"100%"},children:e.map((function(e,n){return"h1"===e.type||"h2"===e.type?(0,t.jsx)(s,{children:e.props.children},n):"CodeEditor"===e.type?void 0:(0,t.jsx)("div",{children:e},n)}))})]},n)}))]})};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{children:[(0,t.jsx)(j.Z,{onClick:function(){return l(!0)},children:(0,t.jsx)(x.Z,{fontSize:"large"})}),(0,t.jsx)(m.Z,{open:c,onClose:o,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,t.jsx)(p,{})})]})})}var b=!0;function N(e){var n=e.workshops,r=e.guides,h=e.insights,f=(0,c.useRouter)(),m=f.query.slug,j=n.find((function(e){return e.slug===m})),x=j.title,g=j.content,v=function(e,n){var r=e.excerpt,i=e.title,c=e.dependencies||[],l=n.workshops,o=n.guides,d=n.insights,p=Object.keys(c).map((function(e){var n=c[e];return{title:e,items:Object.keys(n).map((function(e){var r=n[e],t=l.find((function(n){return n.slug===e})),i=d.find((function(n){return n.slug===e})),s=o.find((function(n){return n.slug===e})),c=t||i||s||null,u=(0,a.Z)({},e,{title:c.title,excerpt:r.excerpt,required:r.required,recommended:r.recommended,link:c?"/".concat(c.itemPath):"#"});return{title:c.title,allItems:u}}))}})).map((function(e){return(0,t.jsxs)("div",{className:"frontpage-item dependency",children:[(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("ul",{children:e.items.map((function(e){var n=e.allItems[Object.keys(e.allItems)[0]],r=(0,s.Z)(n.excerpt),i=n.required,c=n.recommended,l=i?"required":c?"recommended":"";return(0,t.jsxs)("li",{className:l,children:[(0,t.jsx)("a",{href:n.link,children:e.title}),(0,t.jsx)("p",{children:r})]},n)}))})]},e.title)})),h=Object.keys(e).map((function(n){var r=e[n];return"dependencies"===n||"workshops"===n||"insights"===n||"installations"===n||"excerpt"===n||"title"===n||"cover_image"===n||"content"===n||"slug"===n||"path"===n||"itemPath"===n||"authors"===n?null:{title:n,items:r}})).filter((function(e){return null!==e})).map((function(e){return(0,t.jsxs)("div",{className:"frontpage-item",children:[(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("ul",{children:e.items&&Object.keys(e.items).map((function(n){var r=e.items[n];if("description"===n){var i=(0,s.Z)(r);return(0,t.jsx)("li",{children:(0,t.jsx)("p",{children:i})},n)}if("string"===typeof r){var c=(0,s.Z)(r);return(0,t.jsx)("li",{className:"frontpage-list",children:c},n)}if("object"===typeof r){if(r.link){var l=(0,s.Z)(r.excerpt);return(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:r.link,children:n}),(0,t.jsx)("p",{children:l})]},n)}if(r.excerpt){var o=(0,s.Z)(r.excerpt);return(0,t.jsxs)("li",{children:[n,(0,t.jsx)("p",{children:o})]},n)}return(0,t.jsx)("div",{children:Object.keys(r).map((function(e){var n=(0,s.Z)(r[e]);return(0,t.jsx)("p",{className:"list-description",children:n},e)}))})}}))})]},e.title)})),f=0===h.length&&0===p.length;return(0,t.jsxs)("div",{className:"frontpage",children:[(0,t.jsx)("h1",{children:i}),r&&(0,t.jsx)("div",{className:"excerpt",children:(0,t.jsx)("p",{children:r})}),!f&&(0,t.jsxs)(u.ZP,{columns:{sm:1,md:2},spacing:2,children:[p,h]})]})}(j,{workshops:n,guides:r,insights:h}),b=function(e){var n=(0,s.Z)(e),r=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type?r.push([n]):r[r.length-1].push(n)),e}),[]);return r.unshift(v),r.map((function(e,n){return void 0!=e.props&&e.props.className.includes("frontpage")?v:(0,t.jsx)("div",{children:e.map((function(e,n){return(0,t.jsx)(i.Fragment,{children:e},n)}))},n)}))},N=(0,i.useState)(1),k=N[0],Z=N[1],w=(0,i.useState)(b(g)),O=w[0],P=w[1],S=(0,i.useState)([]),C=S[0],E=S[1],_=(0,i.useState)([]),I=(_[0],_[1]),T=O.map((function(e,n){var r=void 0;return r=0===n?e.props.children[0].props.children:e.props.children[0].props.children.props.children[0],(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:k===n+1?"active":"",onClick:function(){return q(event,n+1)},children:r})},n)}));(0,i.useEffect)((function(){P(b(g)),Z(1),E(v),I(T);var e=new URLSearchParams(window.location.search).get("page");e&&(Z(e),E(O[e-1]))}),[m]);var D=(0,d.Z)(T,k),M=function(e){return(0,t.jsx)(o.Z,{className:"pagination",children:(0,t.jsx)(l.Z,{count:O.length,page:Number(e),onChange:q,siblingCount:2,boundaryCount:2})})},q=function(e,n){window.scrollTo({top:0,behavior:"smooth"});var r=Number(n);f.push("/workshops/".concat(m,"/?page=").concat(r),void 0,{shallow:!0,scroll:!1}),Z(r),E(O[r-1])};return(0,t.jsxs)(p.Z,{maxWidth:"xl",style:{display:"flex",marginTop:"1rem"},children:[(0,t.jsx)("div",{className:"sidebar",sx:{display:{md:"none"}},children:D}),(0,t.jsxs)("div",{className:"content card-page",children:[(0,t.jsx)("div",{className:"presentation",children:(0,t.jsx)(y,{content:j,title:x})}),(0,t.jsxs)("div",{className:"workshop-container",children:[(0,t.jsx)("div",{children:M(k)}),C,(0,t.jsx)("div",{children:M(k)})]})]})]})}},40382:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workshops/[slug]",function(){return r(17732)}])},68211:function(){}},function(e){e.O(0,[774,164,635,757,571,902,318,505,79,636,888,179],(function(){return n=40382,e(e.s=n);var n}));var n=e.O();_N_E=n}]);