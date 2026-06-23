import { type ReactNode, use } from "react";

import BoardContext from "@/context/Board-context";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import Button from "../Button/Button";
import IconsButton from "../IconButton/IconsButton";
import List from "../List/List";

import styles from "./Board.module.css";
import ActiveItemContext from "@/context/active-item-context";
import { toast } from "react-toastify";

export default function Board(): ReactNode {
  const { lists, create, move } = use(BoardContext);
  const { activeItemId, activeListId, deactivate } = use(ActiveItemContext);

  const handleMoveButtonClick = (toListId: string): void => {
    if (activeListId && activeItemId) {
      move(activeListId, activeItemId, toListId);
    }
    deactivate()
  };

  const handleAddButtonClick = (): void => {
    create();
    toast.success("Item added successfully")
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
              <List list={list} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
