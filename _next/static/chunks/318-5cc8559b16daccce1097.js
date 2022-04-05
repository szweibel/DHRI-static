(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{62318:function(e,t,n){"use strict";n.d(t,{ZP:function(){return I}});var o=n(57144),r=n(12715),i=n(67294),s=(n(45697),n(86010)),a=n(27192),c=n(40333),l=n(12666),d=n(93881),u=n(51705),p=n(2734),f=n(96067),m=n(30577),h=n(5340),b=n(85893);const v=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function x(e,t,n){var o;const r=function(e,t,n){const o=t.getBoundingClientRect(),r=n&&n.getBoundingClientRect(),i=(0,h.Z)(t);let s;if(t.fakeTransform)s=t.fakeTransform;else{const e=i.getComputedStyle(t);s=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform")}let a=0,c=0;if(s&&"none"!==s&&"string"===typeof s){const e=s.split("(")[1].split(")")[0].split(",");a=parseInt(e[4],10),c=parseInt(e[5],10)}return"left"===e?r?`translateX(${r.right+a-o.left}px)`:`translateX(${i.innerWidth+a-o.left}px)`:"right"===e?r?`translateX(-${o.right-r.left-a}px)`:`translateX(-${o.left+o.width-a}px)`:"up"===e?r?`translateY(${r.bottom+c-o.top}px)`:`translateY(${i.innerHeight+c-o.top}px)`:r?`translateY(-${o.top-r.top+o.height-c}px)`:`translateY(-${o.top+o.height-c}px)`}(e,t,"function"===typeof(o=n)?o():o);r&&(t.style.webkitTransform=r,t.style.transform=r)}const g={enter:f.Ui.easeOut,exit:f.Ui.sharp},E={enter:f.x9.enteringScreen,exit:f.x9.leavingScreen};var Z=i.forwardRef((function(e,t){const{addEndListener:n,appear:s=!0,children:a,container:c,direction:f="down",easing:Z=g,in:y,onEnter:k,onEntered:w,onEntering:R,onExit:P,onExited:S,onExiting:T,style:C,timeout:A=E,TransitionComponent:B=l.ZP}=e,D=(0,o.Z)(e,v),M=(0,p.Z)(),N=i.useRef(null),F=(0,u.Z)(a.ref,N),I=(0,u.Z)(F,t),L=e=>t=>{e&&(void 0===t?e(N.current):e(N.current,t))},$=L(((e,t)=>{x(f,e,c),(0,m.n)(e),k&&k(e,t)})),j=L(((e,t)=>{const n=(0,m.C)({timeout:A,style:C,easing:Z},{mode:"enter"});e.style.webkitTransition=M.transitions.create("-webkit-transform",(0,r.Z)({},n)),e.style.transition=M.transitions.create("transform",(0,r.Z)({},n)),e.style.webkitTransform="none",e.style.transform="none",R&&R(e,t)})),O=L(w),K=L(T),z=L((e=>{const t=(0,m.C)({timeout:A,style:C,easing:Z},{mode:"exit"});e.style.webkitTransition=M.transitions.create("-webkit-transform",t),e.style.transition=M.transitions.create("transform",t),x(f,e,c),P&&P(e)})),Y=L((e=>{e.style.webkitTransition="",e.style.transition="",S&&S(e)})),H=i.useCallback((()=>{N.current&&x(f,N.current,c)}),[f,c]);return i.useEffect((()=>{if(y||"down"===f||"right"===f)return;const e=(0,d.Z)((()=>{N.current&&x(f,N.current,c)})),t=(0,h.Z)(N.current);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[f,y,c]),i.useEffect((()=>{y||H()}),[y,H]),(0,b.jsx)(B,(0,r.Z)({nodeRef:N,onEnter:$,onEntered:O,onEntering:j,onExit:z,onExited:Y,onExiting:K,addEndListener:e=>{n&&n(N.current,e)},appear:s,in:y,timeout:A},D,{children:(e,t)=>i.cloneElement(a,(0,r.Z)({ref:I,style:(0,r.Z)({visibility:"exited"!==e||y?void 0:"hidden"},C,a.props.style)},t))}))})),y=n(36501),k=n(98216),w=n(16122),R=n(29602),P=n(28979);function S(e){return(0,P.Z)("MuiDrawer",e)}(0,n(76087).Z)("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const T=["BackdropProps"],C=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],A=(e,t)=>{const{ownerState:n}=e;return[t.root,("permanent"===n.variant||"persistent"===n.variant)&&t.docked,t.modal]},B=(0,R.ZP)(c.Z,{name:"MuiDrawer",slot:"Root",overridesResolver:A})((({theme:e})=>({zIndex:e.zIndex.drawer}))),D=(0,R.ZP)("div",{shouldForwardProp:R.FO,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:A})({flex:"0 0 auto"}),M=(0,R.ZP)(y.Z,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.paper,t[`paperAnchor${(0,k.Z)(n.anchor)}`],"temporary"!==n.variant&&t[`paperAnchorDocked${(0,k.Z)(n.anchor)}`]]}})((({theme:e,ownerState:t})=>(0,r.Z)({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},"left"===t.anchor&&{left:0},"top"===t.anchor&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},"right"===t.anchor&&{right:0},"bottom"===t.anchor&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},"left"===t.anchor&&"temporary"!==t.variant&&{borderRight:`1px solid ${e.palette.divider}`},"top"===t.anchor&&"temporary"!==t.variant&&{borderBottom:`1px solid ${e.palette.divider}`},"right"===t.anchor&&"temporary"!==t.variant&&{borderLeft:`1px solid ${e.palette.divider}`},"bottom"===t.anchor&&"temporary"!==t.variant&&{borderTop:`1px solid ${e.palette.divider}`}))),N={left:"right",right:"left",top:"down",bottom:"up"};const F={enter:f.x9.enteringScreen,exit:f.x9.leavingScreen};var I=i.forwardRef((function(e,t){const n=(0,w.Z)({props:e,name:"MuiDrawer"}),{anchor:c="left",BackdropProps:l,children:d,className:u,elevation:f=16,hideBackdrop:m=!1,ModalProps:{BackdropProps:h}={},onClose:v,open:x=!1,PaperProps:g={},SlideProps:E,TransitionComponent:y=Z,transitionDuration:R=F,variant:P="temporary"}=n,A=(0,o.Z)(n.ModalProps,T),I=(0,o.Z)(n,C),L=(0,p.Z)(),$=i.useRef(!1);i.useEffect((()=>{$.current=!0}),[]);const j=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?N[t]:t}(L,c),O=c,K=(0,r.Z)({},n,{anchor:O,elevation:f,open:x,variant:P},I),z=(e=>{const{classes:t,anchor:n,variant:o}=e,r={root:["root"],docked:[("permanent"===o||"persistent"===o)&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${(0,k.Z)(n)}`,"temporary"!==o&&`paperAnchorDocked${(0,k.Z)(n)}`]};return(0,a.Z)(r,S,t)})(K),Y=(0,b.jsx)(M,(0,r.Z)({elevation:"temporary"===P?f:0,square:!0},g,{className:(0,s.Z)(z.paper,g.className),ownerState:K,children:d}));if("permanent"===P)return(0,b.jsx)(D,(0,r.Z)({className:(0,s.Z)(z.root,z.docked,u),ownerState:K,ref:t},I,{children:Y}));const H=(0,b.jsx)(y,(0,r.Z)({in:x,direction:N[j],timeout:R,appear:$.current},E,{children:Y}));return"persistent"===P?(0,b.jsx)(D,(0,r.Z)({className:(0,s.Z)(z.root,z.docked,u),ownerState:K,ref:t},I,{children:H})):(0,b.jsx)(B,(0,r.Z)({BackdropProps:(0,r.Z)({},l,h,{transitionDuration:R}),className:(0,s.Z)(z.root,z.modal,u),open:x,ownerState:K,onClose:v,hideBackdrop:m,ref:t},I,A,{children:H}))}))},40333:function(e,t,n){"use strict";n.d(t,{Z:function(){return Q}});var o=n(57144),r=n(12715),i=n(67294),s=(n(45697),n(28442)),a=n(40190),c=n(46848),l=n(86010),d=n(30067),u=n(57094),p=n(73633),f=n(49064),m=n(27192),h=n(78385),b=n(58290);function v(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function x(e){return parseInt((0,b.Z)(e).getComputedStyle(e).paddingRight,10)||0}function g(e,t,n,o=[],r){const i=[t,n,...o],s=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(e=>{-1===i.indexOf(e)&&-1===s.indexOf(e.tagName)&&v(e,r)}))}function E(e,t){let n=-1;return e.some(((e,o)=>!!t(e)&&(n=o,!0))),n}function Z(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,u.Z)(e);return t.body===e?(0,b.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){const e=function(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}((0,u.Z)(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${x(o)+e}px`;const t=(0,u.Z)(o).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${x(t)+e}px`}))}const e=o.parentElement,t=(0,b.Z)(o),r="HTML"===(null==e?void 0:e.nodeName)&&"scroll"===t.getComputedStyle(e).overflowY?e:o;n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach((({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)}))}}var y=n(85893);const k=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function w(e){const t=[],n=[];return Array.from(e.querySelectorAll(k)).forEach(((e,o)=>{const r=function(e){const t=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===r?t.push(e):n.push({documentOrder:o,tabIndex:r,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function R(){return!0}var P=function(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:r=!1,getTabbable:s=w,isEnabled:a=R,open:c}=e,l=i.useRef(),p=i.useRef(null),f=i.useRef(null),m=i.useRef(null),h=i.useRef(null),b=i.useRef(!1),v=i.useRef(null),x=(0,d.Z)(t.ref,v),g=i.useRef(null);i.useEffect((()=>{c&&v.current&&(b.current=!n)}),[n,c]),i.useEffect((()=>{if(!c||!v.current)return;const e=(0,u.Z)(v.current);return v.current.contains(e.activeElement)||(v.current.hasAttribute("tabIndex")||v.current.setAttribute("tabIndex",-1),b.current&&v.current.focus()),()=>{r||(m.current&&m.current.focus&&(l.current=!0,m.current.focus()),m.current=null)}}),[c]),i.useEffect((()=>{if(!c||!v.current)return;const e=(0,u.Z)(v.current),t=t=>{const{current:n}=v;if(null!==n)if(e.hasFocus()&&!o&&a()&&!l.current){if(!n.contains(e.activeElement)){if(t&&h.current!==t.target||e.activeElement!==h.current)h.current=null;else if(null!==h.current)return;if(!b.current)return;let o=[];if(e.activeElement!==p.current&&e.activeElement!==f.current||(o=s(v.current)),o.length>0){var r,i;const e=Boolean((null==(r=g.current)?void 0:r.shiftKey)&&"Tab"===(null==(i=g.current)?void 0:i.key)),t=o[0],n=o[o.length-1];e?n.focus():t.focus()}else n.focus()}}else l.current=!1},n=t=>{g.current=t,!o&&a()&&"Tab"===t.key&&e.activeElement===v.current&&t.shiftKey&&(l.current=!0,f.current.focus())};e.addEventListener("focusin",t),e.addEventListener("keydown",n,!0);const r=setInterval((()=>{"BODY"===e.activeElement.tagName&&t()}),50);return()=>{clearInterval(r),e.removeEventListener("focusin",t),e.removeEventListener("keydown",n,!0)}}),[n,o,r,a,c,s]);const E=e=>{null===m.current&&(m.current=e.relatedTarget),b.current=!0};return(0,y.jsxs)(i.Fragment,{children:[(0,y.jsx)("div",{tabIndex:0,onFocus:E,ref:p,"data-test":"sentinelStart"}),i.cloneElement(t,{ref:x,onFocus:e=>{null===m.current&&(m.current=e.relatedTarget),b.current=!0,h.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,y.jsx)("div",{tabIndex:0,onFocus:E,ref:f,"data-test":"sentinelEnd"})]})},S=n(76087),T=n(28979);function C(e){return(0,T.Z)("MuiModal",e)}(0,S.Z)("MuiModal",["root","hidden"]);const A=["BackdropComponent","BackdropProps","children","classes","className","closeAfterTransition","component","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","theme","onTransitionEnter","onTransitionExited"];const B=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&v(e.modalRef,!1);const o=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);g(t,e.mount,e.modalRef,o,!0);const r=E(this.containers,(e=>e.container===t));return-1!==r?(this.containers[r].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:o}),n)}mount(e,t){const n=E(this.containers,(t=>-1!==t.modals.indexOf(e))),o=this.containers[n];o.restore||(o.restore=Z(o,t))}remove(e){const t=this.modals.indexOf(e);if(-1===t)return t;const n=E(this.containers,(t=>-1!==t.modals.indexOf(e))),o=this.containers[n];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(t,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&v(e.modalRef,!0),g(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(n,1);else{const e=o.modals[o.modals.length-1];e.modalRef&&v(e.modalRef,!1)}return t}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}};var D=i.forwardRef((function(e,t){const{BackdropComponent:n,BackdropProps:o,children:r,classes:b,className:x,closeAfterTransition:g=!1,component:E="div",components:Z={},componentsProps:k={},container:w,disableAutoFocus:R=!1,disableEnforceFocus:S=!1,disableEscapeKeyDown:T=!1,disablePortal:D=!1,disableRestoreFocus:M=!1,disableScrollLock:N=!1,hideBackdrop:F=!1,keepMounted:I=!1,manager:L=B,onBackdropClick:$,onClose:j,onKeyDown:O,open:K,theme:z,onTransitionEnter:Y,onTransitionExited:H}=e,W=(0,c.Z)(e,A),[U,X]=i.useState(!0),q=i.useRef({}),V=i.useRef(null),_=i.useRef(null),G=(0,d.Z)(_,t),J=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(e),Q=()=>(q.current.modalRef=_.current,q.current.mountNode=V.current,q.current),ee=()=>{L.mount(Q(),{disableScrollLock:N}),_.current.scrollTop=0},te=(0,p.Z)((()=>{const e=function(e){return"function"===typeof e?e():e}(w)||(0,u.Z)(V.current).body;L.add(Q(),e),_.current&&ee()})),ne=i.useCallback((()=>L.isTopModal(Q())),[L]),oe=(0,p.Z)((e=>{V.current=e,e&&(K&&ne()?ee():v(_.current,!0))})),re=i.useCallback((()=>{L.remove(Q())}),[L]);i.useEffect((()=>()=>{re()}),[re]),i.useEffect((()=>{K?te():J&&g||re()}),[K,re,J,g,te]);const ie=(0,a.Z)({},e,{classes:b,closeAfterTransition:g,disableAutoFocus:R,disableEnforceFocus:S,disableEscapeKeyDown:T,disablePortal:D,disableRestoreFocus:M,disableScrollLock:N,exited:U,hideBackdrop:F,keepMounted:I}),se=(e=>{const{open:t,exited:n,classes:o}=e,r={root:["root",!t&&n&&"hidden"]};return(0,m.Z)(r,C,o)})(ie);if(!I&&!K&&(!J||U))return null;const ae=()=>{X(!1),Y&&Y()},ce=()=>{X(!0),H&&H(),g&&re()},le={};void 0===r.props.tabIndex&&(le.tabIndex="-1"),J&&(le.onEnter=(0,f.Z)(ae,r.props.onEnter),le.onExited=(0,f.Z)(ce,r.props.onExited));const de=Z.Root||E,ue=k.root||{};return(0,y.jsx)(h.Z,{ref:oe,container:w,disablePortal:D,children:(0,y.jsxs)(de,(0,a.Z)({role:"presentation"},ue,!(0,s.Z)(de)&&{as:E,ownerState:(0,a.Z)({},ie,ue.ownerState),theme:z},W,{ref:G,onKeyDown:e=>{O&&O(e),"Escape"===e.key&&ne()&&(T||(e.stopPropagation(),j&&j(e,"escapeKeyDown")))},className:(0,l.Z)(se.root,ue.className,x),children:[!F&&n?(0,y.jsx)(n,(0,a.Z)({open:K,onClick:e=>{e.target===e.currentTarget&&($&&$(e),j&&j(e,"backdropClick"))}},o)):null,(0,y.jsx)(P,{disableEnforceFocus:S,disableAutoFocus:R,disableRestoreFocus:M,isEnabled:ne,open:K,children:i.cloneElement(r,le)})]}))})})),M=n(29602),N=n(16122);function F(e){return(0,T.Z)("MuiBackdrop",e)}(0,S.Z)("MuiBackdrop",["root","invisible"]);const I=["classes","className","invisible","component","components","componentsProps","theme"];var L=i.forwardRef((function(e,t){const{classes:n,className:o,invisible:r=!1,component:i="div",components:d={},componentsProps:u={},theme:p}=e,f=(0,c.Z)(e,I),h=(0,a.Z)({},e,{classes:n,invisible:r}),b=(e=>{const{classes:t,invisible:n}=e,o={root:["root",n&&"invisible"]};return(0,m.Z)(o,F,t)})(h),v=d.Root||i,x=u.root||{};return(0,y.jsx)(v,(0,a.Z)({"aria-hidden":!0},x,!(0,s.Z)(v)&&{as:i,ownerState:(0,a.Z)({},h,x.ownerState),theme:p},{ref:t},f,{className:(0,l.Z)(b.root,x.className,o)}))})),$=n(12666),j=n(96067),O=n(2734),K=n(30577),z=n(51705);const Y=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],H={entering:{opacity:1},entered:{opacity:1}},W={enter:j.x9.enteringScreen,exit:j.x9.leavingScreen};var U=i.forwardRef((function(e,t){const{addEndListener:n,appear:s=!0,children:a,easing:c,in:l,onEnter:d,onEntered:u,onEntering:p,onExit:f,onExited:m,onExiting:h,style:b,timeout:v=W,TransitionComponent:x=$.ZP}=e,g=(0,o.Z)(e,Y),E=(0,O.Z)(),Z=i.useRef(null),k=(0,z.Z)(a.ref,t),w=(0,z.Z)(Z,k),R=e=>t=>{if(e){const n=Z.current;void 0===t?e(n):e(n,t)}},P=R(p),S=R(((e,t)=>{(0,K.n)(e);const n=(0,K.C)({style:b,timeout:v,easing:c},{mode:"enter"});e.style.webkitTransition=E.transitions.create("opacity",n),e.style.transition=E.transitions.create("opacity",n),d&&d(e,t)})),T=R(u),C=R(h),A=R((e=>{const t=(0,K.C)({style:b,timeout:v,easing:c},{mode:"exit"});e.style.webkitTransition=E.transitions.create("opacity",t),e.style.transition=E.transitions.create("opacity",t),f&&f(e)})),B=R(m);return(0,y.jsx)(x,(0,r.Z)({appear:s,in:l,nodeRef:Z,onEnter:S,onEntered:T,onEntering:P,onExit:A,onExited:B,onExiting:C,addEndListener:e=>{n&&n(Z.current,e)},timeout:v},g,{children:(e,t)=>i.cloneElement(a,(0,r.Z)({style:(0,r.Z)({opacity:0,visibility:"exited"!==e||l?void 0:"hidden"},H[e],b,a.props.style),ref:w},t))}))}));const X=["children","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],q=(0,M.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})((({ownerState:e})=>(0,r.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})));var V=i.forwardRef((function(e,t){var n;const i=(0,N.Z)({props:e,name:"MuiBackdrop"}),{children:a,components:c={},componentsProps:l={},className:d,invisible:u=!1,open:p,transitionDuration:f,TransitionComponent:m=U}=i,h=(0,o.Z)(i,X),b=(e=>{const{classes:t}=e;return t})((0,r.Z)({},i,{invisible:u}));return(0,y.jsx)(m,(0,r.Z)({in:p,timeout:f},h,{children:(0,y.jsx)(L,{className:d,invisible:u,components:(0,r.Z)({Root:q},c),componentsProps:{root:(0,r.Z)({},l.root,(!c.Root||!(0,s.Z)(c.Root))&&{ownerState:(0,r.Z)({},null==(n=l.root)?void 0:n.ownerState)})},classes:b,ref:t,children:a})}))}));const _=["BackdropComponent","closeAfterTransition","children","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted"],G=(0,M.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((({theme:e,ownerState:t})=>(0,r.Z)({position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"}))),J=(0,M.ZP)(V,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1});var Q=i.forwardRef((function(e,t){var n;const a=(0,N.Z)({name:"MuiModal",props:e}),{BackdropComponent:c=J,closeAfterTransition:l=!1,children:d,components:u={},componentsProps:p={},disableAutoFocus:f=!1,disableEnforceFocus:m=!1,disableEscapeKeyDown:h=!1,disablePortal:b=!1,disableRestoreFocus:v=!1,disableScrollLock:x=!1,hideBackdrop:g=!1,keepMounted:E=!1}=a,Z=(0,o.Z)(a,_),[k,w]=i.useState(!0),R={closeAfterTransition:l,disableAutoFocus:f,disableEnforceFocus:m,disableEscapeKeyDown:h,disablePortal:b,disableRestoreFocus:v,disableScrollLock:x,hideBackdrop:g,keepMounted:E},P=(e=>e.classes)((0,r.Z)({},a,R,{exited:k}));return(0,y.jsx)(D,(0,r.Z)({components:(0,r.Z)({Root:G},u),componentsProps:{root:(0,r.Z)({},p.root,(!u.Root||!(0,s.Z)(u.Root))&&{ownerState:(0,r.Z)({},null==(n=p.root)?void 0:n.ownerState)})},BackdropComponent:c,onTransitionEnter:()=>w(!1),onTransitionExited:()=>w(!0),ref:t},Z,{classes:P},R,{children:d}))}))}}]);