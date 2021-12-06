import Markdown, {compiler} from 'markdown-to-jsx';
import hljs from 'highlight.js'
import 'highlight.js/styles/sunburst.css'

const Code = ({className, children}) => {
    // using hljs to highlight code
    // use hljs.highlightElement 
    const html = children.props.children;
    const highlighted = hljs.highlightAuto(html).value;
    return (
        <pre className={className}>
            <code className={className} dangerouslySetInnerHTML={{__html: highlighted}}></code>
        </pre>
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
                }
            }
        })
    );
}
