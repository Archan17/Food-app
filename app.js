const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{},"Hello there"),React.createElement("h1",{},"Hello there")] //We can represent it with an array
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"Hello there"),React.createElement("h1",{},"Hello there")] //We can represent it with an array
    ),]
)


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root")); // object
root.render(parent);