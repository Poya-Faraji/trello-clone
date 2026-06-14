import type { ReactNode } from "react";

import styles from "./Header.module.css"
import { Link } from "react-router";

export default function Header(): ReactNode {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img src="./logo.svg" alt="Canban Logo" />
            </Link>
        </header>
    )
}