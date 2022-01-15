import PythonREPL from '../components/PythonREPL';
import CodeEditor from '../components/CodeEditor.js';
export default function Test() {

    return (
        <div>
            <div
             dangerouslySetInnerHTML={
                {
                    __html: `
                    <h1>REPL</h1>
                    `
            }
        }
            />
            <div>
                <PythonREPL />
            </div>
            <div
            dangerouslySetInnerHTML={
                {
                    __html: `
                    <h1>Code Editor</h1>
                    `

            }
        }
            >

               
            </div>
            <div>
                <CodeEditor />
            </div>
        </div>
    )

}