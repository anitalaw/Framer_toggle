import React from "react";
import ReactDOM from "react-dom";
import { Frame, useCycle } from "framer";
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
  const [opacity, cycleOpacities] = useCycle(0, 3);
  const [rotate, cycleRotate] = useCycle(0, 180);

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

      {/* Checkbox */}

      <Frame
        size={35}
        border="solid"
        background="white"
        onTap={function() {
          cycleOpacities();
          cycleRotate();
        }}
      >
        <Frame
          size={25}
          backgroundColor="transparent"
          animate={{ opacity, rotate }}
          transition={{ duration: 0.3 }}
        >
          ╳
        </Frame>
      </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
