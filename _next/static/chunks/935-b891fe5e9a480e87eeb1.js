(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{92137:function(t,r,e){"use strict";function n(t,r,e,n,o,i,f){try{var u=t[i](f),s=u.value}catch(a){return void e(a)}u.done?r(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var f=t.apply(r,e);function u(t){n(f,o,i,u,s,"next",t)}function s(t){n(f,o,i,u,s,"throw",t)}u(void 0)}))}}e.d(r,{Z:function(){return o}})},66652:function(t,r,e){"use strict";var n=e(95318),o=e(20862);r.Z=void 0;var i=o(e(67294)),f=(0,n(e(2108)).default)(i.createElement("path",{d:"M8 5v14l11-7z"}),"PlayArrow");r.Z=f},59062:function(t,r,e){"use strict";e.d(r,{Z:function(){return I}});var n=e(57144),o=e(12715),i=e(67294),f=(e(45697),e(86010)),u=e(27192),s=e(70917),a=e(98216),c=e(16122),h=e(29602),l=e(28979);function p(t){return(0,l.Z)("MuiCircularProgress",t)}(0,e(76087).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var y=e(85893);const g=["className","color","disableShrink","size","style","thickness","value","variant"];let d,v,w,m,b=t=>t;const E=44,A=(0,s.F4)(d||(d=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,s.F4)(v||(v=b`
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
`)),B=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:e}=t;return[r.root,r[e.variant],r[`color${(0,a.Z)(e.color)}`]]}})((({ownerState:t,theme:r})=>(0,o.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:r.transitions.create("transform")},"inherit"!==t.color&&{color:r.palette[t.color].main})),(({ownerState:t})=>"indeterminate"===t.variant&&(0,s.iv)(w||(w=b`
      animation: ${0} 1.4s linear infinite;
    `),A))),x=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,r)=>r.svg})({display:"block"}),k=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,r)=>{const{ownerState:e}=t;return[r.circle,r[`circle${(0,a.Z)(e.variant)}`],e.disableShrink&&r.circleDisableShrink]}})((({ownerState:t,theme:r})=>(0,o.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:t})=>"indeterminate"===t.variant&&!t.disableShrink&&(0,s.iv)(m||(m=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S)));var I=i.forwardRef((function(t,r){const e=(0,c.Z)({props:t,name:"MuiCircularProgress"}),{className:i,color:s="primary",disableShrink:h=!1,size:l=40,style:d,thickness:v=3.6,value:w=0,variant:m="indeterminate"}=e,b=(0,n.Z)(e,g),A=(0,o.Z)({},e,{color:s,disableShrink:h,size:l,thickness:v,value:w,variant:m}),S=(t=>{const{classes:r,variant:e,color:n,disableShrink:o}=t,i={root:["root",e,`color${(0,a.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,a.Z)(e)}`,o&&"circleDisableShrink"]};return(0,u.Z)(i,p,r)})(A),I={},R={},U={};if("determinate"===m){const t=2*Math.PI*((E-v)/2);I.strokeDasharray=t.toFixed(3),U["aria-valuenow"]=Math.round(w),I.strokeDashoffset=`${((100-w)/100*t).toFixed(3)}px`,R.transform="rotate(-90deg)"}return(0,y.jsx)(B,(0,o.Z)({className:(0,f.Z)(S.root,i),style:(0,o.Z)({width:l,height:l},R,d),ownerState:A,ref:r,role:"progressbar"},U,b,{children:(0,y.jsx)(x,{className:S.svg,ownerState:A,viewBox:"22 22 44 44",children:(0,y.jsx)(k,{className:S.circle,style:I,ownerState:A,cx:E,cy:E,r:(E-v)/2,fill:"none",strokeWidth:v})})}))}))},15949:function(t,r,e){"use strict";e.d(r,{Z:function(){return w}});var n=e(12715),o=e(67294),i=e(57144),f=(e(45697),e(86010)),u=e(27192),s=e(98216),a=e(16122),c=e(29602),h=e(28979);function l(t){return(0,h.Z)("MuiSvgIcon",t)}(0,e(76087).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=e(85893);const y=["children","className","color","component","fontSize","htmlColor","titleAccess","viewBox"],g=(0,c.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:e}=t;return[r.root,"inherit"!==e.color&&r[`color${(0,s.Z)(e.color)}`],r[`fontSize${(0,s.Z)(e.fontSize)}`]]}})((({theme:t,ownerState:r})=>{var e,n;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:t.transitions.create("fill",{duration:t.transitions.duration.shorter}),fontSize:{inherit:"inherit",small:t.typography.pxToRem(20),medium:t.typography.pxToRem(24),large:t.typography.pxToRem(35)}[r.fontSize],color:null!=(e=null==(n=t.palette[r.color])?void 0:n.main)?e:{action:t.palette.action.active,disabled:t.palette.action.disabled,inherit:void 0}[r.color]}})),d=o.forwardRef((function(t,r){const e=(0,a.Z)({props:t,name:"MuiSvgIcon"}),{children:o,className:c,color:h="inherit",component:d="svg",fontSize:v="medium",htmlColor:w,titleAccess:m,viewBox:b="0 0 24 24"}=e,E=(0,i.Z)(e,y),A=(0,n.Z)({},e,{color:h,component:d,fontSize:v,viewBox:b}),S=(t=>{const{color:r,fontSize:e,classes:n}=t,o={root:["root","inherit"!==r&&`color${(0,s.Z)(r)}`,`fontSize${(0,s.Z)(e)}`]};return(0,u.Z)(o,l,n)})(A);return(0,p.jsxs)(g,(0,n.Z)({as:d,className:(0,f.Z)(S.root,c),ownerState:A,focusable:"false",viewBox:b,color:w,"aria-hidden":!m||void 0,role:m?"img":void 0,ref:r},E,{children:[o,m?(0,p.jsx)("title",{children:m}):null]}))}));d.muiName="SvgIcon";var v=d;function w(t,r){const e=(e,o)=>(0,p.jsx)(v,(0,n.Z)({"data-testid":`${r}Icon`,ref:o},e,{children:t}));return e.muiName=v.muiName,o.memo(o.forwardRef(e))}},93881:function(t,r,e){"use strict";e.d(r,{Z:function(){return n}});var n=function(t,r=166){let e;function n(...n){clearTimeout(e),e=setTimeout((()=>{t.apply(this,n)}),r)}return n.clear=()=>{clearTimeout(e)},n}},48502:function(t,r,e){"use strict";e.d(r,{Z:function(){return o}});var n=e(67294);var o=function(t,r){return n.isValidElement(t)&&-1!==r.indexOf(t.type.muiName)}},5340:function(t,r,e){"use strict";var n=e(58290);r.Z=n.Z},49064:function(t,r,e){"use strict";function n(...t){return t.reduce(((t,r)=>null==r?t:function(...e){t.apply(this,e),r.apply(this,e)}),(()=>{}))}e.d(r,{Z:function(){return n}})},57094:function(t,r,e){"use strict";function n(t){return t&&t.ownerDocument||document}e.d(r,{Z:function(){return n}})},58290:function(t,r,e){"use strict";e.d(r,{Z:function(){return o}});var n=e(57094);function o(t){return(0,n.Z)(t).defaultView||window}},79742:function(t,r){"use strict";r.byteLength=function(t){var r=s(t),e=r[0],n=r[1];return 3*(e+n)/4-n},r.toByteArray=function(t){var r,e,i=s(t),f=i[0],u=i[1],a=new o(function(t,r,e){return 3*(r+e)/4-e}(0,f,u)),c=0,h=u>0?f-4:f;for(e=0;e<h;e+=4)r=n[t.charCodeAt(e)]<<18|n[t.charCodeAt(e+1)]<<12|n[t.charCodeAt(e+2)]<<6|n[t.charCodeAt(e+3)],a[c++]=r>>16&255,a[c++]=r>>8&255,a[c++]=255&r;2===u&&(r=n[t.charCodeAt(e)]<<2|n[t.charCodeAt(e+1)]>>4,a[c++]=255&r);1===u&&(r=n[t.charCodeAt(e)]<<10|n[t.charCodeAt(e+1)]<<4|n[t.charCodeAt(e+2)]>>2,a[c++]=r>>8&255,a[c++]=255&r);return a},r.fromByteArray=function(t){for(var r,n=t.length,o=n%3,i=[],f=16383,u=0,s=n-o;u<s;u+=f)i.push(a(t,u,u+f>s?s:u+f));1===o?(r=t[n-1],i.push(e[r>>2]+e[r<<4&63]+"==")):2===o&&(r=(t[n-2]<<8)+t[n-1],i.push(e[r>>10]+e[r>>4&63]+e[r<<2&63]+"="));return i.join("")};for(var e=[],n=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,u=i.length;f<u;++f)e[f]=i[f],n[i.charCodeAt(f)]=f;function s(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function a(t,r,n){for(var o,i,f=[],u=r;u<n;u+=3)o=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),f.push(e[(i=o)>>18&63]+e[i>>12&63]+e[i>>6&63]+e[63&i]);return f.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},48764:function(t,r,e){"use strict";var n=e(79742),o=e(80645),i="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=s,r.SlowBuffer=function(t){+t!=t&&(t=0);return s.alloc(+t)},r.INSPECT_MAX_BYTES=50;var f=2147483647;function u(t){if(t>f)throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,s.prototype),r}function s(t,r,e){if("number"===typeof t){if("string"===typeof r)throw new TypeError('The "string" argument must be of type string. Received type number');return h(t)}return a(t,r,e)}function a(t,r,e){if("string"===typeof t)return function(t,r){"string"===typeof r&&""!==r||(r="utf8");if(!s.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=0|g(t,r),n=u(e),o=n.write(t,r);o!==e&&(n=n.slice(0,o));return n}(t,r);if(ArrayBuffer.isView(t))return l(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if($(t,ArrayBuffer)||t&&$(t.buffer,ArrayBuffer))return p(t,r,e);if("undefined"!==typeof SharedArrayBuffer&&($(t,SharedArrayBuffer)||t&&$(t.buffer,SharedArrayBuffer)))return p(t,r,e);if("number"===typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return s.from(n,r,e);var o=function(t){if(s.isBuffer(t)){var r=0|y(t.length),e=u(r);return 0===e.length||t.copy(e,0,0,r),e}if(void 0!==t.length)return"number"!==typeof t.length||F(t.length)?u(0):l(t);if("Buffer"===t.type&&Array.isArray(t.data))return l(t.data)}(t);if(o)return o;if("undefined"!==typeof Symbol&&null!=Symbol.toPrimitive&&"function"===typeof t[Symbol.toPrimitive])return s.from(t[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function c(t){if("number"!==typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return c(t),u(t<0?0:0|y(t))}function l(t){for(var r=t.length<0?0:0|y(t.length),e=u(r),n=0;n<r;n+=1)e[n]=255&t[n];return e}function p(t,r,e){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===r&&void 0===e?new Uint8Array(t):void 0===e?new Uint8Array(t,r):new Uint8Array(t,r,e),Object.setPrototypeOf(n,s.prototype),n}function y(t){if(t>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return 0|t}function g(t,r){if(s.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||$(t,ArrayBuffer))return t.byteLength;if("string"!==typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===e)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return z(t).length;default:if(o)return n?-1:N(t).length;r=(""+r).toLowerCase(),o=!0}}function d(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return T(this,r,e);case"utf8":case"utf-8":return I(this,r,e);case"ascii":return U(this,r,e);case"latin1":case"binary":return C(this,r,e);case"base64":return k(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Z(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function v(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function w(t,r,e,n,o){if(0===t.length)return-1;if("string"===typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),F(e=+e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0){if(!o)return-1;e=0}if("string"===typeof r&&(r=s.from(r,n)),s.isBuffer(r))return 0===r.length?-1:m(t,r,e,n,o);if("number"===typeof r)return r&=255,"function"===typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):m(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function m(t,r,e,n,o){var i,f=1,u=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,u/=2,s/=2,e/=2}function a(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}if(o){var c=-1;for(i=e;i<u;i++)if(a(t,i)===a(r,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===s)return c*f}else-1!==c&&(i-=i-c),c=-1}else for(e+s>u&&(e=u-s),i=e;i>=0;i--){for(var h=!0,l=0;l<s;l++)if(a(t,i+l)!==a(r,l)){h=!1;break}if(h)return i}return-1}function b(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;n>i/2&&(n=i/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(F(u))return f;t[e+f]=u}return f}function E(t,r,e,n){return D(N(r,t.length-e),t,e,n)}function A(t,r,e,n){return D(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function S(t,r,e,n){return A(t,r,e,n)}function B(t,r,e,n){return D(z(r),t,e,n)}function x(t,r,e,n){return D(function(t,r){for(var e,n,o,i=[],f=0;f<t.length&&!((r-=2)<0);++f)n=(e=t.charCodeAt(f))>>8,o=e%256,i.push(o),i.push(n);return i}(r,t.length-e),t,e,n)}function k(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function I(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i,f,u,s,a=t[o],c=null,h=a>239?4:a>223?3:a>191?2:1;if(o+h<=e)switch(h){case 1:a<128&&(c=a);break;case 2:128===(192&(i=t[o+1]))&&(s=(31&a)<<6|63&i)>127&&(c=s);break;case 3:i=t[o+1],f=t[o+2],128===(192&i)&&128===(192&f)&&(s=(15&a)<<12|(63&i)<<6|63&f)>2047&&(s<55296||s>57343)&&(c=s);break;case 4:i=t[o+1],f=t[o+2],u=t[o+3],128===(192&i)&&128===(192&f)&&128===(192&u)&&(s=(15&a)<<18|(63&i)<<12|(63&f)<<6|63&u)>65535&&s<1114112&&(c=s)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=h}return function(t){var r=t.length;if(r<=R)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=R));return e}(n)}r.kMaxLength=f,s.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),42===t.foo()}catch(e){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"===typeof console||"function"!==typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(t,r,e){return a(t,r,e)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(t,r,e){return function(t,r,e){return c(t),t<=0?u(t):void 0!==r?"string"===typeof e?u(t).fill(r,e):u(t).fill(r):u(t)}(t,r,e)},s.allocUnsafe=function(t){return h(t)},s.allocUnsafeSlow=function(t){return h(t)},s.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==s.prototype},s.compare=function(t,r){if($(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),$(r,Uint8Array)&&(r=s.from(r,r.offset,r.byteLength)),!s.isBuffer(t)||!s.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===r)return 0;for(var e=t.length,n=r.length,o=0,i=Math.min(e,n);o<i;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,r){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=s.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var i=t[e];if($(i,Uint8Array)&&(i=s.from(i)),!s.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},s.byteLength=g,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)v(this,r,r+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)v(this,r,r+3),v(this,r+1,r+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)v(this,r,r+7),v(this,r+1,r+6),v(this,r+2,r+5),v(this,r+3,r+4);return this},s.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?I(this,0,t):d.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},i&&(s.prototype[i]=s.prototype.inspect),s.prototype.compare=function(t,r,e,n,o){if($(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),r<0||e>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&r>=e)return 0;if(n>=o)return-1;if(r>=e)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),f=(e>>>=0)-(r>>>=0),u=Math.min(i,f),a=this.slice(n,o),c=t.slice(r,e),h=0;h<u;++h)if(a[h]!==c[h]){i=a[h],f=c[h];break}return i<f?-1:f<i?1:0},s.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},s.prototype.indexOf=function(t,r,e){return w(this,t,r,e,!0)},s.prototype.lastIndexOf=function(t,r,e){return w(this,t,r,e,!1)},s.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"===typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return b(this,t,r,e);case"utf8":case"utf-8":return E(this,t,r,e);case"ascii":return A(this,t,r,e);case"latin1":case"binary":return S(this,t,r,e);case"base64":return B(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,r,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var R=4096;function U(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}function C(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function T(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=Y[t[i]];return o}function Z(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function M(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function O(t,r,e,n,o,i){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function P(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function j(t,r,e,n,i){return r=+r,e>>>=0,i||P(t,0,e,4),o.write(t,r,e,n,23,4),e+4}function L(t,r,e,n,i){return r=+r,e>>>=0,i||P(t,0,e,8),o.write(t,r,e,n,52,8),e+8}s.prototype.slice=function(t,r){var e=this.length;(t=~~t)<0?(t+=e)<0&&(t=0):t>e&&(t=e),(r=void 0===r?e:~~r)<0?(r+=e)<0&&(r=0):r>e&&(r=e),r<t&&(r=t);var n=this.subarray(t,r);return Object.setPrototypeOf(n,s.prototype),n},s.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||M(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},s.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||M(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},s.prototype.readUInt8=function(t,r){return t>>>=0,r||M(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,r){return t>>>=0,r||M(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,r){return t>>>=0,r||M(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,r){return t>>>=0,r||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,r){return t>>>=0,r||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||M(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*r)),n},s.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||M(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*r)),i},s.prototype.readInt8=function(t,r){return t>>>=0,r||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,r){t>>>=0,r||M(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},s.prototype.readInt16BE=function(t,r){t>>>=0,r||M(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},s.prototype.readInt32LE=function(t,r){return t>>>=0,r||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,r){return t>>>=0,r||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,r){return t>>>=0,r||M(t,4,this.length),o.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,r){return t>>>=0,r||M(t,4,this.length),o.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,r){return t>>>=0,r||M(t,8,this.length),o.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,r){return t>>>=0,r||M(t,8,this.length),o.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||O(this,t,r,e,Math.pow(2,8*e)-1,0);var o=1,i=0;for(this[r]=255&t;++i<e&&(o*=256);)this[r+i]=t/o&255;return r+e},s.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||O(this,t,r,e,Math.pow(2,8*e)-1,0);var o=e-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+e},s.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,1,255,0),this[r]=255&t,r+1},s.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},s.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},s.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},s.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},s.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var o=Math.pow(2,8*e-1);O(this,t,r,e,o-1,-o)}var i=0,f=1,u=0;for(this[r]=255&t;++i<e&&(f*=256);)t<0&&0===u&&0!==this[r+i-1]&&(u=1),this[r+i]=(t/f>>0)-u&255;return r+e},s.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var o=Math.pow(2,8*e-1);O(this,t,r,e,o-1,-o)}var i=e-1,f=1,u=0;for(this[r+i]=255&t;--i>=0&&(f*=256);)t<0&&0===u&&0!==this[r+i+1]&&(u=1),this[r+i]=(t/f>>0)-u&255;return r+e},s.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},s.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},s.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},s.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},s.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},s.prototype.writeFloatLE=function(t,r,e){return j(this,t,r,!0,e)},s.prototype.writeFloatBE=function(t,r,e){return j(this,t,r,!1,e)},s.prototype.writeDoubleLE=function(t,r,e){return L(this,t,r,!0,e)},s.prototype.writeDoubleBE=function(t,r,e){return L(this,t,r,!1,e)},s.prototype.copy=function(t,r,e,n){if(!s.isBuffer(t))throw new TypeError("argument should be a Buffer");if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o=n-e;if(this===t&&"function"===typeof Uint8Array.prototype.copyWithin)this.copyWithin(r,e,n);else if(this===t&&e<r&&r<n)for(var i=o-1;i>=0;--i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,n),r);return o},s.prototype.fill=function(t,r,e,n){if("string"===typeof t){if("string"===typeof r?(n=r,r=0,e=this.length):"string"===typeof e&&(n=e,e=this.length),void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){var o=t.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(t=o)}}else"number"===typeof t?t&=255:"boolean"===typeof t&&(t=Number(t));if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var i;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"===typeof t)for(i=r;i<e;++i)this[i]=t;else{var f=s.isBuffer(t)?t:s.from(t,n),u=f.length;if(0===u)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<e-r;++i)this[i+r]=f[i%u]}return this};var _=/[^+/0-9A-Za-z-_]/g;function N(t,r){var e;r=r||1/0;for(var n=t.length,o=null,i=[],f=0;f<n;++f){if((e=t.charCodeAt(f))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function z(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(_,"")).length<2)return"";for(;t.length%4!==0;)t+="=";return t}(t))}function D(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function $(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}function F(t){return t!==t}var Y=function(){for(var t="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var n=16*e,o=0;o<16;++o)r[n+o]=t[e]+t[o];return r}()},16313:function(t,r,e){var n=e(48764).Buffer,o=function(){"use strict";function t(r,o,i,f){"object"===typeof o&&(i=o.depth,f=o.prototype,o.filter,o=o.circular);var u=[],s=[],a="undefined"!=typeof n;return"undefined"==typeof o&&(o=!0),"undefined"==typeof i&&(i=1/0),function r(i,c){if(null===i)return null;if(0==c)return i;var h,l;if("object"!=typeof i)return i;if(t.__isArray(i))h=[];else if(t.__isRegExp(i))h=new RegExp(i.source,e(i)),i.lastIndex&&(h.lastIndex=i.lastIndex);else if(t.__isDate(i))h=new Date(i.getTime());else{if(a&&n.isBuffer(i))return h=n.allocUnsafe?n.allocUnsafe(i.length):new n(i.length),i.copy(h),h;"undefined"==typeof f?(l=Object.getPrototypeOf(i),h=Object.create(l)):(h=Object.create(f),l=f)}if(o){var p=u.indexOf(i);if(-1!=p)return s[p];u.push(i),s.push(h)}for(var y in i){var g;l&&(g=Object.getOwnPropertyDescriptor(l,y)),g&&null==g.set||(h[y]=r(i[y],c-1))}return h}(r,i)}function r(t){return Object.prototype.toString.call(t)}function e(t){var r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),r}return t.clonePrototype=function(t){if(null===t)return null;var r=function(){};return r.prototype=t,new r},t.__objToStr=r,t.__isDate=function(t){return"object"===typeof t&&"[object Date]"===r(t)},t.__isArray=function(t){return"object"===typeof t&&"[object Array]"===r(t)},t.__isRegExp=function(t){return"object"===typeof t&&"[object RegExp]"===r(t)},t.__getRegExpFlags=e,t}();t.exports&&(t.exports=o)},41185:function(t,r,e){var n=e(16313);t.exports=function(t,r){return t=t||{},Object.keys(r).forEach((function(e){"undefined"===typeof t[e]&&(t[e]=n(r[e]))})),t}},80645:function(t,r){r.read=function(t,r,e,n,o){var i,f,u=8*o-n-1,s=(1<<u)-1,a=s>>1,c=-7,h=e?o-1:0,l=e?-1:1,p=t[r+h];for(h+=l,i=p&(1<<-c)-1,p>>=-c,c+=u;c>0;i=256*i+t[r+h],h+=l,c-=8);for(f=i&(1<<-c)-1,i>>=-c,c+=n;c>0;f=256*f+t[r+h],h+=l,c-=8);if(0===i)i=1-a;else{if(i===s)return f?NaN:1/0*(p?-1:1);f+=Math.pow(2,n),i-=a}return(p?-1:1)*f*Math.pow(2,i-n)},r.write=function(t,r,e,n,o,i){var f,u,s,a=8*i-o-1,c=(1<<a)-1,h=c>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,y=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=c):(f=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-f))<1&&(f--,s*=2),(r+=f+h>=1?l/s:l*Math.pow(2,1-h))*s>=2&&(f++,s/=2),f+h>=c?(u=0,f=c):f+h>=1?(u=(r*s-1)*Math.pow(2,o),f+=h):(u=r*Math.pow(2,h-1)*Math.pow(2,o),f=0));o>=8;t[e+p]=255&u,p+=y,u/=256,o-=8);for(f=f<<o|u,a+=o;a>0;t[e+p]=255&f,p+=y,f/=256,a-=8);t[e+p-y]|=128*g}},72653:function(t){t.exports=[[768,879],[1155,1158],[1160,1161],[1425,1469],[1471,1471],[1473,1474],[1476,1477],[1479,1479],[1536,1539],[1552,1557],[1611,1630],[1648,1648],[1750,1764],[1767,1768],[1770,1773],[1807,1807],[1809,1809],[1840,1866],[1958,1968],[2027,2035],[2305,2306],[2364,2364],[2369,2376],[2381,2381],[2385,2388],[2402,2403],[2433,2433],[2492,2492],[2497,2500],[2509,2509],[2530,2531],[2561,2562],[2620,2620],[2625,2626],[2631,2632],[2635,2637],[2672,2673],[2689,2690],[2748,2748],[2753,2757],[2759,2760],[2765,2765],[2786,2787],[2817,2817],[2876,2876],[2879,2879],[2881,2883],[2893,2893],[2902,2902],[2946,2946],[3008,3008],[3021,3021],[3134,3136],[3142,3144],[3146,3149],[3157,3158],[3260,3260],[3263,3263],[3270,3270],[3276,3277],[3298,3299],[3393,3395],[3405,3405],[3530,3530],[3538,3540],[3542,3542],[3633,3633],[3636,3642],[3655,3662],[3761,3761],[3764,3769],[3771,3772],[3784,3789],[3864,3865],[3893,3893],[3895,3895],[3897,3897],[3953,3966],[3968,3972],[3974,3975],[3984,3991],[3993,4028],[4038,4038],[4141,4144],[4146,4146],[4150,4151],[4153,4153],[4184,4185],[4448,4607],[4959,4959],[5906,5908],[5938,5940],[5970,5971],[6002,6003],[6068,6069],[6071,6077],[6086,6086],[6089,6099],[6109,6109],[6155,6157],[6313,6313],[6432,6434],[6439,6440],[6450,6450],[6457,6459],[6679,6680],[6912,6915],[6964,6964],[6966,6970],[6972,6972],[6978,6978],[7019,7027],[7616,7626],[7678,7679],[8203,8207],[8234,8238],[8288,8291],[8298,8303],[8400,8431],[12330,12335],[12441,12442],[43014,43014],[43019,43019],[43045,43046],[64286,64286],[65024,65039],[65056,65059],[65279,65279],[65529,65531],[68097,68099],[68101,68102],[68108,68111],[68152,68154],[68159,68159],[119143,119145],[119155,119170],[119173,119179],[119210,119213],[119362,119364],[917505,917505],[917536,917631],[917760,917999]]},71011:function(t,r,e){"use strict";var n=e(41185),o=e(72653),i={nul:0,control:0};function f(t,r){if("string"!==typeof t)return u(t,r);for(var e=0,n=0;n<t.length;n++){var o=u(t.charCodeAt(n),r);if(o<0)return-1;e+=o}return e}function u(t,r){return 0===t?r.nul:t<32||t>=127&&t<160?r.control:function(t){var r,e=0,n=o.length-1;if(t<o[0][0]||t>o[n][1])return!1;for(;n>=e;)if(r=Math.floor((e+n)/2),t>o[r][1])e=r+1;else{if(!(t<o[r][0]))return!0;n=r-1}return!1}(t)?0:1+(t>=4352&&(t<=4447||9001==t||9002==t||t>=11904&&t<=42191&&12351!=t||t>=44032&&t<=55203||t>=63744&&t<=64255||t>=65040&&t<=65049||t>=65072&&t<=65135||t>=65280&&t<=65376||t>=65504&&t<=65510||t>=131072&&t<=196605||t>=196608&&t<=262141))}t.exports=function(t){return f(t,i)},t.exports.config=function(t){return t=n(t||{},i),function(r){return f(r,t)}}}}]);