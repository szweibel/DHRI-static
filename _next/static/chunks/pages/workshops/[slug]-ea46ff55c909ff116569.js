(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{7207:function(e,n,r){"use strict";r.d(n,{Z:function(){return v}});var t=r(96156),i=r(81253),s=r(85893),c=r(86243),o=r(67294),a=r(10993),l=r(28579),u=(r(17658),r(25675)),d=r(72165),p=(r(4298),r(36063),r(40947)),h=r(81365);function m(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var f=function(e){var n=e.className,r=e.children,t=(0,o.useState)(!1),i=t[0],c=t[1],a=r.props.children,u=r.props.className;if(void 0!==u){var d=u.replace("lang-",""),p=l.Z.highlight(a,{language:d,ignoreIllegals:!0}),h=l.Z.getLanguage(p.language).name;return(0,s.jsxs)("div",{className:"code-block",onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:[i&&(0,s.jsx)("div",{className:"hljs",children:d&&(0,s.jsx)("span",{className:"language",children:h})}),(0,s.jsx)("pre",{className:n+" "+d,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:p.value}})})]})}return(0,s.jsx)("pre",{className:n,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:a}})})},j=function(e){e.className;var n=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?m(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},(0,i.Z)(e,["className"])),r=n.src;return(0,s.jsx)("div",{className:"image-container",children:(0,s.jsx)(d.Z,{children:(0,s.jsx)("div",{className:"markdown-image-container",children:(0,s.jsx)(u.default,{className:"markdown-image",src:r,alt:n.alt,layout:"fill",objectFit:"cover"})})})})},x=function(e){e.className;var n=e.children.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(p.Z,{defaultCode:n})})},g=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(h.Z,{})})};function v(e){return(0,c.n)(e,{overrides:{pre:{component:f,props:{className:"hljs"}},ul:{component:a.Z,props:{className:"list-group"}},img:{component:j,props:{className:"image"}},CodeEditor:x,PythonREPL:g}})}},10993:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t=r(85893),i=r(97762),s=r(67294),c=r(18397),o=r(50542),a=r(69964),l=r(14212),u=r(72642),d=r(15020);function p(e){e.className;var n=e.children,r=(0,s.useState)(!1),p=r[0],h=r[1],m=(0,s.useState)(0),f=m[0],j=m[1],x=n.map((function(e,n){var r=i.renderToString(e).replace('<li data-reactroot="">',"").slice(0,-5),t=r.endsWith("*");if(t){var s=r.slice(0,-1);return{index:n,correct:t,li:(0,d.ZP)(s)}}return{index:n,correct:t,li:(0,d.ZP)(r)}})),g=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);return x.some((function(e){return e.correct}))?(0,t.jsxs)("div",{id:g,className:"quiz",children:[(0,t.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=Array.from(e.target.querySelectorAll('input[type="checkbox"]:checked')).map((function(e){return e.value})).map((function(e){return parseInt(e)})),r=x.filter((function(e){return e.correct})).map((function(e){return e.index})),t=r.map((function(e){return parseInt(e)})),i=n.every((function(e){return t.includes(e)}))&&n.length===r.length;i?(document.getElementById(g).style.backgroundColor="rgba(0, 170, 100, 0.3)",document.getElementById("".concat(g,"-submit")).remove(),h(!0),j(i)):(document.getElementById(g).style.backgroundColor="rgba(255, 0, 0, 0.3)",document.getElementById("".concat(g,"-submit")).innerHTML="Try again!")},style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,t.jsxs)(c.Z,{component:"fieldset",children:[(0,t.jsx)(a.Z,{component:"legend",children:"Quiz"}),x.map((function(e){return(0,t.jsx)(o.Z,{value:e.index,control:(0,t.jsx)(l.Z,{}),label:e.li,className:"".concat(g,"-checkbox"),disabled:p},e.index)}))]}),(0,t.jsx)(u.Z,{type:"submit",variant:"contained",color:"primary",className:"quizButton",id:"".concat(g,"-submit"),children:"Check my answer"})]}),f?(0,t.jsx)("p",{children:"Correct!"}):(0,t.jsx)("p",{})]}):(0,t.jsx)("ul",{children:n})}},91850:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t=r(85893),i=r(96156),s=r(34699),c=r(67294),o=r(62318),a=r(11781),l=r(66735);function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){var r=c.useState({top:!1,left:!1,bottom:!1,right:!1}),u=(0,s.Z)(r,2),p=u[0],h=u[1],m=function(e,n){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&h(d(d({},p),{},(0,i.Z)({},e,n)))}};return(0,t.jsxs)(c.Fragment,{children:[(0,t.jsx)(a.Z,{color:"primary","aria-label":"open drawer",className:"sidebar-button",onClick:m("left",!0),children:(0,t.jsx)(l.Z,{})}),(0,t.jsx)(o.ZP,{variant:"temporary",open:p.left,className:"drawer-left temporary",onClose:m("left",!1),ModalProps:{keepMounted:!0},children:(0,t.jsx)("nav",{className:"sidenav",children:(0,t.jsx)("ul",{onClick:m("left",!1),onKeyDown:m("left",!1),children:e})})}),(0,t.jsx)(o.ZP,{variant:"permanent",anchor:"left",open:p.left,onClose:m("left",!1),className:"drawer-left permanent",sx:{flexShrink:0,zIndex:1,display:{xs:"none",sm:"none",md:"none",lg:"block"}},children:(0,t.jsx)("nav",{className:"sidenav",children:(0,t.jsx)("ul",{children:e})})})]})}},17732:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return y},default:function(){return b}});var t=r(85893),i=r(67294),s=r(7207),c=r(11163),o=r(16492),a=r(26447),l=r(96156),u=r(6413);var d=r(91850),p=r(54065),h=r(34699),m=r(86243),f=(r(4298),r(85012)),j=r(72642),x=r(47376),g=r(19536);function v(e){var n=i.useState(!1),s=(0,h.Z)(n,2),c=s[0],o=s[1],a=function(){return o(!1)};(0,i.useEffect)((function(){window.addEventListener("keydown",(function(e){"Escape"===e.key&&a()}))}),[a]);var l=function(e){var n=(0,m.n)(e),r=[];n.props.children.reduce((function(e,n){return"h1"===n.type||"h2"===n.type?r.push([n]):r[r.length-1].push(n),e}),[]);return r}(e.content),u=function(){var e=r(37706),n=e.Deck,i=e.Slide,s=e.Heading;e.CodePane;return(0,t.jsx)(n,{children:l.map((function(e,n){return(0,t.jsxs)(i,{children:[(0,t.jsx)(j.Z,{onClick:a,style:{position:"absolute",width:"50px"},children:(0,t.jsx)(g.Z,{})}),e.map((function(e,n){return"h1"===e.type||"h2"===e.type?(0,t.jsx)(s,{children:e.props.children},n):"CodeEditor"===e.type?void 0:(0,t.jsx)("div",{children:e},n)}))]},n)}))})};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{children:[(0,t.jsx)(j.Z,{onClick:function(){return o(!0)},children:(0,t.jsx)(x.Z,{fontSize:"large"})}),(0,t.jsx)(f.Z,{open:c,onClose:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,t.jsx)(u,{})})]})})}var y=!0;function b(e){var n=e.workshops,r=e.guides,h=e.insights,m=(0,c.useRouter)(),f=m.query.slug,j=n.find((function(e){return e.slug===f})),x=j.content,g=function(e,n){var r=e.excerpt,i=e.title,c=e.dependencies||[],o=n.workshops,a=n.guides,d=n.insights,p=Object.keys(c).map((function(e){var n=c[e];return{title:e,items:Object.keys(n).map((function(e){var r=n[e],t=o.find((function(n){return n.slug===e})),i=d.find((function(n){return n.slug===e})),s=a.find((function(n){return n.slug===e})),c=t||i||s||null,u=(0,l.Z)({},e,{title:c.title,excerpt:r.excerpt,required:r.required,recommended:r.recommended,link:c?"/".concat(c.itemPath):"#"});return{title:c.title,allItems:u}}))}})).map((function(e){return(0,t.jsxs)("div",{className:"frontpage-item dependency",children:[(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("ul",{children:e.items.map((function(e){var n=e.allItems[Object.keys(e.allItems)[0]],r=(0,s.Z)(n.excerpt),i=n.required,c=n.recommended,o=i?"required":c?"recommended":"";return(0,t.jsxs)("li",{className:o,children:[(0,t.jsx)("a",{href:n.link,children:e.title}),(0,t.jsx)("p",{children:r})]},n)}))})]},e.title)})),h=Object.keys(e).map((function(n){var r=e[n];return"dependencies"===n||"workshops"===n||"insights"===n||"installations"===n||"excerpt"===n||"title"===n||"cover_image"===n||"content"===n||"slug"===n||"path"===n||"itemPath"===n||"authors"===n?null:{title:n,items:r}})).filter((function(e){return null!==e})).map((function(e){return(0,t.jsxs)("div",{className:"frontpage-item",children:[(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("ul",{children:e.items&&Object.keys(e.items).map((function(n){var r=e.items[n];if("description"===n){var i=(0,s.Z)(r);return(0,t.jsx)("li",{children:(0,t.jsx)("p",{children:i})},n)}if("string"===typeof r){var c=(0,s.Z)(r);return(0,t.jsx)("li",{className:"frontpage-list",children:c},n)}if("object"===typeof r){if(r.link){var o=(0,s.Z)(r.excerpt);return(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:r.link,children:n}),(0,t.jsx)("p",{children:o})]},n)}if(r.excerpt){var a=(0,s.Z)(r.excerpt);return(0,t.jsxs)("li",{children:[n,(0,t.jsx)("p",{children:a})]},n)}return(0,t.jsx)("div",{children:Object.keys(r).map((function(e){var n=(0,s.Z)(r[e]);return(0,t.jsx)("p",{className:"list-description",children:n},e)}))})}}))})]},e.title)})),m=0===h.length&&0===p.length;return(0,t.jsxs)("div",{className:"frontpage",children:[(0,t.jsx)("h1",{children:i}),r&&(0,t.jsx)("div",{className:"excerpt",children:(0,t.jsx)("p",{children:r})}),!m&&(0,t.jsxs)(u.ZP,{columns:{sm:1,md:2},spacing:2,children:[p,h]})]})}(j,{workshops:n,guides:r,insights:h}),y=(0,i.useState)(1),b=y[0],N=y[1],k=(0,i.useState)(function(e){var n=(0,s.Z)(e),r=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type?r.push([n]):r[r.length-1].push(n)),e}),[]);return r.unshift(g),r.map((function(e,n){return void 0!=e.props&&e.props.className.includes("frontpage")?g:(0,t.jsx)("div",{children:e.map((function(e,n){return(0,t.jsx)(i.Fragment,{children:e},n)}))},n)}))}(x)),Z=k[0],w=(k[1],(0,i.useState)([])),O=w[0],P=w[1],S=(0,i.useState)([]),C=(S[0],S[1]),E=Z.map((function(e,n){var r=void 0;return r=0===n?e.props.children[0].props.children:e.props.children[0].props.children.props.children[0],(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:b===n+1?"active":"",onClick:function(){return D(event,n+1)},children:r})},n)})),_=(0,d.Z)(E,b);(0,i.useEffect)((function(){N(1),P(g),C(E);var e=new URLSearchParams(window.location.search).get("page");e&&(N(e),P(Z[e-1]))}),[x]);var I=function(e){return(0,t.jsx)(a.Z,{className:"pagination",children:(0,t.jsx)(o.Z,{count:Z.length,page:Number(e),onChange:D,siblingCount:2,boundaryCount:2})})},D=function(e,n){window.scrollTo({top:0,behavior:"smooth"});var r=Number(n);m.push("/workshops/".concat(f,"/?page=").concat(r),void 0,{shallow:!0,scroll:!1}),N(r),P(Z[r-1])};return(0,t.jsxs)(p.Z,{maxWidth:"xl",style:{display:"flex",marginTop:"1rem"},children:[(0,t.jsx)("div",{className:"sidebar",sx:{display:{md:"none"}},children:_}),(0,t.jsxs)("div",{className:"content card-page",children:[(0,t.jsx)("div",{className:"presentation",children:(0,t.jsx)(v,{content:x})}),(0,t.jsxs)("div",{className:"workshop-container",children:[(0,t.jsx)("div",{children:I(b)}),O,(0,t.jsx)("div",{children:I(b)})]})]})]})}},40382:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workshops/[slug]",function(){return r(17732)}])},68211:function(){}},function(e){e.O(0,[774,164,571,935,318,505,309,556,888,179],(function(){return n=40382,e(e.s=n);var n}));var n=e.O();_N_E=n}]);