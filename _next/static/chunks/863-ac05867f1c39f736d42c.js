(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863],{7863:function(e,t,n){"use strict";n.d(t,{ZP:function(){return ye}});var o=n(7144),r=n(2715),i=n(7294),s=(n(5697),n(6010)),a=n(7192);var c=function(e){return"string"===typeof e};function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var u=n(67);function p(e){return e&&e.ownerDocument||document}var f=n(3633);function m(...e){return e.reduce(((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)}),(()=>{}))}var h=n(3935),b=n(6600),v=n(7960);var x=i.forwardRef((function(e,t){const{children:n,container:o,disablePortal:r=!1}=e,[s,a]=i.useState(null),c=(0,u.Z)(i.isValidElement(n)?n.ref:null,t);return(0,b.Z)((()=>{r||a(function(e){return"function"===typeof e?e():e}(o)||document.body)}),[o,r]),(0,b.Z)((()=>{if(s&&!r)return(0,v.Z)(t,s),()=>{(0,v.Z)(t,null)}}),[t,s,r]),r?i.isValidElement(n)?i.cloneElement(n,{ref:c}):n:s?h.createPortal(n,s):s}));function g(e){return p(e).defaultView||window}function E(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function y(e){return parseInt(g(e).getComputedStyle(e).paddingRight,10)||0}function k(e,t,n,o=[],r){const i=[t,n,...o],s=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(e=>{-1===i.indexOf(e)&&-1===s.indexOf(e.tagName)&&E(e,r)}))}function w(e,t){let n=-1;return e.some(((e,o)=>!!t(e)&&(n=o,!0))),n}function Z(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(function(e){const t=p(e);return t.body===e?g(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){const e=function(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}(p(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${y(o)+e}px`;const t=p(o).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${y(t)+e}px`}))}const e=o.parentElement,t=g(o),r="HTML"===(null==e?void 0:e.nodeName)&&"scroll"===t.getComputedStyle(e).overflowY?e:o;n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach((({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)}))}}var R=n(5893);const P=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function T(e){const t=[],n=[];return Array.from(e.querySelectorAll(P)).forEach(((e,o)=>{const r=function(e){const t=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===r?t.push(e):n.push({documentOrder:o,tabIndex:r,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function S(){return!0}var C=function(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:r=!1,getTabbable:s=T,isEnabled:a=S,open:c}=e,l=i.useRef(),d=i.useRef(null),f=i.useRef(null),m=i.useRef(null),h=i.useRef(null),b=i.useRef(!1),v=i.useRef(null),x=(0,u.Z)(t.ref,v),g=i.useRef(null);i.useEffect((()=>{c&&v.current&&(b.current=!n)}),[n,c]),i.useEffect((()=>{if(!c||!v.current)return;const e=p(v.current);return v.current.contains(e.activeElement)||(v.current.hasAttribute("tabIndex")||v.current.setAttribute("tabIndex",-1),b.current&&v.current.focus()),()=>{r||(m.current&&m.current.focus&&(l.current=!0,m.current.focus()),m.current=null)}}),[c]),i.useEffect((()=>{if(!c||!v.current)return;const e=p(v.current),t=t=>{const{current:n}=v;if(null!==n)if(e.hasFocus()&&!o&&a()&&!l.current){if(!n.contains(e.activeElement)){if(t&&h.current!==t.target||e.activeElement!==h.current)h.current=null;else if(null!==h.current)return;if(!b.current)return;let o=[];if(e.activeElement!==d.current&&e.activeElement!==f.current||(o=s(v.current)),o.length>0){var r,i;const e=Boolean((null==(r=g.current)?void 0:r.shiftKey)&&"Tab"===(null==(i=g.current)?void 0:i.key)),t=o[0],n=o[o.length-1];e?n.focus():t.focus()}else n.focus()}}else l.current=!1},n=t=>{g.current=t,!o&&a()&&"Tab"===t.key&&e.activeElement===v.current&&t.shiftKey&&(l.current=!0,f.current.focus())};e.addEventListener("focusin",t),e.addEventListener("keydown",n,!0);const r=setInterval((()=>{"BODY"===e.activeElement.tagName&&t()}),50);return()=>{clearInterval(r),e.removeEventListener("focusin",t),e.removeEventListener("keydown",n,!0)}}),[n,o,r,a,c,s]);const E=e=>{null===m.current&&(m.current=e.relatedTarget),b.current=!0};return(0,R.jsxs)(i.Fragment,{children:[(0,R.jsx)("div",{tabIndex:0,onFocus:E,ref:d,"data-test":"sentinelStart"}),i.cloneElement(t,{ref:x,onFocus:e=>{null===m.current&&(m.current=e.relatedTarget),b.current=!0,h.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,R.jsx)("div",{tabIndex:0,onFocus:E,ref:f,"data-test":"sentinelEnd"})]})},A=n(6087),B=n(8979);function D(e){return(0,B.Z)("MuiModal",e)}(0,A.Z)("MuiModal",["root","hidden"]);const M=["BackdropComponent","BackdropProps","children","classes","className","closeAfterTransition","component","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","theme","onTransitionEnter","onTransitionExited"];const N=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&E(e.modalRef,!1);const o=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);k(t,e.mount,e.modalRef,o,!0);const r=w(this.containers,(e=>e.container===t));return-1!==r?(this.containers[r].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:o}),n)}mount(e,t){const n=w(this.containers,(t=>-1!==t.modals.indexOf(e))),o=this.containers[n];o.restore||(o.restore=Z(o,t))}remove(e){const t=this.modals.indexOf(e);if(-1===t)return t;const n=w(this.containers,(t=>-1!==t.modals.indexOf(e))),o=this.containers[n];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(t,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&E(e.modalRef,!0),k(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(n,1);else{const e=o.modals[o.modals.length-1];e.modalRef&&E(e.modalRef,!1)}return t}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}};var F=i.forwardRef((function(e,t){const{BackdropComponent:n,BackdropProps:o,children:r,classes:h,className:b,closeAfterTransition:v=!1,component:g="div",components:y={},componentsProps:k={},container:w,disableAutoFocus:Z=!1,disableEnforceFocus:P=!1,disableEscapeKeyDown:T=!1,disablePortal:S=!1,disableRestoreFocus:A=!1,disableScrollLock:B=!1,hideBackdrop:F=!1,keepMounted:I=!1,manager:L=N,onBackdropClick:j,onClose:O,onKeyDown:$,open:K,theme:z,onTransitionEnter:Y,onTransitionExited:H}=e,V=d(e,M),[W,U]=i.useState(!0),X=i.useRef({}),q=i.useRef(null),_=i.useRef(null),G=(0,u.Z)(_,t),J=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(e),Q=()=>(X.current.modalRef=_.current,X.current.mountNode=q.current,X.current),ee=()=>{L.mount(Q(),{disableScrollLock:B}),_.current.scrollTop=0},te=(0,f.Z)((()=>{const e=function(e){return"function"===typeof e?e():e}(w)||p(q.current).body;L.add(Q(),e),_.current&&ee()})),ne=i.useCallback((()=>L.isTopModal(Q())),[L]),oe=(0,f.Z)((e=>{q.current=e,e&&(K&&ne()?ee():E(_.current,!0))})),re=i.useCallback((()=>{L.remove(Q())}),[L]);i.useEffect((()=>()=>{re()}),[re]),i.useEffect((()=>{K?te():J&&v||re()}),[K,re,J,v,te]);const ie=l({},e,{classes:h,closeAfterTransition:v,disableAutoFocus:Z,disableEnforceFocus:P,disableEscapeKeyDown:T,disablePortal:S,disableRestoreFocus:A,disableScrollLock:B,exited:W,hideBackdrop:F,keepMounted:I}),se=(e=>{const{open:t,exited:n,classes:o}=e,r={root:["root",!t&&n&&"hidden"]};return(0,a.Z)(r,D,o)})(ie);if(!I&&!K&&(!J||W))return null;const ae=()=>{U(!1),Y&&Y()},ce=()=>{U(!0),H&&H(),v&&re()},le={};void 0===r.props.tabIndex&&(le.tabIndex="-1"),J&&(le.onEnter=m(ae,r.props.onEnter),le.onExited=m(ce,r.props.onExited));const de=y.Root||g,ue=k.root||{};return(0,R.jsx)(x,{ref:oe,container:w,disablePortal:S,children:(0,R.jsxs)(de,l({role:"presentation"},ue,!c(de)&&{as:g,ownerState:l({},ie,ue.ownerState),theme:z},V,{ref:G,onKeyDown:e=>{$&&$(e),"Escape"===e.key&&ne()&&(T||(e.stopPropagation(),O&&O(e,"escapeKeyDown")))},className:(0,s.Z)(se.root,ue.className,b),children:[!F&&n?(0,R.jsx)(n,l({open:K,onClick:e=>{e.target===e.currentTarget&&(j&&j(e),O&&O(e,"backdropClick"))}},o)):null,(0,R.jsx)(C,{disableEnforceFocus:P,disableAutoFocus:Z,disableRestoreFocus:A,isEnabled:ne,open:K,children:i.cloneElement(r,le)})]}))})})),I=n(9602),L=n(6122);function j(e){return(0,B.Z)("MuiBackdrop",e)}(0,A.Z)("MuiBackdrop",["root","invisible"]);const O=["classes","className","invisible","component","components","componentsProps","theme"];var $=i.forwardRef((function(e,t){const{classes:n,className:o,invisible:r=!1,component:i="div",components:u={},componentsProps:p={},theme:f}=e,m=d(e,O),h=l({},e,{classes:n,invisible:r}),b=(e=>{const{classes:t,invisible:n}=e,o={root:["root",n&&"invisible"]};return(0,a.Z)(o,j,t)})(h),v=u.Root||i,x=p.root||{};return(0,R.jsx)(v,l({"aria-hidden":!0},x,!c(v)&&{as:i,ownerState:l({},h,x.ownerState),theme:f},{ref:t},m,{className:(0,s.Z)(b.root,x.className,o)}))})),K=n(2666),z=n(6067),Y=n(2734),H=n(577),V=n(1705);const W=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],U={entering:{opacity:1},entered:{opacity:1}},X={enter:z.x9.enteringScreen,exit:z.x9.leavingScreen};var q=i.forwardRef((function(e,t){const{addEndListener:n,appear:s=!0,children:a,easing:c,in:l,onEnter:d,onEntered:u,onEntering:p,onExit:f,onExited:m,onExiting:h,style:b,timeout:v=X,TransitionComponent:x=K.ZP}=e,g=(0,o.Z)(e,W),E=(0,Y.Z)(),y=i.useRef(null),k=(0,V.Z)(a.ref,t),w=(0,V.Z)(y,k),Z=e=>t=>{if(e){const n=y.current;void 0===t?e(n):e(n,t)}},P=Z(p),T=Z(((e,t)=>{(0,H.n)(e);const n=(0,H.C)({style:b,timeout:v,easing:c},{mode:"enter"});e.style.webkitTransition=E.transitions.create("opacity",n),e.style.transition=E.transitions.create("opacity",n),d&&d(e,t)})),S=Z(u),C=Z(h),A=Z((e=>{const t=(0,H.C)({style:b,timeout:v,easing:c},{mode:"exit"});e.style.webkitTransition=E.transitions.create("opacity",t),e.style.transition=E.transitions.create("opacity",t),f&&f(e)})),B=Z(m);return(0,R.jsx)(x,(0,r.Z)({appear:s,in:l,nodeRef:y,onEnter:T,onEntered:S,onEntering:P,onExit:A,onExited:B,onExiting:C,addEndListener:e=>{n&&n(y.current,e)},timeout:v},g,{children:(e,t)=>i.cloneElement(a,(0,r.Z)({style:(0,r.Z)({opacity:0,visibility:"exited"!==e||l?void 0:"hidden"},U[e],b,a.props.style),ref:w},t))}))}));const _=["children","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],G=(0,I.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})((({ownerState:e})=>(0,r.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})));var J=i.forwardRef((function(e,t){var n;const i=(0,L.Z)({props:e,name:"MuiBackdrop"}),{children:s,components:a={},componentsProps:l={},className:d,invisible:u=!1,open:p,transitionDuration:f,TransitionComponent:m=q}=i,h=(0,o.Z)(i,_),b=(e=>{const{classes:t}=e;return t})((0,r.Z)({},i,{invisible:u}));return(0,R.jsx)(m,(0,r.Z)({in:p,timeout:f},h,{children:(0,R.jsx)($,{className:d,invisible:u,components:(0,r.Z)({Root:G},a),componentsProps:{root:(0,r.Z)({},l.root,(!a.Root||!c(a.Root))&&{ownerState:(0,r.Z)({},null==(n=l.root)?void 0:n.ownerState)})},classes:b,ref:t,children:s})}))}));const Q=["BackdropComponent","closeAfterTransition","children","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted"],ee=(0,I.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((({theme:e,ownerState:t})=>(0,r.Z)({position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"}))),te=(0,I.ZP)(J,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1});var ne=i.forwardRef((function(e,t){var n;const s=(0,L.Z)({name:"MuiModal",props:e}),{BackdropComponent:a=te,closeAfterTransition:l=!1,children:d,components:u={},componentsProps:p={},disableAutoFocus:f=!1,disableEnforceFocus:m=!1,disableEscapeKeyDown:h=!1,disablePortal:b=!1,disableRestoreFocus:v=!1,disableScrollLock:x=!1,hideBackdrop:g=!1,keepMounted:E=!1}=s,y=(0,o.Z)(s,Q),[k,w]=i.useState(!0),Z={closeAfterTransition:l,disableAutoFocus:f,disableEnforceFocus:m,disableEscapeKeyDown:h,disablePortal:b,disableRestoreFocus:v,disableScrollLock:x,hideBackdrop:g,keepMounted:E},P=(e=>e.classes)((0,r.Z)({},s,Z,{exited:k}));return(0,R.jsx)(F,(0,r.Z)({components:(0,r.Z)({Root:ee},u),componentsProps:{root:(0,r.Z)({},p.root,(!u.Root||!c(u.Root))&&{ownerState:(0,r.Z)({},null==(n=p.root)?void 0:n.ownerState)})},BackdropComponent:a,onTransitionEnter:()=>w(!1),onTransitionExited:()=>w(!0),ref:t},y,{classes:P},Z,{children:d}))}));var oe=function(e,t=166){let n;function o(...o){clearTimeout(n),n=setTimeout((()=>{e.apply(this,o)}),t)}return o.clear=()=>{clearTimeout(n)},o},re=g;const ie=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function se(e,t,n){var o;const r=function(e,t,n){const o=t.getBoundingClientRect(),r=n&&n.getBoundingClientRect(),i=re(t);let s;if(t.fakeTransform)s=t.fakeTransform;else{const e=i.getComputedStyle(t);s=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform")}let a=0,c=0;if(s&&"none"!==s&&"string"===typeof s){const e=s.split("(")[1].split(")")[0].split(",");a=parseInt(e[4],10),c=parseInt(e[5],10)}return"left"===e?r?`translateX(${r.right+a-o.left}px)`:`translateX(${i.innerWidth+a-o.left}px)`:"right"===e?r?`translateX(-${o.right-r.left-a}px)`:`translateX(-${o.left+o.width-a}px)`:"up"===e?r?`translateY(${r.bottom+c-o.top}px)`:`translateY(${i.innerHeight+c-o.top}px)`:r?`translateY(-${o.top-r.top+o.height-c}px)`:`translateY(-${o.top+o.height-c}px)`}(e,t,"function"===typeof(o=n)?o():o);r&&(t.style.webkitTransform=r,t.style.transform=r)}const ae={enter:z.Ui.easeOut,exit:z.Ui.sharp},ce={enter:z.x9.enteringScreen,exit:z.x9.leavingScreen};var le=i.forwardRef((function(e,t){const{addEndListener:n,appear:s=!0,children:a,container:c,direction:l="down",easing:d=ae,in:u,onEnter:p,onEntered:f,onEntering:m,onExit:h,onExited:b,onExiting:v,style:x,timeout:g=ce,TransitionComponent:E=K.ZP}=e,y=(0,o.Z)(e,ie),k=(0,Y.Z)(),w=i.useRef(null),Z=(0,V.Z)(a.ref,w),P=(0,V.Z)(Z,t),T=e=>t=>{e&&(void 0===t?e(w.current):e(w.current,t))},S=T(((e,t)=>{se(l,e,c),(0,H.n)(e),p&&p(e,t)})),C=T(((e,t)=>{const n=(0,H.C)({timeout:g,style:x,easing:d},{mode:"enter"});e.style.webkitTransition=k.transitions.create("-webkit-transform",(0,r.Z)({},n)),e.style.transition=k.transitions.create("transform",(0,r.Z)({},n)),e.style.webkitTransform="none",e.style.transform="none",m&&m(e,t)})),A=T(f),B=T(v),D=T((e=>{const t=(0,H.C)({timeout:g,style:x,easing:d},{mode:"exit"});e.style.webkitTransition=k.transitions.create("-webkit-transform",t),e.style.transition=k.transitions.create("transform",t),se(l,e,c),h&&h(e)})),M=T((e=>{e.style.webkitTransition="",e.style.transition="",b&&b(e)})),N=i.useCallback((()=>{w.current&&se(l,w.current,c)}),[l,c]);return i.useEffect((()=>{if(u||"down"===l||"right"===l)return;const e=oe((()=>{w.current&&se(l,w.current,c)})),t=re(w.current);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[l,u,c]),i.useEffect((()=>{u||N()}),[u,N]),(0,R.jsx)(E,(0,r.Z)({nodeRef:w,onEnter:S,onEntered:A,onEntering:C,onExit:D,onExited:M,onExiting:B,addEndListener:e=>{n&&n(w.current,e)},appear:s,in:u,timeout:g},y,{children:(e,t)=>i.cloneElement(a,(0,r.Z)({ref:P,style:(0,r.Z)({visibility:"exited"!==e||u?void 0:"hidden"},x,a.props.style)},t))}))})),de=n(6501),ue=n(8216);function pe(e){return(0,B.Z)("MuiDrawer",e)}(0,A.Z)("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const fe=["BackdropProps"],me=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],he=(e,t)=>{const{ownerState:n}=e;return[t.root,("permanent"===n.variant||"persistent"===n.variant)&&t.docked,t.modal]},be=(0,I.ZP)(ne,{name:"MuiDrawer",slot:"Root",overridesResolver:he})((({theme:e})=>({zIndex:e.zIndex.drawer}))),ve=(0,I.ZP)("div",{shouldForwardProp:I.FO,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:he})({flex:"0 0 auto"}),xe=(0,I.ZP)(de.Z,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.paper,t[`paperAnchor${(0,ue.Z)(n.anchor)}`],"temporary"!==n.variant&&t[`paperAnchorDocked${(0,ue.Z)(n.anchor)}`]]}})((({theme:e,ownerState:t})=>(0,r.Z)({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},"left"===t.anchor&&{left:0},"top"===t.anchor&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},"right"===t.anchor&&{right:0},"bottom"===t.anchor&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},"left"===t.anchor&&"temporary"!==t.variant&&{borderRight:`1px solid ${e.palette.divider}`},"top"===t.anchor&&"temporary"!==t.variant&&{borderBottom:`1px solid ${e.palette.divider}`},"right"===t.anchor&&"temporary"!==t.variant&&{borderLeft:`1px solid ${e.palette.divider}`},"bottom"===t.anchor&&"temporary"!==t.variant&&{borderTop:`1px solid ${e.palette.divider}`}))),ge={left:"right",right:"left",top:"down",bottom:"up"};const Ee={enter:z.x9.enteringScreen,exit:z.x9.leavingScreen};var ye=i.forwardRef((function(e,t){const n=(0,L.Z)({props:e,name:"MuiDrawer"}),{anchor:c="left",BackdropProps:l,children:d,className:u,elevation:p=16,hideBackdrop:f=!1,ModalProps:{BackdropProps:m}={},onClose:h,open:b=!1,PaperProps:v={},SlideProps:x,TransitionComponent:g=le,transitionDuration:E=Ee,variant:y="temporary"}=n,k=(0,o.Z)(n.ModalProps,fe),w=(0,o.Z)(n,me),Z=(0,Y.Z)(),P=i.useRef(!1);i.useEffect((()=>{P.current=!0}),[]);const T=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?ge[t]:t}(Z,c),S=c,C=(0,r.Z)({},n,{anchor:S,elevation:p,open:b,variant:y},w),A=(e=>{const{classes:t,anchor:n,variant:o}=e,r={root:["root"],docked:[("permanent"===o||"persistent"===o)&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${(0,ue.Z)(n)}`,"temporary"!==o&&`paperAnchorDocked${(0,ue.Z)(n)}`]};return(0,a.Z)(r,pe,t)})(C),B=(0,R.jsx)(xe,(0,r.Z)({elevation:"temporary"===y?p:0,square:!0},v,{className:(0,s.Z)(A.paper,v.className),ownerState:C,children:d}));if("permanent"===y)return(0,R.jsx)(ve,(0,r.Z)({className:(0,s.Z)(A.root,A.docked,u),ownerState:C,ref:t},w,{children:B}));const D=(0,R.jsx)(g,(0,r.Z)({in:b,direction:ge[T],timeout:E,appear:P.current},x,{children:B}));return"persistent"===y?(0,R.jsx)(ve,(0,r.Z)({className:(0,s.Z)(A.root,A.docked,u),ownerState:C,ref:t},w,{children:D})):(0,R.jsx)(be,(0,r.Z)({BackdropProps:(0,r.Z)({},l,m,{transitionDuration:E}),className:(0,s.Z)(A.root,A.modal,u),open:b,ownerState:C,onClose:h,hideBackdrop:f,ref:t},w,k,{children:D}))}))}}]);