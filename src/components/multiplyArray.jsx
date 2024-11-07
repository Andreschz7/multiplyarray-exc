import { useState } from "react";
import "./multiplyArray.css";

export default function MultiplyArray() {
  const [arrayValue, setArrayValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [multipliedValue, setMultipliedValue] = useState("");

  function multiply(array, number) {
    const regex = /^\[(\d+,)*\d+\]$/;
    if (regex.test(array)) {
      setMultipliedValue(JSON.parse(array).map((item) => item * number));
    }
  }

  const updateArrayValue = (e) => {
    setArrayValue(e.target.value);
  };

  const updateNumberValue = (e) => {
    setNumberValue(e.target.value);
  };

  return (
    <>
      <p>Multiplay all array items for a number</p>
      <label>
        Array:
        <input type="text" value={arrayValue} onChange={updateArrayValue} />
      </label>
      <label>
        Number:
        <input type="text" value={numberValue} onChange={updateNumberValue} />
      </label>
      <button onClick={() => multiply(arrayValue, numberValue)}>
        Multiply
      </button>
      {multipliedValue && <p>{JSON.stringify(multipliedValue)}</p>}
    </>
  );
}
