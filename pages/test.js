import PythonREPL from '../components/PythonREPL';
import dynamic from 'next/dynamic'

const CodeEditor = dynamic(
  () => import('../components/CodeEditor.js'),
  { ssr: false }
);
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