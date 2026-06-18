import { type ReactNode, memo } from "react";

import type { ListType } from "@/Types/list";

import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import IconsButton from "../IconButton/IconsButton";
import ListItem from "../ListItem/ListItem";

import styles from "./List.module.css";

type Props = {
  list: ListType;
  onClick: (id: string) => void;
};

const List = memo(function List({ list, onClick }: Props): ReactNode {
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
            <ListItem item={item} onClick={onClick} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default List;
