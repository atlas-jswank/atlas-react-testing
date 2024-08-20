import React from "react";
import "../global.css";

type CounterProps = {
  initialValue?: number;
};

export function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = React.useState(initialValue);

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
      <button className="btn bg-[#00003c]" onClick={increment}>
        Increment
      </button>
      <button className="btn bg-[#d00414]" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
