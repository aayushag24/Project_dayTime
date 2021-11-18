const react = require("react");
const reactDom = require("react-dom");

const date = new Date();
const hours = date.getHours();
const customstyle = {
  color: ""
};

let elements;

if (hours < 12) {
  elements = "Good Morning";
  customstyle.color = "red";
} else if (hours < 18) {
  elements = "Good Evening";
  customstyle.color = "green";
} else {
  elements = "Good Night";
  customstyle.color = "blue";
}

reactDom.render(
  <h1 style={customstyle}>{elements}</h1>,
  document.getElementById("root")
);
