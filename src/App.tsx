import { useState, type ReactNode } from "react";
import Counter from "./components/Counter/Counter";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

export type Theme = "light" | "dark"

export default function App(): ReactNode {
  const [theme, setTheme] = useState<Theme>("light")

  return (
    <div className="app">
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <Counter title="first counter" />
      <Counter title="second counter" />
    </div>
  )
}

