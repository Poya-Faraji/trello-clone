import { type ReactNode } from "react";

import { SortableContext } from "@dnd-kit/sortable";

import type { ListType } from "@/Types/list";

import List from "@/components/List/List";

import styles from "./BoardLists.module.css";

type Props = {
  lists: ListType[];
};

export default function BoardLists({ lists }: Props): ReactNode {
  return (
    <SortableContext items={lists.map((list) => list.id)}>
      <ul className={styles["board-lists"]}>
        {lists.map((list, listIndex) => {
          return (
            <li key={list.id}>
              <List listIndex={listIndex} list={list} />
            </li>
          );
        })}
      </ul>
    </SortableContext>
  );
}
