// import Editor from "@monaco-editor/react";
import { useRef, useEffect, useState } from "react";
import Script from "next/script";
import AceEditor from "react-ace";
import Button from '@mui/material/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

export default function CodeEditor({ defaultCode = "# Write your code here"}) {

  const originalCode = defaultCode;
  const [code, setCode] = useState(defaultCode);
  const outputRef = useRef(null);
  const errorRef = useRef(null);


  const onChange = (newValue) => {
    setCode(newValue);
  };


  function showValue() {
    // clear output and error
    outputRef.current.innerHTML = "";
    errorRef.current.innerHTML = "";
    pyodide.globals.set('print', (s) => {
      addToOutput(s);
    });
    pyodide.globals.set('input', (s) => {
      prompt(s);
    });
    pyodide.runPythonAsync(code).then(result => {
      addToOutput(result);
    }).catch((err) => {
      addToError(err);
    });
  }


  function addToOutput(s) {
    let output = outputRef.current;
    output.innerText += s + "\n";
    output.scrollTop = output.scrollHeight;
  }

  function addToError(s) {
    let error = errorRef.current;
    error.innerText += s + '\n';
    error.scrollTop = error.scrollHeight;
  }

  return (
    <div>
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js" strategy='beforeInteractive' />
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.asm.js" strategy='beforeInteractive' />
      <div className="editorContainer">
        <div className="buttonsContainer">
          <Button
            onClick={() => {
              showValue();
            }}
            variant="outlined"
            style={{
              margin: "10px",
              width: "100px",
              height: "25px",
              backgroundColor: "#32c259",
              color: "white",
              fontSize: "20px",
              borderRadius: "5px",
              border: "none",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
              outline: "none",
              padding: "15px"
            }}>
            <PlayArrowIcon style={{
              marginRight: "10px",
              fontSize: "20px"
            }} />
            Run</Button>
          <Button
            variant="text"
            onClick={() => {
              setCode(originalCode);
            }}
            style={{
              color: "#32c259",
              fontSize: "16px",
              borderRadius: "5px",
              border: "none",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
              outline: "none",
              padding: "15px",
              float: "right"
            }}>
            Revert Code
          </Button>
        </div>
        <AceEditor
          mode="python"
          theme="monokai"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          value={code}
          fontSize={22}
          width="100%"
          showPrintMargin={false}
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
      <div id='output'
        ref={outputRef}
        style={{
          margin: "10px",
          padding: "10px",
          border: "1px solid #32c259",
          borderRadius: "5px",
          backgroundColor: "#f5f5f5",
          color: "#32c259",
          fontSize: "20px",
          overflow: "auto"
        }}>
      </div>
      <div id="error"
        ref={errorRef}
        style={{
          margin: "10px",
          padding: "10px",
          border: "1px solid red",
          borderRadius: "5px",
          backgroundColor: "#f5f5f5",
          color: "red",
          fontSize: "20px",
          overflow: "auto"
        }}>
      </div>
    </div>
  )
}
