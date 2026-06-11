import type { Theme } from "@/App";
import type { ReactNode } from "react";

type Prop = {
    theme: Theme
    onToggleTheme: () => void
}

export default function ThemeSwitcher({ theme, onToggleTheme }: Prop): ReactNode {
    const handleButtonThemeSwitch = (): void => {
        onToggleTheme()
    }

    return <div>
        <p>{theme}</p>
        <button onClick={handleButtonThemeSwitch}>Switch theme</button>
    </div>
}