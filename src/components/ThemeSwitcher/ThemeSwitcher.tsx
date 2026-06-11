import type { Theme } from "@/App";
import { type Dispatch, type ReactNode } from "react";

type Prop = {
    theme: Theme
    setTheme: Dispatch<React.SetStateAction<Theme>>
}

export default function ThemeSwitcher({ theme, setTheme }: Prop): ReactNode {
    const handleButtonThemeSwitch = (): void => {
        setTheme(theme => theme === "light" ? "dark" : "light")
    }

    return <div>
        <p>{theme}</p>
        <button onClick={handleButtonThemeSwitch}>Switch theme</button>
    </div>
}