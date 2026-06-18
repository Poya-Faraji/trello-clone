import { memo, type ReactNode } from "react";

import type { ListType } from "@/Types/list";

import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import IconsButton from "../IconButton/IconsButton";
import ListItem from "../ListItem/ListItem";

import styles from "./List.module.css";

type Props = {
  list: ListType;
};

const List = memo(function List({ list }: Props): ReactNode {
  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.title}> {list.title}</div>
        <IconsButton>
          <MingcuteMore1Line />
        </IconsButton>
      </div>
      <ul className={styles.items}>
        {list.items.map((item) => (
          <li key={item.id}>
            <ListItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}, (prev, next) => {
  if (prev.list.items.length !== next.list.items.length) {
    return false
  }

  for (let i = 0; i < prev.list.items.length; i++) {
    if (prev.list.items[i].title !== next.list.items[i].title) {
      return false
    }
  }

  return true
})

export default List
