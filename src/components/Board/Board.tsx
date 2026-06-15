import type { ReactNode } from "react";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";
import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import IconsButton from "../IconButton/IconsButton";

import styles from "./Board.module.css";

export default function Board(): ReactNode {
    return (
        <div className={styles.board}>
            <div className={styles.toolbar}>
                <div className={styles.title}>Board Title</div>
                <div className={styles.actions}>
                    <IconsButton>
                        <MingcuteEdit2Line />
                    </IconsButton>
                    <IconsButton>
                        <MingcuteAddLine />
                    </IconsButton>
                </div>
            </div>

            <ul className={styles.lists}>
                <li>
                    <div className={styles.list}>
                        <div className={styles.header}>
                            <div className={styles.title}>🔜 To do</div>
                            <IconsButton>
                                <MingcuteMore1Line />
                            </IconsButton>
                        </div>
                        <ul className={styles.items}>
                            <li>
                                <div className={styles.item}>Lorem ipsum dolor sit.</div>
                            </li>
                            <li>
                                <div className={styles.item}>Lorem ipsum dolor sit.</div>
                            </li>
                            <li>
                                <div className={styles.item}>Lorem ipsum dolor sit.</div>
                            </li>
                        </ul>
                    </div>
                </li>


                <li>
                    <div className={styles.list}>
                        <div className={styles.header}>
                            <div className={styles.title}>🔨 Doing</div>
                            <IconsButton>
                                <MingcuteMore1Line />
                            </IconsButton>
                        </div>
                        <ul className={styles.items}>
                            <li>
                                <div className={styles.item}>Lorem ipsum dolor sit.</div>
                            </li>
                            <li>
                                <div className={styles.item}>Lorem ipsum dolor sit.</div>
                            </li>
                            <li>
                                <div className={styles.item}>Lorem ipsum dolor sit.</div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div className={styles.list}>
                        <div className={styles.header}>
                            <div className={styles.title}>✅ Done</div>
                            <IconsButton>
                                <MingcuteMore1Line />
                            </IconsButton>
                        </div>
                        <ul className={styles.items}>
                            <li>
                                <div className={styles.item}>Lorem ipsum dolor sit.</div>
                            </li>
                            <li>
                                <div className={styles.item}>Lorem ipsum dolor sit.</div>
                            </li>
                            <li>
                                <div className={styles.item}>Lorem ipsum dolor sit.</div>
                            </li>
                        </ul>
                    </div>
                </li>

            </ul>

        </div>
    );
}
