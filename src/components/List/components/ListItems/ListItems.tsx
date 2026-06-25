import type { ReactNode } from "react";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import type { ListType } from "@/Types/list";

import ListItem from "@/components/ListItem/ListItem";

import styles from "./ListItems.module.css";

type Props = {
  listIndex: number;
  list: ListType;
};

export default function ListItems({ listIndex, list }: Props): ReactNode {
  const { setNodeRef } = useDroppable({
    id: list.id,
    data: { isList: true, listIndex, list },
  });

  return (
    <SortableContext id={list.id} items={list.items.map((item) => item.id)}>
      <ul ref={setNodeRef} className={styles["list-items"]}>
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
  );
}
