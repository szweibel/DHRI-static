(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{993:function(n,e,r){"use strict";r.d(e,{Z:function(){return h}});var t=r(5893),i=r(7762),s=r(7294),a=r(8946),c=r(9094),u=r(6430),o=r(542),l=r(9964),d=r(5020);function h(n){n.className;var e=n.children,r=(0,s.useState)(!1),h=r[0],g=r[1],f=e.map((function(n,e){var r=i.renderToString(n).replace('<li data-reactroot="">',"").slice(0,-5),t=r.endsWith("*");if(t){var s=r.slice(0,-1);return{index:e,correct:t,li:(0,d.ZP)(s)}}return{index:e,correct:t,li:(0,d.ZP)(r)}}));return f.some((function(n){return n.correct}))?(0,t.jsxs)("div",{children:[(0,t.jsxs)(u.Z,{component:"fieldset",children:[(0,t.jsx)(l.Z,{component:"legend",children:"Quiz"}),(0,t.jsx)(c.Z,{"aria-label":"quiz",name:"quiz",children:f.map((function(n){return(0,t.jsx)(o.Z,{value:n.index,control:(0,t.jsx)(a.Z,{}),label:n.li,onChange:function(){return g(n.correct)}},n.index)}))})]}),h&&(0,t.jsx)("p",{children:"Correct!"})]}):e}},6987:function(n,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return d},default:function(){return h}});var t=r(5893),i=r(7084),s=r.n(i),a=(r(1664),r(7294)),c=(r(7435),r(993)),u=r(1163),o=r(6492),l=r(6447);s().setOptions({renderer:new(s().Renderer),highlight:function(n,e){var t=r(7869),i=t.getLanguage(e)?e:"plaintext";return t.highlight(n,{language:i}).value},langPrefix:"hljs language-",pedantic:!1,gfm:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1});var d=!0;function h(n){n.workshops;var e=n.guides,r=(n.insights,n.paths,(0,u.useRouter)().query.slug),i=e.find((function(n){return n.slug===r})),d=i.content,h=i.cover_image,g=i.title,f=(0,a.useState)(0),p=f[0],m=f[1],v=(0,a.useState)([]),x=v[0],j=v[1],_=(0,a.useState)([]),N=_[0],w=_[1],Z=s()(d).split("<h1");Z.shift();var k=Z.map((function(n,e){return"<h1 ".concat(n)})).map((function(n,e){var r=n.split("</h1>")[0].split(">")[1];return(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:n},name:r,className:"workshop-content"},e)}));(0,a.useEffect)((function(){j(k),w(k[0])}),[d]);var C=function(n){return(0,t.jsx)(l.Z,{spacing:2,className:"pagination",children:(0,t.jsx)(o.Z,{count:x.length-1,page:n,onChange:b,siblingCount:2,boundaryCount:2,defaultPage:1})})},S=x.map((function(n,e){return(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:p===e+1?"active":"",onClick:function(){return b(event,e+1)},children:n.props.name})},e)})),b=function(n,e){console.log(n,e),m(e),w(x[e-1]),window.scrollTo({top:0,behavior:"smooth"})};return(0,t.jsxs)("div",{className:"workshopContainer mui-container",children:[(0,t.jsx)("nav",{className:"sidenav",children:(0,t.jsx)("ul",{children:S})}),(0,t.jsx)("div",{className:"content card-page",children:(0,t.jsxs)("div",{className:"workshop-container",children:[(0,t.jsx)("img",{className:"hero",src:h,alt:"cover"}),(0,t.jsx)("div",{className:"title",children:g}),x.length>1&&(0,t.jsx)(C,{currentPage:p}),function(n){if(n.props){var e=n.props.dangerouslySetInnerHTML.__html;return e.includes("Evaluation</h2>")?(0,c.Z)(e):n}return n}(N),x.length>1&&(0,t.jsx)(C,{currentPage:p})]})})]})}},1869:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/[slug]",function(){return r(6987)}])}},function(n){n.O(0,[774,323,84,888,179],(function(){return e=1869,n(n.s=e);var e}));var e=n.O();_N_E=e}]);