import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("app is rendered")

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Click me!</button>
    </div>
  );
}
