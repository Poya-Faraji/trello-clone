import type { ReactNode } from "react";

import styles from "./ErrorPage.module.css";

export default function ErrorPage(): ReactNode {
  return (
    <div className={styles["error-page"]}>
      <h1>504 | Error while loading the page.</h1>
      <a href="/">Go to home page</a>
    </div>
  );
}
