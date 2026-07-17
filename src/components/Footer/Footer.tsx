import { type ReactNode } from "react";

import styles from "./Footer.module.css";

export default function Footer(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      Copyright &copy; {year} <a href="https://github.com/Poya-Faraji">pouya-faraji</a>
    </footer>
  );
}
