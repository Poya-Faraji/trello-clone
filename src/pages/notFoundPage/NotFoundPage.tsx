import type { ReactNode } from "react";

import styles from "./NotFoundPage.module.css"
import { Link } from "react-router";

export default function NotFoundPage(): ReactNode {
    return (
        <div className={styles["not-found-page"]}>
            <h1>404 | Page not found.</h1>
            <Link to="/">Go to home page</Link>
        </div>
    )
}