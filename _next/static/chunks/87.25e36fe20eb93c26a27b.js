(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87],{8087:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return a}});var t=o(5893),r=o(7294),i=o(4298),d=o(4981),s=o(2642),l=o(6652);o(4007),o(2270);function a(e){var n=e.defaultCode,o=void 0===n?"# Write your code here":n,a=o,c=(0,r.useState)(o),p=c[0],u=c[1],x=(0,r.useRef)(null),f=(0,r.useRef)(null);function h(){x.current.innerHTML="",f.current.innerHTML="",pyodide.globals.set("print",(function(e){b(e)})),pyodide.globals.set("input",(function(e){prompt(e)})),pyodide.runPythonAsync(p).then((function(e){b(e)})).catch((function(e){!function(e){var n=f.current;n.innerText+=e+"\n",n.scrollTop=n.scrollHeight}(e)}))}function b(e){var n=x.current;n.innerText+=e+"\n",n.scrollTop=n.scrollHeight}return(0,t.jsxs)("div",{children:[(0,t.jsx)(i.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js",strategy:"beforeInteractive"}),(0,t.jsx)(i.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.asm.js",strategy:"beforeInteractive"}),(0,t.jsxs)("div",{className:"editorContainer",children:[(0,t.jsxs)("div",{className:"buttonsContainer",children:[(0,t.jsxs)(s.Z,{onClick:function(){h()},variant:"outlined",style:{margin:"10px",width:"100px",height:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px"},children:[(0,t.jsx)(l.Z,{style:{marginRight:"10px",fontSize:"20px"}}),"Run"]}),(0,t.jsx)(s.Z,{variant:"text",onClick:function(){u(a)},style:{color:"#32c259",fontSize:"16px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px",float:"right"},children:"Revert Code"})]}),(0,t.jsx)(d.ZP,{mode:"python",theme:"monokai",onChange:function(e){u(e)},name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0},value:p,fontSize:22,width:"100%",showPrintMargin:!1,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2}})]}),(0,t.jsx)("div",{id:"output",ref:x,style:{margin:"10px",padding:"10px",border:"1px solid #32c259",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"#32c259",fontSize:"20px",overflow:"auto"}}),(0,t.jsx)("div",{id:"error",ref:f,style:{margin:"10px",padding:"10px",border:"1px solid red",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"red",fontSize:"20px",overflow:"auto"}})]})}}}]);