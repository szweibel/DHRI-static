// import Editor from "@monaco-editor/react";
import { useRef, useEffect, useState, useContext, useReducer } from "react";
import AddIcon from '@mui/icons-material/Add';
import Script from "next/script";
import dynamic from "next/dynamic";
const EditorComponent = dynamic(
  () => import("./EditorComponent"),
  { ssr: false }
);
import Button from '@mui/material/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { PyodideContext } from './PyodideProvider';
import CircularProgress from '@mui/material/CircularProgress';

export default function CodeEditorComponent({ defaultCode = "# Write your code here" }) {
  const [code, setCode] = useState(defaultCode);
  const [pyodideReady, setPyodideReady] = useState(false);
  const [pyodideLoaded, setPyodideLoaded] = useState(false);
  const [pyodideObject, setPyodideObject] = useState(null);
  const [isoutput, setIsoutput] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const outputRef = useRef(null);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


  const {
    hasLoadPyodideBeenCalled,
    isPyodideLoading,
    setIsPyodideLoading,
    isPyodideReady,
    setIsPyodideReady,
  } = useContext(PyodideContext)

  useEffect(() => {
    if (isPyodideReady) {
      setIsPyodideLoading(false)
    }
  }, [hasLoadPyodideBeenCalled, setIsPyodideLoading, isPyodideReady])

  /*useEffect(() => {
    nltoolkit = await fetch('https://raw.githubusercontent.com/nltk/nltk_data/gh-pages/packages/tokenizers/punkt.zip')
      .then(nltoolkit =>
        if nltoolkit.)

  }, [])
  */
  const onChange = (newValue) => {
    setCode(newValue);
  };

  const runPyodide = async (code) => {
    setIsoutput(false);
    setIsError(false);
    setError(null);
    outputRef.current = "";
    pyodide.globals.set('print', (s) => {
      console.log(String(s));
      outputRef.current = outputRef.current + String(s) + "\n";
    });
    pyodide.globals.set('input', (s) => {
      prompt(s);
    });
    await pyodide.loadPackage("nltk");
    await pyodide.loadPackagesFromImports(code);
    return await pyodide.runPythonAsync(code).then(result => {
      setIsoutput(true);
      outputRef.current = outputRef.current + '\n' + result;
      forceUpdate();
    }).catch((err) => {
      setIsError(true);
      setError(err);
    });
    
  };

  function showValue() {
    runPyodide(code);
  }



  return (
    <div>
      {<><Script src="https://cdn.jsdelivr.net/pyodide/v0.19.0/full/pyodide.js"  />
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.19.0/full/pyodide.asm.js" 
      onLoad={() => {
        if (!isPyodideReady) {
        async function load() {
          globalThis.pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.19.0/full/' })
        }
        load().then(() => {
          setIsPyodideReady(true)
          setPyodideLoaded(true);
        })
      } 
      }}
      /></>}
      <div className="editorContainer">
        <div className="buttonsContainer">
          {!isPyodideLoading && <Button
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
          {isPyodideLoading && <CircularProgress
          style={{
            marginLeft: "10px",
            marginTop: "10px"
          }}
          />}
          <Button
            variant="text"
            onClick={() => {
              setCode(defaultCode);
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
        <EditorComponent code={code} onChange={onChange} maxLines='Infinity' />
      </div>
     
        { isoutput && <div id='output'
        // ref={outputRef}
        style={{
          margin: "10px",
          padding: "10px",
          border: "1px solid #32c259",
          borderRadius: "5px",
          backgroundColor: "#f5f5f5",
          color: "#32c259",
          fontSize: "20px",
          overflow: "auto",
          font: "1.3rem Inconsolata, monospace",
          whiteSpace: "pre-wrap",
        }}>
          {outputRef.current}
      </div>}

      {isError && <div id="error"
        style={{
          font: "1.3rem Inconsolata, monospace",
          margin: "10px",
          padding: "10px",
          border: "1px solid red",
          borderRadius: "5px",
          backgroundColor: "#f5f5f5",
          color: "red",
          fontSize: "20px",
          overflow: "auto",
          whiteSpace: "pre-wrap"
        }}>
        {String(error)}
      </div>}
    </div>
  )
}
