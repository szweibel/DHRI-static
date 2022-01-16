import PythonREPLComponent from '../components/PythonREPLComponent';
import CodeEditorComponent from '../components/CodeEditorComponent';
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
                <PythonREPLComponent />
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
                <CodeEditorComponent 
                defaultCode='print("Hello world")'
                />
            </div>
        </div>
    )

}