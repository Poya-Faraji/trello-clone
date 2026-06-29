import type { ReactNode } from "react";

import IconsButton from "@/components/IconButton/IconsButton";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import styles from "./BoardToolbar.module.css";

export default function BoardToolbar(): ReactNode {
  return (
    <div className={styles["board-toolbar"]}>
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
  );
}
