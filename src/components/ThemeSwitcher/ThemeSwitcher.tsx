import { useState, type ReactNode } from "react";

type Theme = "light" | "dark"

export default function ThemeSwitcher(): ReactNode {
    const [theme, setTheme] = useState<Theme>("light")

    const handleButtonThemeSwitch = (): void => {
        setTheme(theme => theme === "light" ? "dark" : "light")
    }

    return <div>
        <p>{theme}</p>
        <button onClick={handleButtonThemeSwitch}>Switch theme</button>
    </div>
}