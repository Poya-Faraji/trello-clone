import { useState, type ReactNode } from "react";

export default function App(): ReactNode {
  const [count, setCount] = useState(0)

  const handleButtonIcrement = (): void => {
    setCount(count => count + 1)
  }

  return (
    <div>
      <div>Counter : {count}</div>
      <button onClick={handleButtonIcrement}>Increment</button>
    </div>
  );
}