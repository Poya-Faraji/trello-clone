import {
  type ChangeEvent,
  type ComponentProps,
  type ReactNode,
  useId,
  useState,
} from "react";

import clsx from "clsx";

import styles from "./TextInput.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  error?: string | null;
};

export default function TextInput({
  className,
  label,
  error,
  ...otherProps
}: Props): ReactNode {
  const id = useId();

  const [inputValue, setInputValue] = useState<string | number>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const int = parseInt(e.target.value.replaceAll(",", ""));
    if (isNaN(int)) {
      return;
    }

    setInputValue(int.toLocaleString());
  };
  return (
    <div
      className={clsx(
        styles["text-input"],
        error ? styles.error : "",
        className,
      )}
    >
      <label htmlFor={id}>{label}</label>
      <input
        value={inputValue}
        id={id}
        {...otherProps}
        onChange={handleInputChange}
      />
      <span className={styles.error}>{error || "\u00A0"}</span>
    </div>
  );
}
