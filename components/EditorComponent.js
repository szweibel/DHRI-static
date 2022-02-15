import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"

export default function CodeEditorComponent({code, onChange, maxLines=null, language="python", debounce=null, height='100%', width='100%'}) {
  const uniqueid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  const resize = () => {
    const editor = document.getElementById(uniqueid);
    if (editor) {
      editor.style.height = `${editor.scrollHeight}px`;
      editor.style.width = `${editor.scrollWidth}px`;
    }
  }

    return (
    <AceEditor
    className="editor"
          mode={language}
          theme="monokai"
          onChange={onChange}
          name={uniqueid}
          editorProps={{ $blockScrolling: true }}
          value={code}
          fontSize={22}
          width="100%"
          height="100%"
          maxLines={maxLines}
          showPrintMargin={false}
          showGutter={true}
          highlightActiveLine={true}
          debounceChangePeriod={debounce}
          
          setOptions={{
            behavioursEnabled: true,
wrapBehavioursEnabled: true,
autoScrollEditorIntoView: true,
wrap: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
    )
}
