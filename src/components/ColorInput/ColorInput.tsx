import { type ComponentProps, type ReactNode, useId, useState } from "react";

import clsx from "clsx";

import MingcuteCheckFill from "@/icons/MingcuteCheckFill";

import { BOARD_COLORS, type BoardColor } from "@/types/board";

import styles from "./ColorInput.module.css";

type Props = Omit<
  ComponentProps<"input">,
  "type" | "value" | "defaultValue" | "onChange"
> & {
  label: string;
  value?: BoardColor;
  defaultValue?: BoardColor;
  onChange?: (value: BoardColor) => void;
  error?: string | null;
};

export default function ColorInput({
  className,
  label,
  error,
  value: controlledValue,
  defaultValue,
  onChange,
  ...otherProps
}: Props): ReactNode {
  const id = useId();

  const [uncontrolledValue, setUncontrolledValue] = useState<BoardColor>(
    defaultValue ?? "blue",
  );

  const value = controlledValue ?? uncontrolledValue;

  const handleButtonClick = (color: BoardColor): void => {
    setUncontrolledValue(color);

    onChange?.(color);
  };

  return (
    <div
      className={clsx(
        styles["color-input"],
        error ? styles.error : "",
        className,
      )}
    >
      <label htmlFor={id}>{label}</label>

      <div className={styles.colors}>
        {BOARD_COLORS.map((color) => {
          return (
            <button
              key={color}
              className={clsx(color, color === value && styles.active)}
              type="button"
              onClick={() => handleButtonClick(color)}
            >
              {color === value && styles.active && <MingcuteCheckFill />}
            </button>
          );
        })}
      </div>

      <input id={id} type="hidden" value={value} {...otherProps} />
      <span className={styles.error}>{error || "\u00A0"}</span>
    </div>
  );
}
