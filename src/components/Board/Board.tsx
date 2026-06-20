import { type ReactNode, useCallback, useMemo, useState } from "react";

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

  const handleRemoveButtonClick = useCallback((): void => {
    setLists((prev) => {
      try {
        const activeListIndex = prev.findIndex(
          (list) => list.id === activeListId,
        );

        if (activeListIndex === -1) {
          console.error("Error findind desired list.");
          return prev;
        }

        const clone = [...prev];
        const activeList = {
          ...clone[activeListIndex],
          items: [...clone[activeListIndex].items],
        };

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
      } finally {
        setActiveListId(null);
        setActiveItemId(null);
      }
    });
  }, [activeItemId, activeListId]);

  const handleMoveButtonClick = useCallback(
    (destinationListId: string): void => {
      setLists((prev) => {
        try {
          const activeListIndex = prev.findIndex(
            (list) => list.id === activeListId,
          );

          const destinationListIndex = prev.findIndex(
            (list) => list.id === destinationListId,
          );

          if (activeListIndex === -1 || destinationListIndex === -1) {
            console.error("Error findind desired list.");
            return prev;
          }

          const clone = [...prev];
          const activeList = {
            ...clone[activeListIndex],
            items: [...clone[activeListIndex].items],
          };
          const destinationList = {
            ...clone[destinationListIndex],
            items: [...clone[destinationListIndex].items],
          };

          const activeItemIndex = clone[activeListIndex].items.findIndex(
            (item) => item.id === activeItemId,
          );

          if (activeItemIndex === -1) {
            console.error("Error findind desired list-item.");
            return prev;
          }

          const [activeItem] = activeList.items.splice(activeItemIndex, 1);
          destinationList.items.push(activeItem);

          clone[activeListIndex] = activeList;
          clone[destinationListIndex] = destinationList;

          return clone;
        } finally {
          setActiveListId(null);
          setActiveItemId(null);
        }
      });
    },
    [activeItemId, activeListId],
  );

  const editIcon = useMemo(() => <MingcuteEdit2Line />, []);
  const addIcon = useMemo(() => <MingcuteAddLine />, []);

  const handleAddButtonClick = (): void => {
    setLists((prev) => {
      const randUUID = crypto.randomUUID();
      const clone = [...prev];
      clone[0] = {
        ...clone[0],
        items: [...clone[0].items, { id: randUUID, title: randUUID }],
      };
      return clone;
    });
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
                  return (
                    <Button
                      onClick={() => handleMoveButtonClick(list.id)}
                      key={list.id}
                    >
                      {list.title}
                    </Button>
                  );
                })}
              <Button onClick={handleRemoveButtonClick}>Remove</Button>
            </div>
          )}
          <IconsButton>{editIcon}</IconsButton>
          <IconsButton onClick={handleAddButtonClick}>{addIcon}</IconsButton>
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
