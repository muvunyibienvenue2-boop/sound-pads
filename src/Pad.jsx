import { useState } from "react";

export default function Pad({ color, on }) {
  const [classname, setClassname] = useState(on);
  const handleStateChange = () => {
    setClassname(prevName => !prevName);
  }
  return (
    <>
      <button
        style={{ backgroundColor: color }}
        className={classname ? "on" : null}
        onClick={handleStateChange}
      ></button>
    </>
  );
}
