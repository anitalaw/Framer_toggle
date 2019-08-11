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
  const [opacity, cycle] = useCycle(0, 1);

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

      <Frame width={25} height={25} border="solid" onTap={() => cycle()}>
        <Frame
          width={25}
          height={25}
          backgroundColor="white"
          animate={{ opacity }}
          transition={{ duration: 0.2 }}
        >
          ╳
        </Frame>
      </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
