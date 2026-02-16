import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pads from "./assets/pads.json";
import Pad from "./Pad";

function App() {
  const [newArr, setNewArr] = useState(Pads);
  return (
    <>
      <div className="pad-container">
        {newArr.map((el, index) => (
          <Pad key={el.id} color={el.color} on={el.on}/>
        ))}
      </div>
    </>
  );
}

export default App;
