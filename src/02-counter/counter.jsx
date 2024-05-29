import { useState } from "react";
import "../global.css";
import "./counter.css";

export function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }

  function reset() {
    setCount(initialValue);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div>Days since I got 8 hours of sleep:</div>
      <div data-testid="currentCount">{count}</div>
      <button onClick={increment}>Increment</button>
      <button className="danger" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
