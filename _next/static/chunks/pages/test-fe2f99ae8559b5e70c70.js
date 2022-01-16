(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{2137:function(r,e,t){"use strict";function n(r,e,t,n,i,a,o){try{var s=r[a](o),c=s.value}catch(l){return void t(l)}s.done?e(c):Promise.resolve(c).then(n,i)}function i(r){return function(){var e=this,t=arguments;return new Promise((function(i,a){var o=r.apply(e,t);function s(r){n(o,i,a,s,c,"next",r)}function c(r){n(o,i,a,s,c,"throw",r)}s(void 0)}))}}t.d(e,{Z:function(){return i}})},6652:function(r,e,t){"use strict";var n=t(5318),i=t(862);e.Z=void 0;var a=i(t(7294)),o=(0,n(t(2108)).default)(a.createElement("path",{d:"M8 5v14l11-7z"}),"PlayArrow");e.Z=o},9062:function(r,e,t){"use strict";t.d(e,{Z:function(){return C}});var n=t(7144),i=t(2715),a=t(7294),o=(t(5697),t(6010)),s=t(7192),c=t(917),l=t(8216),u=t(6122),d=t(9602),v=t(8979);function h(r){return(0,v.Z)("MuiCircularProgress",r)}(0,t(6087).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=t(5893);const m=["className","color","disableShrink","size","style","thickness","value","variant"];let k,p,x,Z,w=r=>r;const S=44,g=(0,c.F4)(k||(k=w`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),y=(0,c.F4)(p||(p=w`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),P=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,l.Z)(t.color)}`]]}})((({ownerState:r,theme:e})=>(0,i.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:e.transitions.create("transform")},"inherit"!==r.color&&{color:e.palette[r.color].main})),(({ownerState:r})=>"indeterminate"===r.variant&&(0,c.iv)(x||(x=w`
      animation: ${0} 1.4s linear infinite;
    `),g))),_=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),b=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${(0,l.Z)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})((({ownerState:r,theme:e})=>(0,i.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink&&(0,c.iv)(Z||(Z=w`
      animation: ${0} 1.4s ease-in-out infinite;
    `),y)));var C=a.forwardRef((function(r,e){const t=(0,u.Z)({props:r,name:"MuiCircularProgress"}),{className:a,color:c="primary",disableShrink:d=!1,size:v=40,style:k,thickness:p=3.6,value:x=0,variant:Z="indeterminate"}=t,w=(0,n.Z)(t,m),g=(0,i.Z)({},t,{color:c,disableShrink:d,size:v,thickness:p,value:x,variant:Z}),y=(r=>{const{classes:e,variant:t,color:n,disableShrink:i}=r,a={root:["root",t,`color${(0,l.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(t)}`,i&&"circleDisableShrink"]};return(0,s.Z)(a,h,e)})(g),C={},M={},j={};if("determinate"===Z){const r=2*Math.PI*((S-p)/2);C.strokeDasharray=r.toFixed(3),j["aria-valuenow"]=Math.round(x),C.strokeDashoffset=`${((100-x)/100*r).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,f.jsx)(P,(0,i.Z)({className:(0,o.Z)(y.root,a),style:(0,i.Z)({width:v,height:v},M,k),ownerState:g,ref:e,role:"progressbar"},j,w,{children:(0,f.jsx)(_,{className:y.svg,ownerState:g,viewBox:"22 22 44 44",children:(0,f.jsx)(b,{className:y.circle,style:C,ownerState:g,cx:S,cy:S,r:(S-p)/2,fill:"none",strokeWidth:p})})}))}))},7531:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var n=t(5893),i=t(1365),a=t(947);function o(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:"\n                    <h1>REPL</h1>\n                    "}}),(0,n.jsx)("div",{children:(0,n.jsx)(i.Z,{})}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:"\n                    <h1>Code Editor</h1>\n                    "}}),(0,n.jsx)("div",{children:(0,n.jsx)(a.Z,{defaultCode:'print("Hello mmmm")'})})]})}},3486:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return t(7531)}])}},function(r){r.O(0,[556,774,888,179],(function(){return e=3486,r(r.s=e);var e}));var e=r.O();_N_E=e}]);