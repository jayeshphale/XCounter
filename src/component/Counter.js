import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn increment" onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button className="btn decrement" onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
