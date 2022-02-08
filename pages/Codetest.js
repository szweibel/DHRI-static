import PythonREPLComponent from '../components/PythonREPLComponent';
import CodeEditorComponent from '../components/CodeEditorComponent';
import UploadtoStorage from '../components/UploadtoStorage';
import FileList from '../components/FileList';
import EditorWithTabs from '../components/EditorWithTabs';

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
                {/* <PythonREPLComponent /> */}
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
                {/* <CodeEditorComponent 
                defaultCode='print("Hello world")'
                /> */}
                <EditorWithTabs />
            </div>
            {/* <FileList /> */}
        </div>
    )

}