(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{24905:function(e,n,r){"use strict";r.d(n,{Z:function(){return D}});var t=r(96156),i=r(81253),s=r(85893),c=r(86243),o=r(67294),l=r(97762),a=r(18397),u=r(50542),d=r(69964),p=r(22887),h=r(72642),f=r(15020);function m(e){e.className;var n=e.children,r=(0,o.useState)(!1),t=r[0],i=r[1],c=(0,o.useState)(0),m=c[0],j=c[1],x=n[0].props.children.map((function(e,n){var r=l.renderToString(e).replace('<li data-reactroot="">',"").slice(0,-5),t=r.endsWith("*");if(t){var i=r.slice(0,-1);return{index:n,correct:t,li:(0,f.ZP)(i)}}return{index:n,correct:t,li:(0,f.ZP)(r)}})),g=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);return x.some((function(e){return e.correct}))?(0,s.jsxs)("div",{id:g,className:"quiz",children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=Array.from(e.target.querySelectorAll('input[type="checkbox"]:checked')).map((function(e){return e.value})).map((function(e){return parseInt(e)})),r=x.filter((function(e){return e.correct})).map((function(e){return e.index})),t=r.map((function(e){return parseInt(e)})),s=n.every((function(e){return t.includes(e)}))&&n.length===r.length;s?(document.getElementById(g).style.backgroundColor="rgba(0, 170, 100, 0.3)",document.getElementById("".concat(g,"-submit")).remove(),i(!0),j(s)):(document.getElementById(g).style.backgroundColor="rgba(255, 0, 0, 0.3)",document.getElementById("".concat(g,"-submit")).innerHTML="Try again!")},style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,s.jsxs)(a.Z,{component:"fieldset",children:[(0,s.jsx)(d.Z,{component:"legend",children:"Quiz"}),x.map((function(e){return(0,s.jsx)(u.Z,{value:e.index,control:(0,s.jsx)(p.Z,{}),label:e.li,className:"".concat(g,"-checkbox"),disabled:t},e.index)}))]}),(0,s.jsx)(h.Z,{type:"submit",variant:"contained",color:"primary",className:"quizButton",id:"".concat(g,"-submit"),children:"Check my answer"})]}),m?(0,s.jsx)("p",{children:"Correct!"}):(0,s.jsx)("p",{})]}):(0,s.jsx)("ul",{children:n})}var j=r(28579),x=(r(17658),r(25675)),g=r(72165),v=(r(36063),r(40947)),y=r(81365),b=r(69260),N=r(81215),Z=r(35595);function k(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function w(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?k(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var O=function(e){var n=e.className,r=e.children,t=(0,o.useState)(!1),i=t[0],c=t[1],l=r.props.children,a=r.props.className;if(void 0!==a){var u=a.replace("lang-",""),d=j.Z.highlight(l,{language:u,ignoreIllegals:!0}),p=j.Z.getLanguage(d.language).name;return(0,s.jsxs)("div",{className:"code-block",onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:[i&&(0,s.jsx)("div",{className:"hljs",children:u&&(0,s.jsx)("span",{className:"language",children:p})}),(0,s.jsx)("pre",{className:n+" "+u,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:d.value}})})]})}return(0,s.jsx)("pre",{className:n,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:l}})})},P=function(e){e.className;var n=w({},(0,i.Z)(e,["className"])),r=n.src;return(0,s.jsx)("div",{className:"image-container",children:(0,s.jsx)(g.Z,{children:(0,s.jsx)("div",{className:"markdown-image-container",children:(0,s.jsx)(x.default,{className:"markdown-image",src:r,alt:n.alt,layout:"fill",objectFit:"cover"})})})})},S=function(e){var n=e.children,r=(0,i.Z)(e,["children"]);if(n.length>0&&"object"===typeof n[0]){var t=n[0].props.children.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(v.Z,w({defaultCode:t},r))})}var c=n.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(v.Z,w({defaultCode:c},r))})},C=function(e){e.className;var n=e.children.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(Z.Z,{defaultCode:n})})},E=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(y.Z,{})})},_=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(N.Z,{})})},I=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(b.Z,{})})},T=function(e){e.className;var n=e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(m,{children:n})})};function D(e,n){return(0,c.n)(e,{overrides:{pre:{component:O,props:{className:"hljs"}},img:{component:P,props:{className:"image"}},CodeEditor:{component:S,props:{allSnippets:n}},Quiz:T,PythonREPL:E,Terminal:_,JSInterpreter:I,EditorWithTabs:C}})}},91850:function(e,n,r){"use strict";r.d(n,{Z:function(){return m}});var t=r(85893),i=r(96156),s=r(34699),c=r(67294),o=r(62318),l=r(72642),a=r(16323),u=r(42440),d=r(30799),p=r(38584);function h(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?h(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function m(e){var n=e.pages,r=e.currentPage,h=e.handlePageChange,m=c.useState({top:!1,left:!1,bottom:!1,right:!1}),j=(0,s.Z)(m,2),x=j[0],g=j[1],v=function(e,n){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&g(f(f({},x),{},(0,i.Z)({},e,n)))}};return(0,t.jsxs)(c.Fragment,{children:[(0,t.jsxs)(l.Z,{color:"primary","aria-label":"open drawer",className:"sidebar-button",onClick:v("left",!0),children:[(0,t.jsx)(a.Z,{}),"Table of Contents"]}),(0,t.jsx)(o.ZP,{variant:"temporary",open:x.left,className:"drawer-left temporary",onClose:v("left",!1),ModalProps:{keepMounted:!0},children:(0,t.jsx)("nav",{className:"sidenav",children:(0,t.jsx)(u.Z,{onClick:v("left",!1),onKeyDown:v("left",!1),children:n.map((function(e,n){return(0,t.jsx)(d.ZP,{children:(0,t.jsx)(p.Z,{style:{color:r===n+1?"#000":"lightseaGreen",fontSize:"1rem",fontWeight:"bold",cursor:r===n+1?"default":"pointer"},onClick:function(){return h(event,n+1)},primary:e})},n)}))})})}),(0,t.jsx)(o.ZP,{variant:"permanent",anchor:"left",open:x.left,onClose:v("left",!1),className:"drawer-left permanent",sx:{flexShrink:0,zIndex:1,display:{xs:"none",sm:"none",md:"none",xl:"block"}},children:(0,t.jsx)("nav",{style:{marginTop:"8rem"},className:"sidenav",children:(0,t.jsx)(u.Z,{onClick:v("left",!1),onKeyDown:v("left",!1),children:n.map((function(e,n){return(0,t.jsx)(d.ZP,{children:(0,t.jsx)(p.Z,{style:{color:r===n+1?"var(--foreground)":"lightseaGreen",fontSize:"1rem",fontWeight:"bold",cursor:r===n+1?"default":"pointer"},onClick:function(){return h(event,n+1)},primary:e})},n)}))})})})]})}},17732:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return b},default:function(){return N}});var t=r(85893),i=r(67294),s=r(24905),c=r(11163),o=r(96156),l=r(6413);var a=r(91850),u=r(54065),d=r(72642),p=r(34699),h=r(86243),f=(r(4298),r(10487)),m=r(47376),j=r(19536),x=r(19755);function g(e){var n=(0,i.useState)([]),s=n[0],o=(n[1],i.useState(!1)),l=(0,p.Z)(o,2),a=l[0],u=l[1],g=(0,c.useRouter)(),v=e.currentHeader,y=function(){return u(!1)},b=e.content.content,N=e.content.title;(0,i.useEffect)((function(){globalThis.jQuery=x;window.addEventListener("keydown",(function(e){"Escape"===e.key&&y()}))}),[y]);var Z=function(e){var n=(0,h.n)(e),r=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type||"h2"===n.type?(r.push([n]),s.push(n)):r[r.length-1].push(n)),e}),[]);return r}(b),k=function(){var e=r(36340),n=e.Deck,i=e.Slide,s=e.Heading;e.CodePane;return(0,t.jsxs)(n,{style:{height:"100%",width:"100%",backgroundColor:"#fff"},children:[(0,t.jsxs)(i,{children:[(0,t.jsx)(d.Z,{onClick:y,style:{position:"absolute",width:"50px"},children:(0,t.jsx)(j.Z,{})}),(0,t.jsx)(s,{size:1,children:N})]}),Z.map((function(e,n){return(0,t.jsxs)(i,{children:[(0,t.jsx)(d.Z,{onClick:y,style:{position:"absolute",width:"50px"},children:(0,t.jsx)(j.Z,{})}),(0,t.jsx)("div",{className:"slides",style:{overflow:"auto",height:"100%"},children:e.map((function(e,n){return"h1"===e.type||"h2"===e.type?(0,t.jsx)(s,{children:e.props.children},n):"CodeEditor"===e.type?void 0:(0,t.jsx)("div",{children:e},n)}))})]},n)}))]})};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{children:[(0,t.jsxs)(d.Z,{onClick:function(){if("frontpage"===v.className)u(!0);else{var e=v.children[0].props.children.props.children[0],n=s.findIndex((function(n){return n.props.children[0]===e}))+1;g.push("/workshops/".concat(g.query.slug,"/?page=").concat(g.query.page,"&slideIndex=").concat(n),void 0,{shallow:!0,scroll:!1}),u(!0)}},children:[(0,t.jsx)(m.Z,{}),"Presentation Mode"]}),(0,t.jsx)(f.Z,{open:a,onClose:y,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,t.jsx)(k,{})})]})})}var v=r(21023),y=r(93619),b=!0;function N(e){var n=e.workshops,r=e.guides,p=e.insights,h=e.authors,f=e.snippets,m=(0,c.useRouter)(),j=m.query.slug,x=n.find((function(e){return e.slug===j})),b=x.title,N=x.content,Z=function(e,n){var r=e.excerpt,i=e.title,c=e.dependencies||[],a=n.workshops,u=n.guides,d=n.insights,p=n.authors,h=Object.keys(c).map((function(e){var n=c[e];return{title:e,items:Object.keys(n).map((function(e){var r=n[e],t=a.find((function(n){return n.slug===e})),i=d.find((function(n){return n.slug===e})),s=u.find((function(n){return n.slug===e})),c=t||i||s||author||null,l=(0,o.Z)({},e,{title:c.title,excerpt:r.excerpt,required:r.required,recommended:r.recommended,link:c?"/".concat(c.itemPath):"#"});return{title:c.title,allItems:l}}))}})).map((function(e){return(0,t.jsxs)("div",{className:"frontpage-item dependency",children:[(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("ul",{children:e.items.map((function(e){var n=e.allItems[Object.keys(e.allItems)[0]],r=(0,s.Z)(n.excerpt),i=n.required,c=n.recommended,o=i?"required":c?"recommended":"";return(0,t.jsxs)("li",{className:o,children:[(0,t.jsx)("a",{href:n.link,children:e.title}),(0,t.jsx)("p",{children:r})]},n)}))})]},e.title)})),f=Object.keys(e).map((function(n){var r=e[n];return"dependencies"===n||"workshops"===n||"insights"===n||"installations"===n||"excerpt"===n||"title"===n||"cover_image"===n||"content"===n||"slug"===n||"path"===n||"itemPath"===n?null:{title:n,items:r}})).filter((function(e){return null!==e})).map((function(e){return(0,t.jsxs)("div",{className:"frontpage-item",children:[(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("ul",{children:e.items&&Object.keys(e.items).map((function(n){var r=e.items[n];if("description"===n){var i=(0,s.Z)(r);return(0,t.jsx)("li",{children:(0,t.jsx)("p",{children:i})},n)}if("authors"===e.title){var c=p.find((function(e){return e.title===r})),o="/authors/".concat(c.slug),l=n.charAt(0).toUpperCase()+n.slice(1);return(0,t.jsxs)("li",{className:"authors-list",children:[(0,t.jsx)("a",{href:o,children:r}),(0,t.jsx)("li",{children:l})]},n)}if("editors"===e.title){var a=p.find((function(e){return e.title===r})),u="/authors/".concat(a.slug),d=n.charAt(0).toUpperCase()+n.slice(1);return(0,t.jsxs)("li",{className:"authors-list",children:[(0,t.jsx)("a",{href:u,children:r}),(0,t.jsx)("li",{children:d})]},n)}if("string"===typeof r){var h=(0,s.Z)(r);return(0,t.jsx)("li",{className:"frontpage-list",children:h},n)}if("object"===typeof r){if(r.link){var f=(0,s.Z)(r.excerpt);return(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:r.link,children:n}),(0,t.jsx)("p",{children:f})]},n)}if(r.excerpt){var m=(0,s.Z)(r.excerpt);return(0,t.jsxs)("li",{className:"authors-list",children:[n,(0,t.jsx)("p",{children:m})]},n)}return(0,t.jsx)("div",{children:Object.keys(r).map((function(e){var n=(0,s.Z)(r[e]);return(0,t.jsx)("p",{className:"frontpage-list",children:n},e)}))})}}))})]},e.title)})),m=0===f.length&&0===h.length;return(0,t.jsxs)("div",{className:"frontpage",children:[(0,t.jsx)("h1",{children:i}),r&&(0,t.jsx)("div",{className:"excerpt",children:(0,t.jsx)("p",{children:r})}),!m&&(0,t.jsxs)(l.ZP,{columns:{sm:1,md:2},spacing:2,children:[h,f]})]})}(x,{workshops:n,guides:r,insights:p,authors:h}),k=function(e){var n=(0,s.Z)(e,f=f),r=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type?r.push([n]):r[r.length-1].push(n)),e}),[]);return r.unshift(Z),r.map((function(e,n){return void 0!=e.props&&e.props.className.includes("frontpage")?Z:(0,t.jsx)("div",{className:"page-content",children:e.map((function(e,n){return(0,t.jsx)(i.Fragment,{children:e},n)}))},n)}))},w=(0,i.useState)(1),O=w[0],P=w[1],S=(0,i.useState)(k(N)),C=S[0],E=S[1],_=(0,i.useState)([]),I=_[0],T=_[1],D=(0,i.useState)([]),q=D[0],M=D[1],z=(0,i.useState)(null),L=z[0],H=z[1];(0,i.useEffect)((function(){var e=C.map((function(e,n){return 0===n?"Introduction":e.props.children[0].props.children.props.children[0]}));M(e)}),[O]),(0,i.useEffect)((function(){E(k(N)),P(1),T(Z);var e=new URLSearchParams(window.location.search),n=Number(e.get("page"));n&&(P(n),T(C[n-1]))}),[j]),(0,i.useEffect)((function(){I&&void 0!=I&&H(I.props)}),[I]);var B=function(e){return(0,t.jsxs)("div",{className:"pagination",children:[(0,t.jsxs)(d.Z,{className:"previous-page",onClick:function(){return W(event,Number(e)-1)},disabled:1===e,children:[(0,t.jsx)(v.Z,{}),"Previous"]}),(0,t.jsx)(a.Z,{pages:q,currentPage:e,handlePageChange:W}),(0,t.jsx)(g,{currentHeader:L,content:x,title:b}),(0,t.jsxs)(d.Z,{className:"next-page",onClick:function(){return W(event,Number(e)+1)},disabled:e===C.length,children:["Next",(0,t.jsx)(y.Z,{})]})]})},W=function(e,n){window.scrollTo({top:0,behavior:"smooth"});var r=Number(n);m.push("/workshops/".concat(j,"/?page=").concat(r),void 0,{shallow:!0,scroll:!1}),P(r),T(C[r-1])};return(0,t.jsx)(u.Z,{maxWidth:"xl",style:{display:"flex",marginTop:"1rem"},children:(0,t.jsx)("div",{className:"content card-page",children:(0,t.jsxs)("div",{className:"workshop-container",children:[B(O),I,B(O)]})})})}},40382:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workshops/[slug]",function(){return r(17732)}])},68211:function(){}},function(e){e.O(0,[774,164,635,757,571,146,185,432,318,731,82,810,888,179],(function(){return n=40382,e(e.s=n);var n}));var n=e.O();_N_E=n}]);