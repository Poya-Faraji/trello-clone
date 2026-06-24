import { type ReactNode, useRef } from "react";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import type { ListType } from "@/Types/list";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import CreateListItemModal from "../CreateListItemModal/CreateListItemModal";
import IconsButton from "../IconButton/IconsButton";
import ListItem from "../ListItem/ListItem";

import styles from "./List.module.css";

type Props = {
  listIndex: number;
  list: ListType;
};

export default function List({ list, listIndex }: Props): ReactNode {
  const { setNodeRef } = useDroppable({
    id: list.id,
    data: { isList: true, listIndex, list },
  });

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
      <SortableContext id={list.id} items={list.items.map((item) => item.id)}>
        <ul ref={setNodeRef} className={styles.items}>
          {list.items.map((item, itemIndex) => (
            <li key={item.id}>
              <ListItem
                listIndex={listIndex}
                itemIndex={itemIndex}
                listId={list.id}
                item={item}
              />
            </li>
          ))}
        </ul>
      </SortableContext>

      <CreateListItemModal ref={modalRef} listIndex={listIndex} />
    </div>
  );
}
