import Markdown, {compiler} from 'markdown-to-jsx';
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const Code = ({className, children}) => {
    // using hljs to highlight code
    const html = children.props.children;
    const childClassName = children.props.className;
    if (childClassName !== undefined) {
        const language = childClassName.replace('lang-', '');
        const highlighted = hljs.highlight(html, {language: language, ignoreIllegals: true});
        return (
            <pre className={className + ' '+ language}>
                <code className={className} dangerouslySetInnerHTML={{__html: highlighted.value}}></code>
            </pre>
        );}
    else {
        console.log('no className');
        console.log(html);
        const highlighted = hljs.highlightAuto(html).value
        return (
            <pre className={className}>
                <code className={className} dangerouslySetInnerHTML={{__html: highlighted}}></code>
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
                }
            }
        })
    );
}
