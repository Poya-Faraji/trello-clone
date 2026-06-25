import { type ReactNode } from "react";

import type { ListType } from "@/Types/list";

import ListHeader from "./components/ListHeader/ListHeader";
import ListItems from "./components/ListItems/ListItems";

import styles from "./List.module.css";

type Props = {
  listIndex: number;
  list: ListType;
};

export default function List({ list, listIndex }: Props): ReactNode {
  return (
    <div className={styles.list}>
      <ListHeader title={list.title} listIndex={listIndex} />
      <ListItems list={list} listIndex={listIndex} />
    </div>
  );
}
