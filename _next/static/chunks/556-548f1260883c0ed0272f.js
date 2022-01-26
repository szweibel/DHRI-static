(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[556],{947:function(e,n,r){"use strict";r.d(n,{Z:function(){return h}});var t=r(5893),o=r(7757),i=r.n(o),s=r(2137),a=r(7294),u=r(4298),c=r(5152),d=r(2642),l=r(6652),p=r(2681),f=r(9062),y=(0,c.default)((function(){return Promise.all([r.e(281),r.e(971),r.e(746)]).then(r.bind(r,1746))}),{ssr:!1,loadableGenerated:{webpack:function(){return[1746]},modules:["../components/CodeEditorComponent.js -> ./EditorComponent"]}});function h(e){var n=e.defaultCode,r=void 0===n?"# Write your code here":n,o=r,c=(0,a.useState)(r),h=c[0],x=c[1],m=(0,a.useState)(!1),v=(m[0],m[1],(0,a.useState)(!1)),b=(v[0],v[1]),g=(0,a.useState)(null),j=(g[0],g[1],(0,a.useRef)(null)),w=(0,a.useRef)(null),_=(0,a.useContext)(p.G),P=_.hasLoadPyodideBeenCalled,k=_.isPyodideLoading,C=_.setIsPyodideLoading,S=_.isPyodideReady,R=_.setIsPyodideReady;(0,a.useEffect)((function(){S&&C(!1)}),[P,C,S]);var L=function(){var e=(0,s.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.current.innerHTML="",w.current.innerHTML="",pyodide.globals.set("print",(function(e){Z(e)})),pyodide.globals.set("input",(function(e){prompt(e)})),e.next=6,pyodide.runPythonAsync(n).then((function(e){Z(e)})).catch((function(e){E(e)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function Z(e){var n=j.current;n.innerText+=e+"\n",n.scrollTop=n.scrollHeight}function E(e){var n=w.current;n.innerText+=e+"\n",n.scrollTop=n.scrollHeight}return(0,t.jsxs)("div",{children:[(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js",id:"another"}),(0,t.jsx)(u.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.asm.js",id:"test",onLoad:function(){S||function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){R(!0),b(!0)}))}})]}),(0,t.jsxs)("div",{className:"editorContainer",children:[(0,t.jsxs)("div",{className:"buttonsContainer",children:[!k&&(0,t.jsxs)(d.Z,{onClick:function(){L(h)},variant:"outlined",style:{margin:"10px",width:"100px",height:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px"},children:[(0,t.jsx)(l.Z,{style:{marginRight:"10px",fontSize:"20px"}}),"Run"]}),k&&(0,t.jsx)(f.Z,{style:{marginLeft:"10px",marginTop:"10px"}}),(0,t.jsx)(d.Z,{variant:"text",onClick:function(){x(o)},style:{color:"#32c259",fontSize:"16px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px",float:"right"},children:"Revert Code"})]}),(0,t.jsx)(y,{code:h,onChange:function(e){x(e)}})]}),(0,t.jsx)("div",{id:"output",ref:j,style:{margin:"10px",padding:"10px",border:"1px solid #32c259",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"#32c259",fontSize:"20px",overflow:"auto"}}),(0,t.jsx)("div",{id:"error",ref:w,style:{margin:"10px",padding:"10px",border:"1px solid red",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"red",fontSize:"20px",overflow:"auto"}})]})}},1365:function(e,n,r){"use strict";r.d(n,{Z:function(){return y}});var t=r(5893),o=r(7757),i=r.n(o),s=r(2137),a=r(7294),u=r(4298),c=r(2681),d=r(9062),l=r(9755);function p(e,n){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"===typeof e)return f(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,n)}(e))||n&&e&&"number"===typeof e.length){r&&(e=r);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw i}}}}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function y(){var e=(0,a.useContext)(c.G),n=e.hasLoadPyodideBeenCalled,r=e.isPyodideLoading,o=e.setIsPyodideLoading,f=e.isPyodideReady,y=e.setIsPyodideReady;function h(e){return new Promise((function(n){return setTimeout(n,e)}))}function x(){return(x=(0,s.Z)(i().mark((function e(){var n,r,t,o,a,u,c,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=function(){return(c=(0,s.Z)(i().mark((function e(n){var s,a,u,c,l,f,y;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:s=e.sent,e.prev=3,d.pause(),pyodide.globals.set("print",(function(e){d.echo(e,{newline:!0})})),a=p(n.split("\n")),e.prev=7,a.s();case 9:if((u=a.n()).done){e.next=29;break}return c=u.value,l=pyconsole.run_complete,e.prev=12,f=pyconsole.push(c),d.set_prompt(f?t:r),e.next=17,l;case 17:y=e.sent,pyodide.isPyProxy(y)&&y.destroy(),e.next=26;break;case 21:if(e.prev=21,e.t0=e.catch(12),"PythonError"===e.t0.name){e.next=26;break}throw d.error(e.t0),e.t0;case 26:l.destroy();case 27:e.next=9;break;case 29:e.next=34;break;case 31:e.prev=31,e.t1=e.catch(7),a.e(e.t1);case 34:return e.prev=34,a.f(),e.finish(34);case 37:return e.prev=37,d.resume(),e.next=41,h(10);case 41:return s(),e.finish(37);case 43:case"end":return e.stop()}}),e,null,[[3,,37,43],[7,31,34,37],[12,21]])})))).apply(this,arguments)},u=function(e){return c.apply(this,arguments)},a=function(){return(a=(0,s.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d.ready,d.ready=new Promise((function(e){return n=e})),e.next=4,r;case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},o=function(){return a.apply(this,arguments)},n=pyodide.globals.get("dict")(),pyodide.runPython("\n            import sys\n            import js\n            from pyodide import console\n            import __main__\n  \n            class PyConsole(console._InteractiveConsole):\n                def __init__(self):\n                    super().__init__(\n                        __main__.__dict__,\n                        persistent_stream_redirection=False,\n                    )\n\n            js.pyconsole = PyConsole()\n        ",n),n.destroy(),r=">>> ",t="...",d=l(".terminal").terminal(u,{greetings:pyconsole.banner(),prompt:r,completionEscape:!1,completion:function(e,n){n(pyconsole.complete(e).toJs()[0])}}),window.term=d,pyconsole.stdout_callback=function(e){return d.echo(e,{newline:!1})},pyconsole.stderr_callback=function(e){d.error(e.trimEnd())},d.ready=Promise.resolve(),pyodide._module.on_fatal=function(){var e=(0,s.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.error("Pyodide has suffered a fatal error. Please report this to the Pyodide maintainers."),d.error("The cause of the fatal error was:"),d.error(n),d.error("Look in the browser console for more details."),e.next=6,d.ready;case 6:return d.pause(),e.next=9,h(15);case 9:d.pause();case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.useEffect)((function(){window.jQuery=l,f&&(o(!1),function(){x.apply(this,arguments)}())}),[n,o,f]),(0,t.jsxs)("div",{className:"PythonREPL",children:[(0,t.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/jquery.terminal@2.27.1/css/jquery.terminal.css",rel:"stylesheet"}),(0,t.jsx)(u.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js"}),(0,t.jsx)(u.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.asm.js",onLoad:function(){f||function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){y(!0)}))}}),(0,t.jsx)("div",{className:"terminal",children:r&&(0,t.jsx)(d.Z,{})})]})}r(9288)}}]);