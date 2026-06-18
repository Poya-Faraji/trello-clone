import { type ReactNode, useState } from "react";

import type { ListType } from "@/Types/list";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import IconsButton from "../IconButton/IconsButton";
import List from "../List/List";

import styles from "./Board.module.css";
import type { ListItemType } from "@/Types/list-item";


function cb(a: ListItemType, b: ListItemType): number {
  return a.title.localeCompare(b.title)
}


export default function Board(): ReactNode {
  const [toDoList, setToDoList] = useState<ListType>({
    id: crypto.randomUUID(),
    title: "🔜 To Do",
    items: [
      { id: crypto.randomUUID(), title: "C First action 1" },
      { id: "2", title: "A First action 2" },
      { id: crypto.randomUUID(), title: "B First action 3" },
    ],
  });

  const [doingList, setDoingList] = useState<ListType>({
    id: crypto.randomUUID(),
    title: "🔨 Doing",
    items: [
      { id: crypto.randomUUID(), title: "C Doing action 1" },
      { id: crypto.randomUUID(), title: "A Doing action 2" },
      { id: crypto.randomUUID(), title: "B Doing action 3" },
    ],
  });

  const [doneList, setDoneList] = useState<ListType>({
    id: crypto.randomUUID(),
    title: "✅ Done",
    items: [
      { id: crypto.randomUUID(), title: "C Done action 1" },
      { id: crypto.randomUUID(), title: "ADone action 2" },
      { id: crypto.randomUUID(), title: "B Done action 3" },
    ],
  });

  const handleIconDeleteAction = (): void => {
    setToDoList((prev) => {
      return { ...prev, items: prev.items.filter((item) => item.id !== "2") };
    });
  };


  const sortedToDoList = { ...toDoList, items: [...toDoList.items.sort(cb)] }
  const sortedDoingList = { ...doingList, items: [...doingList.items.sort(cb)] }
  const sortedDoneList = { ...doneList, items: [...doneList.items.sort(cb)] }


  return (
    <div className={styles.board}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Board Title</div>
        <div className={styles.actions}>
          <IconsButton onClick={handleIconDeleteAction}>
            <MingcuteEdit2Line />
          </IconsButton>
          <IconsButton>
            <MingcuteAddLine />
          </IconsButton>
        </div>
      </div>

      <ul className={styles.lists}>
        <li>
          {/* <List list={toDoList} /> */}
          <List list={sortedToDoList} />
        </li>
        <li>
          {/* <List list={doingList} /> */}
          <List list={sortedDoingList} />
        </li>
        <li>
          {/* <List list={doneList} /> */}
          <List list={sortedDoneList} />
        </li>
      </ul>
    </div>
  );
}
