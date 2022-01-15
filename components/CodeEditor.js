import Editor from "@monaco-editor/react";
import { useRef, useEffect } from "react";
import Script from "next/script";


export default function CodeEditor() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

function addToOutput(s) {
  console.log('s', s);
  const output = document.getElementById("output").innerHTML;
  console.log('output', output);
  // console.log('s', s);
  if(output != "") {
    console.log('why');
    document.getElementById("output").innerHTML = output + "<br>" + s;
  } else {
    console.log('here');
    console.log('s', s);
    document.getElementById("output").innerHTML = s;
  }
}



function showValue(){
  document.getElementById("output").innerHTML = '';
 pyodide.globals.set('print', (s) => {
    const output = editorRef.current.getModel().getValue();
    addToOutput(s);
  });

  const code = editorRef.current.getValue();
  pyodide.runPythonAsync(code).then(output => {
    addToOutput(output);
  }).catch((err) => {
    document.getElementById("error").innerHTML = "ERROR" + error;
  });
}

  return (
    <div>
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js" strategy='beforeInteractive' />
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.asm.js" strategy='beforeInteractive' />

      <Editor
        height="9vh"
        width="50%"
        defaultLanguage="python"
        defaultValue="# some comment"
        onMount={handleEditorDidMount}
      />
      <button onClick={showValue}>Show value</button>
      <div id='output'/>
      <div id="error"/> 
    </div>
  )
}