import PythonREPL from '../components/PythonREPL';


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
                {/* <PythonREPL /> */}
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
                defaultCode='print("Hello mmmm")'
                />
            </div>
        </div>
    )

}