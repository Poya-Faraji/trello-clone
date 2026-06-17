import { useState, type ReactNode } from "react";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import IconsButton from "../IconButton/IconsButton";

import styles from "./Board.module.css";
import List from "../List/List";
import type { ListType } from "@/Types/list";

export default function Board(): ReactNode {
  const [toDoList, setToDoList] = useState<ListType>(
    {
      id: crypto.randomUUID(),
      title: "🔜 To Do",
      items: [
        { id: crypto.randomUUID(), title: "first action 1" },
        { id: crypto.randomUUID(), title: "first action 2" },
        { id: crypto.randomUUID(), title: "first action 3" },
      ]
    }
  )

  const [doingList, setDoingList] = useState<ListType>(
    {
      id: crypto.randomUUID(),
      title: "🔨 Doing",
      items: [
        { id: crypto.randomUUID(), title: "Doing action 1" },
        { id: crypto.randomUUID(), title: "Doing action 2" },
        { id: crypto.randomUUID(), title: "Doing action 3" },
      ]
    }
  )

  const [doneList, setDoneList] = useState<ListType>(
    {
      id: crypto.randomUUID(),
      title: "✅ Done",
      items: [
        { id: crypto.randomUUID(), title: "Done action 1" },
        { id: crypto.randomUUID(), title: "Done action 2" },
        { id: crypto.randomUUID(), title: "Done action 3" },
      ]
    }
  )



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
        <li>
          <List list={toDoList} />
        </li>
        <li>
          <List list={doingList} />
        </li>
        <li>
          <List list={doneList} />
        </li>
      </ul>
    </div>
  );
}
