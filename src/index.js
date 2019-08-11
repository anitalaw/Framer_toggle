import React from "react";
import ReactDOM from "react-dom";
import { Frame, Color } from "framer";
import "./styles.css";

// Parameter
function microwave(food) {
  // function body
  // return value
  return "heated " + food;
}

// defining a function
function sandwichMaker(meat) {
  let sandwich = "🍞";
  sandwich = sandwich + meat;
  sandwich = sandwich + "🍀";
  sandwich = sandwich + "🍞";
  return sandwich;
}

function App() {
  return (
    <div className="App">
      <Frame
        width={120}
        height={60}
        borderRadius={30}
        background={"#0099FF"}
        center
      >
        <Frame
          size={60}
          borderRadius={30}
          backgroundColor="#0099AF"
          shadow="10px 5px 5px blue"
          opacity={0.7}
        />
      </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
