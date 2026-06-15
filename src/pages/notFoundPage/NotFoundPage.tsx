import type { ReactNode } from "react";

import { Link } from "react-router";

import styles from "./NotFoundPage.module.css";

export default function NotFoundPage(): ReactNode {
  return (
    <div className={styles["not-found-page"]}>
      <h1>404 | Page not found.</h1>
      <Link to="/">Go to home page</Link>
    </div>
  );
}
