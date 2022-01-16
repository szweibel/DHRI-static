(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{5069:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return O},default:function(){return _}});var r=n(5893),i=n(7294),s=n(7207),o=n(1163),l=n(6492),c=n(6447),a=n(6156);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=n(7192),h=n(9602),p=n(6122),f=n(5408),m=n(2605),g=n(9766),x=n(67),v=n(6010),j=(n(5697),n(8979));function b(e){return(0,j.Z)("MuiMasonry",e)}(0,n(6087).Z)("MuiMasonry",["root"]);const N=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],w=e=>Number(e.replace("px","")),y=(0,h.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const r={};if(e.isSSR){const i={},s=Number(t.spacing(e.defaultSpacing).replace("px",""));for(let t=1;t<=e.defaultColumns;t+=1)i[`&:nth-of-type(${e.defaultColumns}n+${t%e.defaultColumns})`]={order:t};return r.height=e.defaultHeight,r.margin=-s/2,r["& > *"]=u({},n["& > *"],i,{margin:s/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${s}px)`}),u({},n,r)}const i=(0,f.P$)({values:e.spacing,breakpoints:t.breakpoints.values}),s=(0,m.hB)(t);n=(0,g.Z)(n,(0,f.k9)({theme:t},i,(t=>{const n=Number(t),r=Number((0,m.NA)(s,n).replace("px",""));return u({margin:-r/2,"& > *":{margin:r/2}},e.maxColumnHeight&&{height:Math.ceil(e.maxColumnHeight+r)})})));const o=(0,f.P$)({values:e.columns,breakpoints:t.breakpoints.values});return n=(0,g.Z)(n,(0,f.k9)({theme:t},o,(e=>({"& > *":{width:`calc(${`${(100/Number(e)).toFixed(2)}%`} - ${"object"!==typeof i?(0,m.NA)(s,Number(i)):"0px"})`}})))),"object"===typeof i&&(n=(0,g.Z)(n,(0,f.k9)({theme:t},i,((e,t)=>{if(t){const n=Number(e),r=Object.keys(o).pop(),i=(0,m.NA)(s,n);return{"& > *":{width:`calc(${`${(100/("object"===typeof o?o[t]||o[r]:o)).toFixed(2)}%`} - ${i})`}}}return null})))),n}));var k=i.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiMasonry"}),{children:s,className:o,component:l="div",columns:c=4,spacing:a=1,defaultColumns:h,defaultHeight:f,defaultSpacing:m}=n,g=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,N),j=i.useRef(),[k,S]=i.useState(),C=!k&&f&&void 0!==h&&void 0!==m,[O,_]=i.useState(C?h-1:0),R=u({},n,{spacing:a,columns:c,maxColumnHeight:k,defaultColumns:h,defaultHeight:f,defaultSpacing:m,isSSR:C}),Z=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"]},b,t)})(R),M=i.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((e=>{if(!e)return;let t,n,r,i;var s,o,l,c,a,u;e[0].target.className.includes(Z.root)?(t=e[0].target,r=e[0].contentRect.width,n=(null==(s=e[1])?void 0:s.target)||t.firstChild,i=(null==(o=n)||null==(l=o.contentRect)?void 0:l.width)||(null==(c=n)?void 0:c.clientWidth)||0):(n=e[0].target,i=e[0].contentRect.width,t=(null==(a=e[1])?void 0:a.target)||n.parentElement,r=(null==(u=t.contentRect)?void 0:u.width)||t.clientWidth);if(0===r||0===i||!t||!n)return;const d=window.getComputedStyle(n),h=w(d.marginLeft),p=w(d.marginRight),f=Math.round(r/(i+h+p)),m=new Array(f).fill(0);let g=!1;if(t.childNodes.forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE||"line-break"===e.dataset.class||g)return;const t=window.getComputedStyle(e),n=w(t.marginTop),r=w(t.marginBottom),i=w(t.height)?Math.ceil(w(t.height))+n+r:0;if(0!==i){for(let t=0;t<e.childNodes.length;t+=1){const n=e.childNodes[t];if("IMG"===n.tagName&&0===n.clientHeight){g=!0;break}}if(!g){const t=m.indexOf(Math.min(...m));m[t]+=i;const n=t+1;e.style.order=n}}else g=!0})),!g){S(Math.max(...m));_(f>0?f-1:0)}})));i.useEffect((()=>{const e=M.current;if(void 0===e)return;const t=j.current;return t&&e&&(e.observe(t),t.firstChild&&e.observe(t.firstChild)),()=>e?e.disconnect():{}}),[c,a,s]);const E=(0,x.Z)(t,j),$={flexBasis:"100%",width:0,margin:0,padding:0},P=new Array(O).fill("").map(((e,t)=>(0,r.jsx)("span",{"data-class":"line-break",style:u({},$,{order:t+1})},t)));return(0,r.jsxs)(y,u({as:l,className:(0,v.Z)(Z.root,o),ref:E,ownerState:R},g,{children:[s,P]}))}));var S=n(1850),C=n(4065),O=(n(947),!0);function _(e){var t=e.workshops,n=e.guides,u=e.insights,d=(0,o.useRouter)(),h=d.query.slug,p=t.find((function(e){return e.slug===h})),f=p.content,m=(p.cover_image,p.title,function(e,t){var n=e.excerpt,i=e.title,s=e.dependencies||[],o=t.workshops,l=t.guides,c=t.insights,u=Object.keys(s).map((function(e){var t=s[e];return{title:e,items:Object.keys(t).map((function(e){var n=t[e],r=o.find((function(t){return t.slug===e})),i=c.find((function(t){return t.slug===e})),s=l.find((function(t){return t.slug===e})),u=r||i||s||null,d=(0,a.Z)({},e,{title:u.title,excerpt:n.excerpt,required:n.required,recommended:n.recommended,link:u?"/".concat(u.itemPath):"#"});return{title:u.title,allItems:d}}))}})).map((function(e){return(0,r.jsxs)("div",{className:"frontpage-item dependency",children:[(0,r.jsx)("h2",{children:e.title}),(0,r.jsx)("ul",{children:e.items.map((function(e){var t=e.allItems[Object.keys(e.allItems)[0]],n=t.required,i=t.recommended,s=n?"required":i?"recommended":"";return(0,r.jsxs)("li",{className:s,children:[(0,r.jsx)("a",{href:t.link,children:e.title}),(0,r.jsx)("p",{children:t.excerpt})]},t)}))})]},e.title)})),d=Object.keys(e).map((function(t){var n=e[t];return"dependencies"===t||"workshops"===t||"insights"===t||"installations"===t||"excerpt"===t||"title"===t||"cover_image"===t||"content"===t||"slug"===t||"path"===t||"itemPath"===t||"authors"===t?null:{title:t,items:n}})).filter((function(e){return null!==e})).map((function(e){return(0,r.jsxs)("div",{className:"frontpage-item",children:[(0,r.jsx)("h2",{children:e.title}),(0,r.jsx)("ul",{children:e.items&&Object.keys(e.items).map((function(t){var n=e.items[t];return"description"===t?(0,r.jsx)("li",{children:(0,r.jsx)("p",{children:n})},t):"string"===typeof n?(0,r.jsx)("li",{className:"frontpage-list",children:n},t):"object"===typeof n?n.link?(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:n.link,children:t}),(0,r.jsx)("p",{children:n.excerpt})]},t):n.excerpt?(0,r.jsxs)("li",{children:[t,(0,r.jsx)("p",{children:n.excerpt})]},t):(0,r.jsx)("div",{children:Object.keys(n).map((function(e){return(0,r.jsx)("p",{className:"list-description",children:n[e]},e)}))}):void 0}))})]},e.title)})),h=0===d.length&&0===u.length;return(0,r.jsxs)("div",{className:"frontpage",children:[(0,r.jsx)("h1",{children:i}),n&&(0,r.jsx)("div",{className:"excerpt",children:(0,r.jsx)("p",{children:n})}),!h&&(0,r.jsxs)(k,{columns:{sm:1,md:2},spacing:2,children:[u,d]})]})}(p,{workshops:t,guides:n,insights:u})),g=(0,i.useState)(1),x=g[0],v=g[1],j=(0,i.useState)(function(e){var t=(0,s.Z)(e),n=[];t.props.children.reduce((function(e,t){return"h1"===t.type?n.push([t]):n[n.length-1].push(t),e}),[]);return n.unshift(m),n.map((function(e,t){return void 0!=e.props&&e.props.className.includes("frontpage")?m:(0,r.jsx)("div",{children:e.map((function(e,t){return(0,r.jsx)(i.Fragment,{children:e},t)}))},t)}))}(f)),b=j[0],N=(j[1],(0,i.useState)([])),w=N[0],y=N[1],O=(0,i.useState)([]),_=(O[0],O[1]),R=b.map((function(e,t){var n=void 0;return n=0===t?e.props.children[0].props.children:e.props.children[0].props.children.props.children[0],(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:x===t+1?"active":"",onClick:function(){return E(event,t+1)},children:n})},t)})),Z=(0,S.Z)(R,x);(0,i.useEffect)((function(){v(1),y(m),_(R);var e=new URLSearchParams(window.location.search).get("page");e&&(v(e),y(b[e-1]))}),[f]);var M=function(e){return(0,r.jsx)(c.Z,{className:"pagination",children:(0,r.jsx)(l.Z,{count:b.length,page:Number(e),onChange:E,siblingCount:2,boundaryCount:2})})},E=function(e,t){var n=Number(t);v(n),y(b[n-1]),d.push("/workshops/".concat(h,"/?page=").concat(n)),window.scrollTo({top:0,behavior:"smooth"})};return(0,r.jsxs)(C.Z,{maxWidth:"xl",style:{display:"flex",marginTop:"1rem"},children:[(0,r.jsx)("div",{className:"sidebar",sx:{display:{md:"none"}},children:Z}),(0,r.jsx)("div",{className:"content card-page",children:(0,r.jsxs)("div",{className:"workshop-container",children:[(0,r.jsx)("div",{children:M(x)}),w,(0,r.jsx)("div",{children:M(x)})]})})]})}},382:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workshops/[slug]",function(){return n(5069)}])}},function(e){e.O(0,[774,863,649,41,888,179],(function(){return t=382,e(e.s=t);var t}));var t=e.O();_N_E=t}]);