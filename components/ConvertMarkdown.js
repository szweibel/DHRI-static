import Markdown, {compiler} from 'markdown-to-jsx';
import hljs from 'highlight.js'

const Code = ({className, children}) => {
    // using hljs to highlight code
    // get class of children IF THEY EXIST
    const classNames = children ? children.props.className : '';
    // highlight
    const highlighted = hljs.highlightAuto(children.props.children).value;
    // return code block with highlighted code
    return <pre className={`${className} ${classNames}`}>
        <code className={classNames + ' hljs'} dangerouslySetInnerHTML={{__html: highlighted}} />  
    </pre>
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
