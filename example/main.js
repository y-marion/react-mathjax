/* @flow */
import * as React from "react";
import ReactDOM from "react-dom";
import MathJax from "../src";

const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`;

class Example extends React.Component<*, *> {
  render() {
    return (
      <MathJax.Provider
        options={{
          jax: ["input/AsciiMath", "output/HTML-CSS"],
          extensions: ["asciimath2jax.js"],
          showMathMenu: false,
          showMathMenuMSIE: false,
          AsciiMath: {
            displayStyle: true,
            useMathMLspacing: false
          }
        }}
      >
        <div>
          This is an inline math formula:{" "}
          <MathJax.Node inline formula={"a = b"} />
          And a block one:
          <MathJax.Node formula={tex} />
          And AsciiMath with type anotation:
          <MathJax.Node formula={"x + x^(2 / 3) - y"} type="asciimath" />
        </div>
      </MathJax.Provider>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("example"));
