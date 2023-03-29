import React from "react";
function GlobalStyles() {
  return (
    <style global jsx>{`
      body {
        font-family: sans-serif;
        text-align: center;
        background: #EEE;
        margin: 2em auto;
        padding-top: 200px;
      }
      h1 {
        color: green;
      }
      
    `}</style>
  );
}
export default GlobalStyles;
