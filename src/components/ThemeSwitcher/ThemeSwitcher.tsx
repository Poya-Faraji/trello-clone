import type { ReactNode } from "react";

import type { Theme } from "@/App";

type Prop = {
  theme: Theme;
  onToggleTheme: () => void;
};

export default function ThemeSwitcher({
  theme,
  onToggleTheme,
}: Prop): ReactNode {
  console.log("ThemeSwitcher");

  const handleButtonThemeSwitch = (): void => {
    onToggleTheme();
  };

  return (
    <div>
      <p>{theme}</p>
      <button onClick={handleButtonThemeSwitch}>Switch theme</button>
    </div>
  );
}
