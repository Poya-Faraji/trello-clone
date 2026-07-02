import type { ReactNode } from "react";

import { Link } from "react-router";

import styles from "./SettingsPage.module.css";

export default function SettingsPage(): ReactNode {
  return (
    <div className={styles["settings-page"]}>
      <h1>Sorry this page is still in development.</h1>
      <Link to="/">Go to home page</Link>
    </div>
  );
}
