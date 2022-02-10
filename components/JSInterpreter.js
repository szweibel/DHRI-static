export default function JSInterpreter() {
    var JSoutput = function(a) {
        var str = "["
        if (typeof(a)=="object" && a.length) {
            for (var i=0; i < a.length; i++) 
                if (typeof(a[i])=="object" && a[i].length) {
                    str += (i==0?"":" ")+"["
                    for (var j=0; j<a[i].length; j++) 
                        str += a[i][j]+(j==a[i].length-1?
                                "]"+(i==a.length-1?"]":",")+"\n":", ");
                } else str += a[i]+(i==a.length-1?"]":", ");
        } else str = a;
        return str;
    }
    
    var writeln = function(str) {
        if (!str) str="";
        var outnode = document.getElementById("JSoutput");
        outnode.value += JSoutput(str)+"\n";
    }
    
    var JSrun = function() {
        var str;
        var outnode = document.getElementById("JSoutput");
        var code = document.getElementById("JSprogram").value;
        console.log(code);
        outnode.value = "";

        try {
            var result = eval(code);
            writeln(result);
        } catch(e) {
            writeln(e);
        }
        if (str != undefined) {outnode.value += str;}
    }
    
    var keyUp = function(event){
      if (event.which==77 && event.ctrlKey) JSrun();
    }

    return (
        <div className="JSInterpreter">
            <div className="JSInterpreter-header">
                <h1>JS Interpreter</h1>
                <p>
                    This is a simple JavaScript interpreter.
                    <br/>
                    It is not meant to be a full-featured interpreter, but rather a way to learn JavaScript.
                </p>
            </div>
            <div className="JSInterpreter-content">
                <div className="JSInterpreter-sidebar">
                    <div className="JSInterpreter-sidebar-content">
                        <textarea id="JSprogram" onKeyUp={keyUp}></textarea>
                    </div>
                    <div className="JSInterpreter-sidebar-footer">
                        <button onClick={JSrun}>Run</button>
                    </div>
                </div>
                <div className="JSInterpreter-output">
                    <div className="JSInterpreter-output-header">
                        <h2>Output</h2>
                        <p>
                            <span id="JStiming">0</span> seconds
                        </p>
                    </div>
                    <div className="JSInterpreter-output-content">
                        <textarea id="JSoutput" readOnly></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}
