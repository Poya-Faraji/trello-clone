import { type ReactNode, memo, useMemo } from "react";

import type { ListType } from "@/Types/list";

import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import IconsButton from "../IconButton/IconsButton";
import ListItem from "../ListItem/ListItem";

import styles from "./List.module.css";

type Props = {
  list: ListType;
  onClick: (listId: string, itemId: string) => void;
};

const List = memo(function List({ list, onClick }: Props): ReactNode {
  const moreIcon = useMemo(() => <MingcuteMore1Line />, []);

  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.title}> {list.title}</div>
        <IconsButton>{moreIcon}</IconsButton>
      </div>
      <ul className={styles.items}>
        {list.items.map((item) => (
          <li key={item.id}>
            <ListItem listId={list.id} item={item} onClick={onClick} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default List;
