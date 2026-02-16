import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pads from "./assets/pads.json";
import Pad from "./Pad";

function App() {
  const [newArr, setNewArr] = useState(Pads);
  function toggleOnOrOff(id) {
    setNewArr((prevPad) =>
      prevPad.map((pad) => {
        if (pad.id === id) {
          return { ...pad, on: !pad.on };
        } else {
          return {
            ...pad,
          };
        }
      }),
    );
  }

  return (
    <>
      <div className="pad-container">
        {newArr.map((el, index) => (
          <Pad
            key={el.id}
            id={el.id}
            color={el.color}
            on={el.on}
            onClick={toggleOnOrOff}
          />
        ))}
      </div>
    </>
  );
}

export default App;
