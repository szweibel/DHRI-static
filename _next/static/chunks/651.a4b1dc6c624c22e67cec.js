(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{2651:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893);r(1664),r(6470);function i(){return(0,n.jsxs)("footer",{className:"container",sx:{Zindex:2e4},children:[(0,n.jsxs)("div",{className:"funderImages",children:[(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"http://www.neh.gov/",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("img",{src:"//static.dhinstitutes.org/curriculum/website/images/logos/neh.png",className:"img-fluid",alt:"NEH"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"https://gcdi.commons.gc.cuny.edu/",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("img",{src:"//static.dhinstitutes.org/curriculum/website/images/logos/gcdi.png",className:"img-fluid",alt:"GCDI"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"http://www.cuny.edu/",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("img",{src:"//static.dhinstitutes.org/curriculum/website/images/logos/cuny.png",className:"img-fluid",alt:"CUNY"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"http://www.gc.cuny.edu/",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("img",{src:"//static.dhinstitutes.org/curriculum/website/images/logos/gc.png",className:"img-fluid",alt:"GC"})})})]}),(0,n.jsx)("div",{className:"funding-text",children:(0,n.jsx)("p",{children:"The Digital Humanities Research Institute is funded through a generous grant from the National Endowment for the Humanities and with support from The Graduate Center's Provost's Office."})})]})}},6470:function(e,t,r){"use strict";var n=r(4155);function i(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function o(e,t){for(var r,n="",i=0,o=-1,s=0,l=0;l<=e.length;++l){if(l<e.length)r=e.charCodeAt(l);else{if(47===r)break;r=47}if(47===r){if(o===l-1||1===s);else if(o!==l-1&&2===s){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var a=n.lastIndexOf("/");if(a!==n.length-1){-1===a?(n="",i=0):i=(n=n.slice(0,a)).length-1-n.lastIndexOf("/"),o=l,s=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=l,s=0;continue}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,l):n=e.slice(o+1,l),i=l-o-1;o=l,s=0}else 46===r&&-1!==s?++s:s=-1}return n}var s={resolve:function(){for(var e,t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var l;s>=0?l=arguments[s]:(void 0===e&&(e=n.cwd()),l=e),i(l),0!==l.length&&(t=l+"/"+t,r=47===l.charCodeAt(0))}return t=o(t,!r),r?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(i(e),0===e.length)return".";var t=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return 0!==(e=o(e,!t)).length||t||(e="."),e.length>0&&r&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return i(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var r=arguments[t];i(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":s.normalize(e)},relative:function(e,t){if(i(e),i(t),e===t)return"";if((e=s.resolve(e))===(t=s.resolve(t)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var n=e.length,o=n-r,l=1;l<t.length&&47===t.charCodeAt(l);++l);for(var a=t.length-l,c=o<a?o:a,u=-1,h=0;h<=c;++h){if(h===c){if(a>c){if(47===t.charCodeAt(l+h))return t.slice(l+h+1);if(0===h)return t.slice(l+h)}else o>c&&(47===e.charCodeAt(r+h)?u=h:0===h&&(u=0));break}var f=e.charCodeAt(r+h);if(f!==t.charCodeAt(l+h))break;47===f&&(u=h)}var g="";for(h=r+u+1;h<=n;++h)h!==n&&47!==e.charCodeAt(h)||(0===g.length?g+="..":g+="/..");return g.length>0?g+t.slice(l+u):(l+=u,47===t.charCodeAt(l)&&++l,t.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(i(e),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,o=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!o){n=s;break}}else o=!1;return-1===n?r?"/":".":r&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');i(e);var r,n=0,o=-1,s=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var l=t.length-1,a=-1;for(r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(47===c){if(!s){n=r+1;break}}else-1===a&&(s=!1,a=r+1),l>=0&&(c===t.charCodeAt(l)?-1===--l&&(o=r):(l=-1,o=a))}return n===o?o=a:-1===o&&(o=e.length),e.slice(n,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!s){n=r+1;break}}else-1===o&&(s=!1,o=r+1);return-1===o?"":e.slice(n,o)},extname:function(e){i(e);for(var t=-1,r=0,n=-1,o=!0,s=0,l=e.length-1;l>=0;--l){var a=e.charCodeAt(l);if(47!==a)-1===n&&(o=!1,n=l+1),46===a?-1===t?t=l:1!==s&&(s=1):-1!==t&&(s=-1);else if(!o){r=l+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===r+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){i(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var r,n=e.charCodeAt(0),o=47===n;o?(t.root="/",r=1):r=0;for(var s=-1,l=0,a=-1,c=!0,u=e.length-1,h=0;u>=r;--u)if(47!==(n=e.charCodeAt(u)))-1===a&&(c=!1,a=u+1),46===n?-1===s?s=u:1!==h&&(h=1):-1!==s&&(h=-1);else if(!c){l=u+1;break}return-1===s||-1===a||0===h||1===h&&s===a-1&&s===l+1?-1!==a&&(t.base=t.name=0===l&&o?e.slice(1,a):e.slice(l,a)):(0===l&&o?(t.name=e.slice(1,s),t.base=e.slice(1,a)):(t.name=e.slice(l,s),t.base=e.slice(l,a)),t.ext=e.slice(s,a)),l>0?t.dir=e.slice(0,l-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};s.posix=s,e.exports=s},4155:function(e){var t,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l,a=[],c=!1,u=-1;function h(){c&&l&&(c=!1,l.length?a=l.concat(a):u=-1,a.length&&f())}function f(){if(!c){var e=s(h);c=!0;for(var t=a.length;t;){for(l=a,a=[];++u<t;)l&&l[u].run();u=-1,t=a.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new g(e,t)),1!==a.length||c||s(f)},g.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}}]);