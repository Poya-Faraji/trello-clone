import type { ReactNode } from "react";

import styles from "./ListItem.module.css"
import type { ListItemType } from "@/Types/list-item";

type Props = {
    item: ListItemType
}

export default function ListItem({ item }: Props): ReactNode {
    return (
        <div className={styles["list-item"]}>{item.title}</div>
    )
}