import { type ReactNode } from "react";
import Counter from "./components/Counter/Counter";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

export default function App(): ReactNode {
  return (
    <div className="app">
      <ThemeSwitcher />
      <Counter title="first counter" />
      <Counter title="second counter" />
    </div>
  )
}

