import { type ReactNode, use } from "react";

import { SortableContext } from "@dnd-kit/sortable";

import BoardContext from "@/context/Board-context";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import IconsButton from "../IconButton/IconsButton";
import List from "../List/List";

import styles from "./Board.module.css";

export default function Board(): ReactNode {
  const { lists } = use(BoardContext);

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

      <SortableContext items={lists.map((list) => list.id)}>
        <ul className={styles.lists}>
          {lists.map((list, listIndex) => {
            return (
              <li key={list.id}>
                <List listIndex={listIndex} list={list} />
              </li>
            );
          })}
        </ul>
      </SortableContext>
    </div>
  );
}
