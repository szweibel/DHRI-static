import PythonREPL from '../components/PythonREPL';
import CodeEditor from '../components/CodeEditor.js';
// import Editor from "@monaco-editor/react";
export default function Test() {

    return (
        <div>
            <div>
                <PythonREPL />
            </div>
            <div>
                <CodeEditor/>
            </div>
        </div>
    )

}