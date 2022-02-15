import { useRef, useEffect, useState, useContext } from "react";
import Script from 'next/script';
import ReactHtmlParser from "react-html-parser";
import dynamic from "next/dynamic";
const EditorComponent = dynamic(
    () => import("./EditorComponent"),
    { ssr: false }
);
const Frame = dynamic(
    () => import('react-frame-component'),
    { ssr: false }
);
import { FrameContextConsumer } from "react-frame-component";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

export default function HTMLEditor({ defaultCode = "<!-- Write your HTML here -->" }) {
    const [code, setCode] = useState(defaultCode);
    const [css, setCss] = useState('/* Write CSS Here */');
    const [javascript, setJavascript] = useState('');
    const [output, setOutput] = useState([]);
    const [frameKey, setFrameKey] = useState(Math.random());
    const [frameReady, setFrameReady] = useState(false);
    const [frameDoc, setFrameDoc] = useState(null);
    const [frameWindow, setFrameWindow] = useState(null);
    const [consoleOutput, setConsoleOutput] = useState([]);

    const doParsing = (code) => {
        const result = ReactHtmlParser(code);
        setOutput(result);
    };


    const onChange = (newValue) => {
        setCode(newValue);
        doParsing(newValue);
    };


    const outputComponent = (output) => {
        return (
            <div>
                {output.map((item, index) => {
                    if (typeof item === 'string') {
                        return
                    }
                    return (
                        item
                    )
                })}
            </div>
        )
    }


    const onChangeCss = (newValue) => {
        setCss(newValue);
    };

    const frameEval = (allCode) => {
        if (frameWindow) {
            frameWindow.eval(allCode);
        }
    }

    const onChangeJavascript = (newValue) => {
        setJavascript(newValue);
        frameEval(newValue);

        // if (doc.getElementById('script')) {
        //     // remove it
        //     doc.getElementById('script').remove();
        // }
        // var script = doc.createElement("script");
        // // add the script tag to the document head
        // doc.head.appendChild(script);
        // script.id = 'script';
        // // set the script contents
        // script.innerHTML = newValue;
    };

    const iFrameStyle = <style>
        {css}
    </style>;

    const frameHead = [iFrameStyle];

    const frameBody = () => {
        return (
            <div
                style={{
                    width: "50%",
                    height: "100%",
                }}>
                <Frame
                    key={frameKey}
                    head={frameHead}
                    initialContent='<!DOCTYPE html><html><head></head><body><div id="mountHere"></div></body></html>'
                    mountTarget='#mountHere'
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "white",
                    }}
                >
                    <FrameContextConsumer>
                        {
                            // Callback is invoked with iframe's window and document instances
                            ({ document, window }) => {
                                setFrameReady(true);
                                setFrameDoc(document);
                                window.console = {
                                    log: (...args) => {
                                        setConsoleOutput(args);
                                        console.log('args', args);
                                    }
                                };
                                setFrameWindow(window);
                                return (
                                    <>
                                        {outputComponent(output)}
                                    </>
                                )
                            }
                        }
                    </FrameContextConsumer>
                </Frame>
            </div>
        )
    }

    const frameConsole = () => {
        const info = consoleOutput;
        return (
            <div
                style={{
                    width: "50%",
                    height: "100%",
                }}
                dangerouslySetInnerHTML={{ __html: info }}
            >
            </div>
        )
    }

    const HtmlTab = () => {
        return (
            <EditorComponent code={code} onChange={onChange} language={'html'} />)
    }
    const CssTab = () => {
        return (<EditorComponent code={css} onChange={onChangeCss} language={'css'} />)
    }
    const JavascriptTab = () => {
        return (<EditorComponent code={javascript} onChange={onChangeJavascript} language={'javascript'} debounce={1000} />)
    }

    const [tab, setTab] = useState(0);
    const handleChange = (event, newValue) => {
        setTab(newValue);
    };


    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                aria-labelledby={`html-editor-${index}`}
            >
                 {value === index && (
                    <div
                        style={{
                            height: '500px',
                        }}
                    >
                        {children}
                    </div>
                )} 
            </div>
        );
    }


    const tabStructure = () =>{
        return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
            }}
        >
            <div
                style={{ width: '100%', }}>
                <div style={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tab} onChange={handleChange}>
                        <Tab label="HTML" />
                        <Tab label="CSS" />
                        <Tab label="JavaScript" />
                    </Tabs>
                </div>
                <TabPanel value={tab} index={0}>
                    {HtmlTab()}
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    {CssTab()}
                </TabPanel>
                <TabPanel value={tab} index={2}>
                    {JavascriptTab()}
                </TabPanel>
            </div>
            <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <div
                style={{
                    width: '100%',}}
                >
                    frame
                    {frameBody()}
                </div>
                <div style={{
                    width: '100%',
                    height: '100px',
                    background: 'white',
                    }}>
                        console
                    {frameConsole()}
                </div>
            </div>
        </div>
        )
    }

    return (
        <div>
            {tabStructure()}
        </div>
    )
}

//     return (
//         <div>
//             <div>
//                 <div
//                     style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         height: '50vh'
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "50%",
//                             height: "100%",
//                         }}
//                     >
//                         <EditorComponent code={code} onChange={onChange} language={'html'} />
//                     </div>
//                     {frameBody()}
//                 </div>
//                 <div
//                     style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         height: '50vh'
//                     }}>
//                     <EditorComponent code={css} onChange={onChangeCss} language={'css'} />
//                 </div>
//                 <div
//                     style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         height: '50vh'
//                     }}>
//                     <EditorComponent code={javascript} onChange={onChangeJavascript} language={'javascript'} debounce={1000} />
//                 </div>
//                 {frameConsole()}
//             </div>
//         </div>
//     );
// }

