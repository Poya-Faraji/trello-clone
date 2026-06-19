import { type ReactNode, useCallback, useState } from "react";

import type { ListType } from "@/Types/list";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import IconsButton from "../IconButton/IconsButton";
import List from "../List/List";

import styles from "./Board.module.css";
import { listsData } from "@/data/list-data";
import Button from "../Button/Button";

export default function Board(): ReactNode {
  const [lists, setLists] = useState<ListType[]>(listsData)

  const [activeListId, setActiveListId] = useState<string | null>(null)
  const [activeItemId, setActiveItemId] = useState<string | null>(null)

  const handleListItemClick = useCallback((listId: string, itemId: string) => {
    setActiveListId(listId)
    setActiveItemId(itemId)
  }, [])

  return (
    <div className={styles.board}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Board Title</div>
        <div className={styles.actions}>
          {activeItemId !== null &&
            (
              <div className={styles.spacer}>
                {
                  lists.filter(list => list.id !== activeListId).map(list => {
                    return (
                      <Button key={list.id}>{list.title}</Button>
                    )
                  })
                }
                <Button>Remove</Button>
              </div>
            )}
          <IconsButton>
            <MingcuteEdit2Line />
          </IconsButton>
          <IconsButton>
            <MingcuteAddLine />
          </IconsButton>
        </div>
      </div>

      <ul className={styles.lists}>
        {lists.map((list) => {
          return (
            <li key={list.id}>
              <List list={list} onClick={handleListItemClick} />
            </li>
          )
        })}
      </ul>
    </div>
  );
}
