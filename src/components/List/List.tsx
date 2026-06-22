import { type ReactNode } from "react";

import type { ListType } from "@/Types/list";

import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import IconsButton from "../IconButton/IconsButton";
import ListItem from "../ListItem/ListItem";

import styles from "./List.module.css";

type Props = {
  list: ListType;
};

export default function List({ list }: Props): ReactNode {
  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.title}>{list.title}</div>
        <IconsButton>
          <MingcuteMore1Line />
        </IconsButton>
      </div>
      <ul className={styles.items}>
        {list.items.map((item) => (
          <li key={item.id}>
            <ListItem listId={list.id} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
