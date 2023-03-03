import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => <h1>namste react</h1>;
const Hello = () => (
  <>
    {<Title />}
    <h1>Hello World</h1>
    <h2>hello</h2>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);
