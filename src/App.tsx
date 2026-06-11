import { type ReactNode } from "react";
import Counter from "./components/Counter/Counter";

export default function App(): ReactNode {
  return (
    <div className="app">
      <Counter title="first counter" />
      <Counter title="second counter" />
    </div>
  )
}

