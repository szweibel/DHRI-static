// import Editor from "@monaco-editor/react";
import { useRef, useEffect, useState } from "react";

import Script from "next/script";
import dynamic from "next/dynamic";
const EditorComponent = dynamic(
  () => import("./EditorComponent"),
  { ssr: false }
);
import Button from '@mui/material/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export default function CodeEditorComponent({ defaultCode = "# Write your code here" }) {


  const originalCode = defaultCode;
  const [code, setCode] = useState(defaultCode);
  const [pyodideReady, setPyodideReady] = useState(false);
  const [pyodideLoaded, setPyodideLoaded] = useState(false);
  const [pyodideObject, setPyodideObject] = useState(null);
  const outputRef = useRef(null);
  const errorRef = useRef(null);


  const onChange = (newValue) => {
    setCode(newValue);
  };



  const runPyodide = async (code) => {
    // clear output and error
    outputRef.current.innerHTML = "";
    errorRef.current.innerHTML = "";

    try {
      // await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' })
    } catch (error) {
      console.log(error);
    }

    pyodide.globals.set('print', (s) => {
      addToOutput(s);
    });
    pyodide.globals.set('input', (s) => {
      prompt(s);
    });
    return await pyodide.runPythonAsync(code).then(result => {
      addToOutput(result);
    }).catch((err) => {
      addToError(err);
    });

  };

  function showValue() {
    runPyodide(code);
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
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js" id={'another'} />
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.asm.js" id={'test'} 
      onLoad={() => {
        async function load() {
          await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' })
          
        }
        load().then(() => {
          setPyodideReady(true);
          console.log("pyodide loaded");
        })
      }}
      />
      <div className="editorContainer">
        <div className="buttonsContainer">
          {pyodideReady && <Button
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
            Run</Button>}
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
        <EditorComponent code={code} onChange={onChange} />
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
