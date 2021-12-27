import Markdown, { compiler } from 'markdown-to-jsx';
import { useState, useEffect } from 'react';
import Quiz from './Quiz';
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import Image from 'next/image'

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
        // const highlighted = hljs.highlightAuto(html).value
        return (
            <pre className={className}>
                <code className={className} dangerouslySetInnerHTML={{ __html: html }}></code>
            </pre>
        );
    }
}

const Imager = ({ className, ...props }) => {

    // https://dev.to/felixhaeberle/responsive-fix-for-the-next-js-image-component-1351 for a fix?

    const newProps = {...props};
    const imageSource = newProps.src
    return (
        <div className='markdown-image-container' >
        <Image
        className='markdown-image' 
        src={imageSource}
        alt={newProps.alt}
        layout="fill"
        />
        </div>
        // <img className={className} src={imageSource} alt={newProps.alt} />
    );
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
                img: {
                    component: Imager,
                    props: {
                        className: 'image',
                    }
                }
            }
        })
    );
}
