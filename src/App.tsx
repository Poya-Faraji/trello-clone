import { type ReactNode } from "react";
import styles from "./App.module.css"
import clsx from "clsx";

export default function App(): ReactNode {
  return (
    <div className={styles.app}>
      <header>Header</header>
      <main>
        <div className={styles.header}>
          <h1 className={styles.title}>Boards</h1>
          <button>Create</button>
        </div>

        <ul className={styles.boards}>
          <li>
            <div className={clsx(styles.board, "blue")}>
              <div className={styles.cover}></div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <div className={styles.title}>Board 1</div>
                  <a href="/board">View</a>
                </div>
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, officiis.
              </p>
            </div>
          </li>

          <li>
            <div className={clsx(styles.board, "yellow")}>
              <div className={styles.cover}></div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <div className={styles.title}>Board 1</div>
                  <a href="/board">View</a>
                </div>
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, officiis.
              </p>
            </div>
          </li>


          <li>
            <div className={clsx(styles.board, "green")}>
              <div className={styles.cover}></div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <div className={styles.title}>Board 1</div>
                  <a href="/board">View</a>
                </div>
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, officiis.
              </p>
            </div>
          </li>
        </ul>
      </main>

      <footer>footer</footer>
    </div>
  );
}
