(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{96540:function(e,n,t){"use strict";var o=t(64119);n.Z=void 0;var r=o(t(64938)),i=t(85893),a=(0,r.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=a},64119:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},64938:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=t(38592)},38592:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return r},createSvgIcon:function(){return i.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return c.Z},ownerDocument:function(){return l},ownerWindow:function(){return u.Z},requirePropFactory:function(){return d},setRef:function(){return p},unstable_ClassNameGenerator:function(){return w.Z},unstable_useEnhancedEffect:function(){return f},unstable_useId:function(){return m},unsupportedProp:function(){return b},useControlled:function(){return v.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return j.Z}});var o=t(98216),r=t(49064).Z,i=t(15949),a=t(93881);var s=function(e,n){return()=>null},c=t(48502),l=t(57094).Z,u=t(5340);t(6992);var d=function(e,n){return()=>null},p=t(7960).Z,f=t(16600).Z,h=t(67294);let x=0;var m=function(e){const[n,t]=h.useState(e),o=e||n;return h.useEffect((()=>{null==n&&(x+=1,t(`mui-${x}`))}),[n]),o};var b=function(e,n,t,o,r){return null},v=t(49299),g=t(2068),y=t(51705),j=t(13511),w=t(49981)},49064:function(e,n,t){"use strict";function o(...e){return e.reduce(((e,n)=>null==n?e:function(...t){e.apply(this,t),n.apply(this,t)}),(()=>{}))}t.d(n,{Z:function(){return o}})},57094:function(e,n,t){"use strict";function o(e){return e&&e.ownerDocument||document}t.d(n,{Z:function(){return o}})},58290:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var o=t(57094);function r(e){return(0,o.Z)(e).defaultView||window}},81425:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var o=t(85893),r=(t(81365),t(40947),t(67294));var i=t(96156),a=t(87757),s=t.n(a),c=t(92137),l=t(96540),u=t(4298),d=t(5152),p=t(72642),f=t(6867),h=t(66652),x=t(62681),m=t(59062),b=t(57144),v=t(12715),g=(t(45697),t(86010)),y=t(27192),j=t(60539),w=t(98216),Z=t(16122),C=t(29602),S=t(28979);function P(e){return(0,S.Z)("MuiTab",e)}var N=(0,t(76087).Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);const _=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],T=(0,C.ZP)(j.Z,{name:"MuiTab",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.label&&t.icon&&n.labelIcon,n[`textColor${(0,w.Z)(t.textColor)}`],t.fullWidth&&n.fullWidth,t.wrapped&&n.wrapped]}})((({theme:e,ownerState:n})=>(0,v.Z)({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},n.label&&{flexDirection:"top"===n.iconPosition||"bottom"===n.iconPosition?"column":"row"},{lineHeight:1.25},n.icon&&n.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${N.iconWrapper}`]:(0,v.Z)({},"top"===n.iconPosition&&{marginBottom:6},"bottom"===n.iconPosition&&{marginTop:6},"start"===n.iconPosition&&{marginRight:e.spacing(1)},"end"===n.iconPosition&&{marginLeft:e.spacing(1)})},"inherit"===n.textColor&&{color:"inherit",opacity:.6,[`&.${N.selected}`]:{opacity:1},[`&.${N.disabled}`]:{opacity:e.palette.action.disabledOpacity}},"primary"===n.textColor&&{color:e.palette.text.secondary,[`&.${N.selected}`]:{color:e.palette.primary.main},[`&.${N.disabled}`]:{color:e.palette.text.disabled}},"secondary"===n.textColor&&{color:e.palette.text.secondary,[`&.${N.selected}`]:{color:e.palette.secondary.main},[`&.${N.disabled}`]:{color:e.palette.text.disabled}},n.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},n.wrapped&&{fontSize:e.typography.pxToRem(12)})));var R=r.forwardRef((function(e,n){const t=(0,Z.Z)({props:e,name:"MuiTab"}),{className:i,disabled:a=!1,disableFocusRipple:s=!1,fullWidth:c,icon:l,iconPosition:u="top",indicator:d,label:p,onChange:f,onClick:h,onFocus:x,selected:m,selectionFollowsFocus:j,textColor:C="inherit",value:S,wrapped:N=!1}=t,R=(0,b.Z)(t,_),W=(0,v.Z)({},t,{disabled:a,disableFocusRipple:s,selected:m,icon:!!l,iconPosition:u,label:!!p,fullWidth:c,textColor:C,wrapped:N}),k=(e=>{const{classes:n,textColor:t,fullWidth:o,wrapped:r,icon:i,label:a,selected:s,disabled:c}=e,l={root:["root",i&&a&&"labelIcon",`textColor${(0,w.Z)(t)}`,o&&"fullWidth",r&&"wrapped",s&&"selected",c&&"disabled"],iconWrapper:["iconWrapper"]};return(0,y.Z)(l,P,n)})(W),E=l&&p&&r.isValidElement(l)?r.cloneElement(l,{className:(0,g.Z)(k.iconWrapper,l.props.className)}):l;return(0,o.jsxs)(T,(0,v.Z)({focusRipple:!s,className:(0,g.Z)(k.root,i),ref:n,role:"tab","aria-selected":m,disabled:a,onClick:e=>{!m&&f&&f(e,S),h&&h(e)},onFocus:e=>{j&&!m&&f&&f(e,S),x&&x(e)},ownerState:W,tabIndex:m?0:-1},R,{children:["top"===u||"start"===u?(0,o.jsxs)(r.Fragment,{children:[E,p]}):(0,o.jsxs)(r.Fragment,{children:[p,E]}),d]}))})),W=t(2658),k=t(54386),E=(0,d.default)((function(){return Promise.all([t.e(281),t.e(971),t.e(746)]).then(t.bind(t,31746))}),{ssr:!1,loadableGenerated:{webpack:function(){return[31746]},modules:["../components/EditorWithTabs.js -> ./EditorComponent"]}});function F(e){var n=e.defaultCode,t=void 0===n?"# Write your code here":n,a=(0,r.useState)(0),d=a[0],b=a[1],v=(0,r.useState)(!1),g=(v[0],v[1],(0,r.useState)([])),y=g[0],j=g[1],w=(0,r.useState)(t),Z=w[0],C=w[1],S=(0,r.useState)(!1),P=(S[0],S[1],(0,r.useState)(!1)),N=(P[0],P[1]),_=(0,r.useState)(null),T=(_[0],_[1],(0,r.useRef)(null)),F=(0,r.useRef)(null),I=(0,r.useContext)(x.G),M=I.hasLoadPyodideBeenCalled,L=I.isPyodideLoading,H=I.setIsPyodideLoading,$=I.isPyodideReady,z=I.setIsPyodideReady;(0,r.useEffect)((function(){$&&H(!1)}),[M,H,$]);var B=function(e){C(e)},O=function(){var e=(0,c.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T.current.innerHTML="",F.current.innerHTML="",pyodide.globals.set("print",(function(e){G(e)})),pyodide.globals.set("input",(function(e){prompt(e)})),e.next=6,pyodide.loadPackagesFromImports(n);case 6:return e.next=8,pyodide.runPythonAsync(n).then((function(e){G(e)})).catch((function(e){V(e)}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function G(e){var n=T.current;n.innerText+=e+"\n",n.scrollTop=n.scrollHeight}function V(e){var n=F.current;n.innerText+=e+"\n",n.scrollTop=n.scrollHeight}var A=function(){return(0,o.jsxs)("div",{children:[!L&&(0,o.jsxs)(p.Z,{onClick:function(){O(Z)},variant:"outlined",style:{margin:"10px",width:"100px",height:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px"},children:[(0,o.jsx)(h.Z,{style:{marginRight:"10px",fontSize:"20px"}}),"Run"]}),L&&(0,o.jsx)(m.Z,{style:{marginLeft:"10px",marginTop:"10px"}})]})};(0,r.useEffect)((function(){d<y.length&&j(y.map((function(e,n){return n===d?{name:e.name,code:Z,id:e.id}:e})))}),[d,Z]);var D=function(){return(0,o.jsx)("div",{className:"tabs-container",children:y.map((function(e,n){return function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Math.random().toString(36).substr(2,7);return(0,o.jsx)(R,{label:e,uniqueId:r,onClick:function(){b(t),C(n)},style:{fontSize:"20px",fontWeight:"bold",color:d===t?"#32c259":"white",borderBottom:d===t?"2px solid #32c259":"none"}},t)}(e.name,e.code,n)}))})};return(0,r.useEffect)((function(){j([{name:"Tab 1",code:t}]),b(0)}),[]),(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.19.0/full/pyodide.js"}),(0,o.jsx)(u.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.19.0/full/pyodide.asm.js",onLoad:function(){$||function(){var e=(0,c.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.19.0/full/"});case 2:globalThis.pyodide=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){z(!0),N(!0)}))}})]}),(0,o.jsx)("div",{className:"editorContainer",children:(0,o.jsxs)(k.Z,{children:[(0,o.jsx)("div",{className:"tab-bar-left",sx:{flexGrow:1},children:(0,o.jsx)(f.Z,{onClick:function(){!function(){var e=y;e.push({name:"Tab "+(y.length+1),code:t}),j(e),b(y.length-1)}()},style:(0,i.Z)({margin:"10px",height:"25px",width:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px",cursor:"pointer"},"outline","none"),children:(0,o.jsx)(l.Z,{style:{margin:"10px",fontSize:"20px"}})})}),(0,o.jsx)("div",{children:D()}),(0,o.jsx)("div",{className:"tab-bar-right",style:{marginLeft:"auto",marginRight:-12},children:A()})]})}),(0,o.jsxs)("div",{className:"tab-content",children:[(0,o.jsx)("div",{className:"editor-container",children:(0,o.jsx)("div",{className:"editor",children:(0,o.jsx)(E,{code:Z,onChange:B})})}),(0,o.jsx)("div",{className:"output-container",children:(0,o.jsxs)("div",{className:"output",children:[(0,o.jsx)("div",{className:"output-header",children:(0,o.jsx)(W.Z,{variant:"h6",style:{fontSize:"20px",fontWeight:"bold",color:"#32c259",marginBottom:"10px"},children:"Output"})}),(0,o.jsxs)("div",{className:"output-body",children:[(0,o.jsx)("div",{className:"output-body-output",ref:T}),(0,o.jsx)("div",{className:"output-body-error",ref:F})]})]})})]})]})}function I(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:"\n                    <h1>REPL</h1>\n                    "}}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:"\n                    <h1>Code Editor</h1>\n                    "}}),(0,o.jsx)("div",{children:(0,o.jsx)(F,{})})]})}},90970:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Codetest",function(){return t(81425)}])}},function(e){e.O(0,[571,164,831,556,774,888,179],(function(){return n=90970,e(e.s=n);var n}));var n=e.O();_N_E=n}]);