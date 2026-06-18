import { type ReactNode, useCallback, useMemo, useState } from "react";

import type { ListType } from "@/Types/list";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import IconsButton from "../IconButton/IconsButton";
import List from "../List/List";

import styles from "./Board.module.css";
import { listsData } from "@/data/list-data";

export default function Board(): ReactNode {
  const [lists, setLists] = useState<ListType[]>(listsData)

  console.log(lists);


  const handleOnClickItemDeletion = useCallback((id: string): void => {
    setLists((prev) => {
      const clone = { ...prev[0], items: [...prev[0].items].filter((item) => item.id !== id) };
      return [clone, prev[1], prev[2]]
    });
  }, []);

  return (
    <div className={styles.board}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Board Title</div>
        <div className={styles.actions}>
          <IconsButton>
            <MingcuteEdit2Line />
          </IconsButton>
          <IconsButton>
            <MingcuteAddLine />
          </IconsButton>
        </div>
      </div>

      <ul className={styles.lists}>

        {lists.map(list => {
          return (
            <li key={list.id}>
              <List list={list} onClick={handleOnClickItemDeletion} />
            </li>
          )
        })}
      </ul>
    </div>
  );
}
