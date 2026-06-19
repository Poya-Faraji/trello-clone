import { type ReactNode, useCallback, useState } from "react";

import type { ListType } from "@/Types/list";

import { listsData } from "@/data/list-data";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import Button from "../Button/Button";
import IconsButton from "../IconButton/IconsButton";
import List from "../List/List";

import styles from "./Board.module.css";

export default function Board(): ReactNode {
  const [lists, setLists] = useState<ListType[]>(listsData);

  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const handleListItemClick = useCallback((listId: string, itemId: string) => {
    setActiveListId(listId);
    setActiveItemId(itemId);
  }, []);

  const handleRemoveButtonClick = (): void => {
    try {
      setLists((prev) => {
        const activeListIndex = prev.findIndex(
          (list) => list.id === activeListId,
        );

        if (activeListIndex === -1) {
          console.error("Error findind desired list.");
          return prev;
        }

        const clone = [...prev];
        const activeList = { ...clone[activeListIndex] };

        const activeItemIndex = clone[activeListIndex].items.findIndex(
          (item) => item.id === activeItemId,
        );

        if (activeItemIndex === -1) {
          console.error("Error findind desired list-item.");
          return prev;
        }

        activeList.items = activeList.items.filter(
          (item) => item.id !== activeItemId,
        );
        //  You can also mutate the array however since it is happening twice via strictmode
        // it is recommended to have a clone and return a array to that clone.
        // activeList.items.splice(activeItemIndex, 1)

        clone[activeListIndex] = activeList;

        return clone;
      });
    } finally {
      setActiveListId(null);
      setActiveItemId(null);
    }
  };

  return (
    <div className={styles.board}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Board Title</div>
        <div className={styles.actions}>
          {activeItemId !== null && (
            <div className={styles.spacer}>
              {lists
                .filter((list) => list.id !== activeListId)
                .map((list) => {
                  return <Button key={list.id}>{list.title}</Button>;
                })}
              <Button onClick={handleRemoveButtonClick}>Remove</Button>
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
          );
        })}
      </ul>
    </div>
  );
}
