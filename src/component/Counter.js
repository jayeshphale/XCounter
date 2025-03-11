import React, { useState, useEffect } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div className="button-group">
        <button className="btn increment" onClick={() => setCount(count + 1)}>➕ Increment</button>
        <button className="btn decrement" onClick={() => setCount(count - 1)}>➖ Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
