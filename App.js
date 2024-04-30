const root = ReactDOM.createRoot(document.getElementById("root")); // root is created using reactDOM to render the react element below this root.

/*
// heading is react element(js object) not a h1 tag
const heading = React.createElement(
  "h1",
  { id: "heading", customAttribute: "abc" },
  "Heading"
); // h1 element created.... {} used to give attribute to the tag (e.g - id = "heading")
// "3rd argument is props(children)"
*/

// root.render(heading); // heading element being rendered under react ROOT.
// render() method taking the heading js object(react element) and converting into a h1 tag.

// creating nested elements
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    // React.createElement("h1", {}, "I am h1")
    // if we need to create siblings or multiple children of "child" element, then we can put createElement inside an array.
    [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
      React.createElement("h3", {}, "I am h3 tag"),
    ]
  )
);
root.render(parent); // convert react element to HTML element.
