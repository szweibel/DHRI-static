import { useEffect } from "react";
import Script from 'next/script'

export default function PythonREPL() {

    useEffect(() => {


        function sleep(s) {
            return new Promise(resolve => setTimeout(resolve, s));
        }
        async function main() {
            await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' });
            let namespace = pyodide.globals.get("dict")();
            pyodide.runPython(`
            import sys
            import js
            from pyodide import console
            import __main__
  
            class PyConsole(console._InteractiveConsole):
                def __init__(self):
                    super().__init__(
                        __main__.__dict__,
                        persistent_stream_redirection=False,
                    )

            js.pyconsole = PyConsole()
        `, namespace);
            namespace.destroy();

            let ps1 = '>>> ', ps2 = '...';

            async function lock() {
                let resolve;
                let ready = term.ready;
                term.ready = new Promise(res => resolve = res);
                await ready;
                return resolve;
            }

            async function interpreter(command) {
                let unlock = await lock();
                try {
                    term.pause();
                    // multiline should be splitted (useful when pasting)
                    for (const c of command.split('\n')) {
                        let run_complete = pyconsole.run_complete;
                        try {
                            const incomplete = pyconsole.push(c);
                            term.set_prompt(incomplete ? ps2 : ps1);
                            let r = await run_complete;
                            if (pyodide.isPyProxy(r)) {
                                r.destroy();
                            }
                        } catch (e) {
                            if (e.name !== "PythonError") {
                                term.error(e);
                                throw e;
                            }
                        }
                        run_complete.destroy();
                    }
                } finally {
                    term.resume();
                    await sleep(10);
                    unlock();
                }
            }

            let term = $('.terminal').terminal(
                interpreter,
                {
                    greetings: pyconsole.banner(),
                    prompt: ps1,
                    completionEscape: false,
                    completion: function (command, callback) {
                        callback(pyconsole.complete(command).toJs()[0]);
                    }
                }
            );
            window.term = term;
            pyconsole.stdout_callback = s => term.echo(s, { newline: false });
            pyconsole.stderr_callback = s => {
                term.error(s.trimEnd());
            }
            term.ready = Promise.resolve();
            pyodide._module.on_fatal = async (e) => {
                term.error("Pyodide has suffered a fatal error. Please report this to the Pyodide maintainers.");
                term.error("The cause of the fatal error was:");
                term.error(e);
                term.error("Look in the browser console for more details.");
                await term.ready;
                term.pause();
                await sleep(15);
                term.pause();
            };
        }
        window.console_ready = main();
    }, []);
    return (
        <div className="PythonREPL">
            <Script src="https://cdn.jsdelivr.net/npm/jquery" strategy='beforeInteractive'/>
            <Script src="https://cdn.jsdelivr.net/npm/jquery.terminal@2.27.1/js/jquery.terminal.min.js" strategy='beforeInteractive'/>
            <link href="https://cdn.jsdelivr.net/npm/jquery.terminal@2.27.1/css/jquery.terminal.css" rel="stylesheet"></link>

            <Script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js" strategy='beforeInteractive'/>

            <Script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.asm.js" strategy='beforeInteractive'/>
            <div className="terminal">
            </div>
        </div>
    );
}
