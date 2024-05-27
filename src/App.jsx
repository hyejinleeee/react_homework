import React from "react";
import { useState } from "react";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={addCount}> + </button>
      <button onClick={minusCount}> - </button>
      <button onClick={resetCount}> reset </button>
    </>
  );
};

export default App;
