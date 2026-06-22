import { type ReactNode, use, useEffect, useState } from "react";

import BoardContext from "@/context/Board-context";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import Button from "../Button/Button";
import IconsButton from "../IconButton/IconsButton";
import List from "../List/List";

import styles from "./Board.module.css";

export default function Board(): ReactNode {
  const { lists, create, move } = use(BoardContext);

  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const handleListItemClick = (listId: string, itemId: string): void => {
    setActiveListId(listId);
    setActiveItemId(itemId);
  };

  const handleMoveButtonClick = (toListId: string): void => {
    if (activeListId && activeItemId) {
      move(activeListId, activeItemId, toListId);
    }
    setActiveListId(null);
    setActiveItemId(null);
  };

  const handleAddButtonClick = (): void => {
    create();
  };

  useEffect(() => {
    const deselectList = (e: KeyboardEvent): void => {
      if (e.code !== "Escape") {
        return;
      }
      setActiveItemId(null);
      setActiveListId(null);
    };
    document.addEventListener("keydown", deselectList);
    return (): void => {
      document.removeEventListener("keydown", deselectList);
    };
  }, []);

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
            </div>
          )}
          <IconsButton>
            <MingcuteEdit2Line />
          </IconsButton>
          <IconsButton onClick={handleAddButtonClick}>
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
