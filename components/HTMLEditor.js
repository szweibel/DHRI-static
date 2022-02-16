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
import { Resizable } from "re-resizable";
import { FrameContextConsumer } from "react-frame-component";
import "allotment/dist/style.css";


export default function HTMLEditor({ defaultCode = "<!-- Write your HTML here -->", defaultCSS="/* Write CSS Here */", 
defaultJS='// Write Javascript Here' }) {
    const [code, setCode] = useState(defaultCode);
    const [css, setCss] = useState(defaultCSS);
    const [javascript, setJavascript] = useState(defaultJS);
    const [output, setOutput] = useState([]);
    const [frameKey, setFrameKey] = useState(Math.random());
    const [frameReady, setFrameReady] = useState(false);
    const [frameDoc, setFrameDoc] = useState(null);
    const [frameWindow, setFrameWindow] = useState(null);
    const [consoleOutput, setConsoleOutput] = useState([]);

    // all this below can be wrapped into useAllotment hook or smth like that
    const isMountedRef = useRef(false);
    const [Allotment, setAllotment] = useState(null);
    useEffect(() => {
        isMountedRef.current = true;
        import("allotment")
            .then((mod) => {
                if (!isMountedRef.current) {
                    return;
                }
                setAllotment(mod.Allotment);
            })
            .catch((err) =>
                console.error(err, `could not import allotment ${err.message}`)
            );
        return () => {
            isMountedRef.current = false;
        };
    }, []);
    if (!Allotment) {
        return <div>loading...</div>;
    }
    // end of hook

    const doParsing = (code) => {
        const result = ReactHtmlParser(code);
        setOutput(result);
    };

    const onChangeHTML = (newValue) => {
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
    };

    const iFrameStyle = <style>
        {css}
    </style>;

    const frameHead = [iFrameStyle];

    const FramePane = () => {
        return (
            <div
                style={{
                    width: "100%",
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

    const ConsolePane = () => {
        const info = consoleOutput;
        return (
            <>
                <p>Console</p>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "lightgray",
                    }}
                    dangerouslySetInnerHTML={{ __html: info }}
                >
                </div>
            </>
        )
    }

    const HtmlPane = () => {
        return (
            <EditorComponent code={code} onChange={onChangeHTML} language={'html'} />)
    }
    const CssPane = () => {
        return (<EditorComponent code={css} onChange={onChangeCss} language={'css'} />)
    }
    const JavascriptPane = () => {
        return (<EditorComponent code={javascript} onChange={onChangeJavascript} language={'javascript'} debounce={1000} />)
    }

    const panes = [HtmlPane, CssPane, JavascriptPane, FramePane, ConsolePane];



    //     return (
    //         <div>
    //         <Resizable
    //             defaultSize={{
    //                 width: "50%",
    //                 height: "100%",
    //             }}
    //             minWidth={200}
    //             maxWidth={600}
    //             minHeight={200}
    //             maxHeight={600}
    //         >
    //             {HtmlPane()}
    //         </Resizable>
    //         <Resizable
    //             defaultSize={{
    //                 width: "50%",
    //                 height: "100%",
    //             }}
    //             minWidth={200}
    //             maxWidth={600}
    //             minHeight={200}
    //             maxHeight={600}
    //             >
    //             {CssPane()}
    //             </Resizable>
    //             </div>
    //     )
    // }

    return (
        <div style={{ height: '80vh', width: '50vw' }}>
            <Allotment minSize={90} vertical >
                <Allotment.Pane minSize={100}>
                    <Allotment>
                        <Allotment.Pane minSize={40}>
                            {HtmlPane()}
                        </Allotment.Pane>
                        <Allotment.Pane>
                            {CssPane()}
                        </Allotment.Pane>
                    </Allotment>
                </Allotment.Pane>
                <Allotment.Pane>
                    <Allotment>
                        <Allotment.Pane minSize={20}>
                            {JavascriptPane()}
                        </Allotment.Pane>
                        <Allotment vertical>
                            <Allotment.Pane>
                                {FramePane()}
                            </Allotment.Pane>
                            <Allotment.Pane>
                                {ConsolePane()}
                            </Allotment.Pane>
                        </Allotment>
                    </Allotment>
                </Allotment.Pane>
            </Allotment>
        </div>
    );
};



