import React from "react";
import ReactDOM from "react-dom/client";
const Heading1 = React.createElement("h1", {}, "headind1 from parcel");
const Heading2 = React.createElement("h2", {}, "headind2hello");
const Heading = React.createElement("div", { id: "container" }, [
  Heading1,
  Heading2,
]);
/*{how to style the h2}*/

const h2 = "the mosr";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);
