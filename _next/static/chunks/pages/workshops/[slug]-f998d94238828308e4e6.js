(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{24905:function(e,n,r){"use strict";r.d(n,{Z:function(){return T}});var t=r(96156),i=r(81253),s=r(85893),c=r(86243),l=r(67294),a=r(97762),o=r(18397),u=r(50542),d=r(69964),p=r(14212),h=r(72642),f=r(15020);function m(e){e.className;var n=e.children,r=(0,l.useState)(!1),t=r[0],i=r[1],c=(0,l.useState)(0),m=c[0],j=c[1],x=n[0].props.children.map((function(e,n){var r=a.renderToString(e).replace('<li data-reactroot="">',"").slice(0,-5),t=r.endsWith("*");if(t){var i=r.slice(0,-1);return{index:n,correct:t,li:(0,f.ZP)(i)}}return{index:n,correct:t,li:(0,f.ZP)(r)}})),v=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);return x.some((function(e){return e.correct}))?(0,s.jsxs)("div",{id:v,className:"quiz",children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=Array.from(e.target.querySelectorAll('input[type="checkbox"]:checked')).map((function(e){return e.value})).map((function(e){return parseInt(e)})),r=x.filter((function(e){return e.correct})).map((function(e){return e.index})),t=r.map((function(e){return parseInt(e)})),s=n.every((function(e){return t.includes(e)}))&&n.length===r.length;s?(document.getElementById(v).style.backgroundColor="rgba(0, 170, 100, 0.3)",document.getElementById("".concat(v,"-submit")).remove(),i(!0),j(s)):(document.getElementById(v).style.backgroundColor="rgba(255, 0, 0, 0.3)",document.getElementById("".concat(v,"-submit")).innerHTML="Try again!")},style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,s.jsxs)(o.Z,{component:"fieldset",children:[(0,s.jsx)(d.Z,{component:"legend",children:"Quiz"}),x.map((function(e){return(0,s.jsx)(u.Z,{value:e.index,control:(0,s.jsx)(p.Z,{}),label:e.li,className:"".concat(v,"-checkbox"),disabled:t},e.index)}))]}),(0,s.jsx)(h.Z,{type:"submit",variant:"contained",color:"primary",className:"quizButton",id:"".concat(v,"-submit"),children:"Check my answer"})]}),m?(0,s.jsx)("p",{children:"Correct!"}):(0,s.jsx)("p",{})]}):(0,s.jsx)("ul",{children:n})}var j=r(28579),x=(r(17658),r(25675)),v=r(72165),g=(r(36063),r(40947)),y=r(81365),b=r(69260),N=r(81215),k=r(35595);function Z(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var w=function(e){var n=e.className,r=e.children,t=(0,l.useState)(!1),i=t[0],c=t[1],a=r.props.children,o=r.props.className;if(void 0!==o){var u=o.replace("lang-",""),d=j.Z.highlight(a,{language:u,ignoreIllegals:!0}),p=j.Z.getLanguage(d.language).name;return(0,s.jsxs)("div",{className:"code-block",onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:[i&&(0,s.jsx)("div",{className:"hljs",children:u&&(0,s.jsx)("span",{className:"language",children:p})}),(0,s.jsx)("pre",{className:n+" "+u,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:d.value}})})]})}return(0,s.jsx)("pre",{className:n,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:a}})})},O=function(e){e.className;var n=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},(0,i.Z)(e,["className"])),r=n.src;return(0,s.jsx)("div",{className:"image-container",children:(0,s.jsx)(v.Z,{children:(0,s.jsx)("div",{className:"markdown-image-container",children:(0,s.jsx)(x.default,{className:"markdown-image",src:r,alt:n.alt,layout:"fill",objectFit:"cover"})})})})},P=function(e){e.className;var n=e.children.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(g.Z,{defaultCode:n})})},S=function(e){e.className;var n=e.children.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(k.Z,{defaultCode:n})})},C=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(y.Z,{})})},E=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(N.Z,{})})},_=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(b.Z,{})})},I=function(e){e.className;var n=e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(m,{children:n})})};function T(e){return(0,c.n)(e,{overrides:{pre:{component:w,props:{className:"hljs"}},img:{component:O,props:{className:"image"}},Quiz:I,CodeEditor:P,PythonREPL:C,Terminal:E,JSInterpreter:_,EditorWithTabs:S}})}},91850:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t=r(85893),i=r(96156),s=r(34699),c=r(67294),l=r(62318),a=r(72642),o=r(16323);function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){var r=c.useState({top:!1,left:!1,bottom:!1,right:!1}),u=(0,s.Z)(r,2),p=u[0],h=u[1],f=function(e,n){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&h(d(d({},p),{},(0,i.Z)({},e,n)))}};return(0,t.jsxs)(c.Fragment,{children:[(0,t.jsxs)(a.Z,{color:"primary","aria-label":"open drawer",className:"sidebar-button",onClick:f("left",!0),children:[(0,t.jsx)(o.Z,{}),"Table of Contents"]}),(0,t.jsx)(l.ZP,{variant:"temporary",open:p.left,className:"drawer-left temporary",onClose:f("left",!1),ModalProps:{keepMounted:!0},children:(0,t.jsx)("nav",{className:"sidenav",children:(0,t.jsx)("ul",{onClick:f("left",!1),onKeyDown:f("left",!1),children:e})})}),(0,t.jsx)(l.ZP,{variant:"permanent",anchor:"left",open:p.left,onClose:f("left",!1),className:"drawer-left permanent",sx:{flexShrink:0,zIndex:1,display:{xs:"none",sm:"none",md:"none",lg:"block"}},children:(0,t.jsx)("nav",{className:"sidenav",children:(0,t.jsx)("ul",{children:e})})})]})}},17732:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return g},default:function(){return y}});var t=r(85893),i=r(67294),s=r(24905),c=r(11163),l=r(96156),a=r(6413);var o=r(91850),u=r(54065),d=r(72642),p=r(34699),h=r(86243),f=(r(4298),r(85012)),m=r(47376),j=r(19536),x=r(19755);function v(e){var n=i.useState(!1),s=(0,p.Z)(n,2),c=s[0],l=s[1],a=function(){return l(!1)},o=e.content.content,u=e.content.title;(0,i.useEffect)((function(){globalThis.jQuery=x;window.addEventListener("keydown",(function(e){"Escape"===e.key&&a()}))}),[a]);var v=function(e){var n=(0,h.n)(e),r=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type||"h2"===n.type?r.push([n]):r[r.length-1].push(n)),e}),[]);return r}(o),g=function(){var e=r(36340),n=e.Deck,i=e.Slide,s=e.Heading;e.CodePane;return(0,t.jsxs)(n,{style:{height:"100%",width:"100%",backgroundColor:"#fff"},children:[(0,t.jsxs)(i,{children:[(0,t.jsx)(d.Z,{onClick:a,style:{position:"absolute",width:"50px"},children:(0,t.jsx)(j.Z,{})}),(0,t.jsx)(s,{size:1,children:u})]}),v.map((function(e,n){return(0,t.jsxs)(i,{children:[(0,t.jsx)(d.Z,{onClick:a,style:{position:"absolute",width:"50px"},children:(0,t.jsx)(j.Z,{})}),(0,t.jsx)("div",{className:"slides",style:{overflow:"auto",height:"100%"},children:e.map((function(e,n){return"h1"===e.type||"h2"===e.type?(0,t.jsx)(s,{children:e.props.children},n):"CodeEditor"===e.type?void 0:(0,t.jsx)("div",{children:e},n)}))})]},n)}))]})};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{children:[(0,t.jsx)(d.Z,{onClick:function(){return l(!0)},children:(0,t.jsx)(m.Z,{fontSize:"large"})}),(0,t.jsx)(f.Z,{open:c,onClose:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,t.jsx)(g,{})})]})})}var g=!0;function y(e){var n=e.workshops,r=e.guides,p=e.insights,h=(0,c.useRouter)(),f=h.query.slug,m=n.find((function(e){return e.slug===f})),j=m.title,x=m.content,g=function(e,n){var r=e.excerpt,i=e.title,c=e.dependencies||[],o=n.workshops,u=n.guides,d=n.insights,p=Object.keys(c).map((function(e){var n=c[e];return{title:e,items:Object.keys(n).map((function(e){var r=n[e],t=o.find((function(n){return n.slug===e})),i=d.find((function(n){return n.slug===e})),s=u.find((function(n){return n.slug===e})),c=t||i||s||null,a=(0,l.Z)({},e,{title:c.title,excerpt:r.excerpt,required:r.required,recommended:r.recommended,link:c?"/".concat(c.itemPath):"#"});return{title:c.title,allItems:a}}))}})).map((function(e){return(0,t.jsxs)("div",{className:"frontpage-item dependency",children:[(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("ul",{children:e.items.map((function(e){var n=e.allItems[Object.keys(e.allItems)[0]],r=(0,s.Z)(n.excerpt),i=n.required,c=n.recommended,l=i?"required":c?"recommended":"";return(0,t.jsxs)("li",{className:l,children:[(0,t.jsx)("a",{href:n.link,children:e.title}),(0,t.jsx)("p",{children:r})]},n)}))})]},e.title)})),h=Object.keys(e).map((function(n){var r=e[n];return"dependencies"===n||"workshops"===n||"insights"===n||"installations"===n||"excerpt"===n||"title"===n||"cover_image"===n||"content"===n||"slug"===n||"path"===n||"itemPath"===n||"authors"===n?null:{title:n,items:r}})).filter((function(e){return null!==e})).map((function(e){return(0,t.jsxs)("div",{className:"frontpage-item",children:[(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("ul",{children:e.items&&Object.keys(e.items).map((function(n){var r=e.items[n];if("description"===n){var i=(0,s.Z)(r);return(0,t.jsx)("li",{children:(0,t.jsx)("p",{children:i})},n)}if("string"===typeof r){var c=(0,s.Z)(r);return(0,t.jsx)("li",{className:"frontpage-list",children:c},n)}if("object"===typeof r){if(r.link){var l=(0,s.Z)(r.excerpt);return(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:r.link,children:n}),(0,t.jsx)("p",{children:l})]},n)}if(r.excerpt){var a=(0,s.Z)(r.excerpt);return(0,t.jsxs)("li",{children:[n,(0,t.jsx)("p",{children:a})]},n)}return(0,t.jsx)("div",{children:Object.keys(r).map((function(e){var n=(0,s.Z)(r[e]);return(0,t.jsx)("p",{className:"list-description",children:n},e)}))})}}))})]},e.title)})),f=0===h.length&&0===p.length;return(0,t.jsxs)("div",{className:"frontpage",children:[(0,t.jsx)("h1",{children:i}),r&&(0,t.jsx)("div",{className:"excerpt",children:(0,t.jsx)("p",{children:r})}),!f&&(0,t.jsxs)(a.ZP,{columns:{sm:1,md:2},spacing:2,children:[p,h]})]})}(m,{workshops:n,guides:r,insights:p}),y=function(e){var n=(0,s.Z)(e),r=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type?r.push([n]):r[r.length-1].push(n)),e}),[]);return r.unshift(g),r.map((function(e,n){return void 0!=e.props&&e.props.className.includes("frontpage")?g:(0,t.jsx)("div",{className:"page-content",children:e.map((function(e,n){return(0,t.jsx)(i.Fragment,{children:e},n)}))},n)}))},b=(0,i.useState)(1),N=b[0],k=b[1],Z=(0,i.useState)(y(x)),w=Z[0],O=Z[1],P=(0,i.useState)([]),S=P[0],C=P[1],E=(0,i.useState)([]),_=(E[0],E[1]),I=w.map((function(e,n){var r=void 0;return r=0===n?e.props.children[0].props.children:e.props.children[0].props.children.props.children[0],(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:N===n+1?"active":"",onClick:function(){return M(event,n+1)},children:r})},n)}));(0,i.useEffect)((function(){O(y(x)),k(1),C(g),_(I);var e=new URLSearchParams(window.location.search).get("page");e&&(k(e),C(w[e-1]))}),[f]);var T=(0,o.Z)(I,N),D=function(e){return(0,t.jsxs)("div",{className:"pagination",children:[(0,t.jsx)(d.Z,{className:"previous-page",onClick:function(){return M(event,e-1)},disabled:1===e,children:"Previous"}),T,(0,t.jsx)(d.Z,{className:"next-page",onClick:function(){return M(event,e+1)},disabled:e===w.length,children:"Next"})]})},M=function(e,n){window.scrollTo({top:0,behavior:"smooth"});var r=Number(n);h.push("/workshops/".concat(f,"/?page=").concat(r),void 0,{shallow:!0,scroll:!1}),k(r),C(w[r-1])};return(0,t.jsx)(u.Z,{maxWidth:"xl",style:{display:"flex",marginTop:"1rem"},children:(0,t.jsxs)("div",{className:"content card-page",children:[(0,t.jsx)("div",{className:"presentation",children:(0,t.jsx)(v,{content:m,title:j})}),(0,t.jsxs)("div",{className:"workshop-container",children:[D(N),S,D(N)]})]})})}},40382:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workshops/[slug]",function(){return r(17732)}])},68211:function(){}},function(e){e.O(0,[774,164,635,757,571,902,318,321,79,636,888,179],(function(){return n=40382,e(e.s=n);var n}));var n=e.O();_N_E=n}]);