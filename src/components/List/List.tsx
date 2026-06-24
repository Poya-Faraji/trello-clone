import { type ReactNode, useRef } from "react";

import type { ListType } from "@/Types/list";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import CreateListItemModal from "../CreateListItemModal/CreateListItemModal";
import IconsButton from "../IconButton/IconsButton";
import ListItem from "../ListItem/ListItem";

import styles from "./List.module.css";

type Props = {
  list: ListType;
};

export default function List({ list }: Props): ReactNode {
  const modalRef = useRef<HTMLDialogElement>(null);
  const handleButtonClick = (): void => {
    modalRef.current?.showModal();
  };

  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.title}>{list.title}</div>
        <div className={styles.actions}>
          <IconsButton onClick={handleButtonClick}>
            <MingcuteAddLine />
          </IconsButton>
          <IconsButton>
            <MingcuteMore1Line />
          </IconsButton>
        </div>
      </div>
      <ul className={styles.items}>
        {list.items.map((item) => (
          <li key={item.id}>
            <ListItem listId={list.id} item={item} />
          </li>
        ))}
      </ul>

      <CreateListItemModal ref={modalRef} listId={list.id} />
    </div>
  );
}
