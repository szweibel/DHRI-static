import Markdown, {compiler} from 'markdown-to-jsx';
import hljs from 'highlight.js'

const Code = ({className, children}) => {
    // using hljs to highlight code
    const highlightedCode = hljs.highlightAuto(children).value;
    const language = hljs.getLanguage(className);
    return (
        <pre className={className}>
            <code className={className} dangerouslySetInnerHTML={{__html: highlightedCode}} />
        </pre>
    );
}

export default function ConvertMarkdown(markdown) {
    return (
        compiler(markdown, {
            overrides: {
                'code': {
                    component: Code,
                    props: {
                        className: 'hljs'

                    }
                }
            }
        })
    );
}
