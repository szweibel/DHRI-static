import Markdown, { compiler } from 'markdown-to-jsx';
import { useState, useEffect } from 'react';
import Quiz from './Quiz';
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const Code = ({ className, children }) => {
    // using hljs to highlight code
    const html = children.props.children;
    const childClassName = children.props.className;
    if (childClassName !== undefined) {
        const language = childClassName.replace('lang-', '');
        const highlighted = hljs.highlight(html, { language: language, ignoreIllegals: true });
        const getLang = hljs.getLanguage(highlighted.language).name
        const [isShown, setIsShown] = useState(false);
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

        // const highlighted = hljs.highlightAuto(html).value
        return (
            <pre className={className}>
                <code className={className} dangerouslySetInnerHTML={{ __html: html }}></code>
            </pre>
        );
    }
}

export default function ConvertMarkdown(markdown) {
    return (
        compiler(markdown, {
            overrides: {
                pre: {
                    component: Code,
                    props: {
                        className: 'hljs'
                    }
                },
                ul: {
                    component: Quiz,
                    props: {
                        className: 'list-group'
                    }
                },
            }
        })
    );
}
