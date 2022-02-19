import Markdown, { compiler } from 'markdown-to-jsx';
import { useState, useEffect } from 'react';
import QuizComponent from './QuizComponent';
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

import 'react-medium-image-zoom/dist/styles.css'
import CodeEditorComponent from './CodeEditorComponent';
import PythonREPLComponent from './PythonREPLComponent';
import JSInterpreterComponent from './JSInterpreterComponent';
import TerminalComponent from './TerminalComponent';

const Code = ({ className, children }) => {
    const [isShown, setIsShown] = useState(false);
    // using hljs to highlight code
    const html = children.props.children;
    const childClassName = children.props.className;
    if (childClassName !== undefined) {
        const language = childClassName.replace('lang-', '');
        const highlighted = hljs.highlight(html, { language: language, ignoreIllegals: true });
        const getLang = hljs.getLanguage(highlighted.language).name
        return (
            <div className="code-block"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                {isShown && (
                    <div className='hljs'>
                        {language && <span className="language">{getLang}</span>}
                    </div>
                )}
                <pre className={className + ' ' + language}>
                    <code className={className}
                        dangerouslySetInnerHTML={{ __html: highlighted.value }}>
                    </code>
                </pre>
            </div>
        );
    }
    else {
        return (
            <pre className={className}>
                <code className={className} dangerouslySetInnerHTML={{ __html: html }}></code>
            </pre>
        );
    }
}

const Imager = ({ className, ...props }) => {
    const newProps = { ...props };
    const imageSource = newProps.src
    return (
        <div className="image-container">
            <Zoom>
                <div className='markdown-image-container' >
                    <Image
                        className='markdown-image'
                        src={imageSource}
                        alt={newProps.alt}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
            </Zoom>
        </div>
    );
}

const CodeEditor = ({ className, children }) => {
    const codeText = children.join('');
    return (
        <div>
            <CodeEditorComponent defaultCode={codeText} />
        </div>
    )
}

const PythonREPL = ({ className, children }) => {
    return (
        <div>
            <PythonREPLComponent />
        </div>
    )
}

const Terminal = ({ className, children }) => {
    return (
        <div>
            <TerminalComponent />
        </div>
    )
}

const JSInterpreter = ({ className, children }) => {
    return (
        <div>
            <JSInterpreterComponent />
        </div>
    )
}

const Quiz = ({ className, children }) => {
    return (
        <div>
            <QuizComponent children={children} />
        </div>
    )
}

export default function ConvertMarkdown(markdown) {
    return (
        compiler(markdown,
            {
                overrides: {
                    pre: {
                        component: Code,
                        props: {
                            className: 'hljs'
                        }
                    },
                    // ul: {
                    //     component: Quiz,
                    //     props: {
                    //         className: 'list-group'
                    //     }
                    // },
                    img: {
                        component: Imager,
                        props: {
                            className: 'image',
                        }
                    },
                    Quiz,
                    CodeEditor,
                    PythonREPL,
                    Terminal,
                    JSInterpreter
                }

            })

    );
}
