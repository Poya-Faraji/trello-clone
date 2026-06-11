import { useState, type ReactNode } from "react";
import Counter from "./components/Counter/Counter";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

export type Theme = "light" | "dark"

export default function App(): ReactNode {
  const [theme, setTheme] = useState<Theme>("dark")

  const handleOnThemeToggle = (): void => {
    setTheme(theme => theme === "light" ? "dark" : "light")
  }

  return (
    <div className="app">
      <ThemeSwitcher theme={theme} onToggleTheme={handleOnThemeToggle} />
      <Counter title="first counter" theme={theme} />
      <Counter title="second counter" theme={theme} />
    </div>
  )
}

