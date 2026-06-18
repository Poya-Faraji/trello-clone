import { type ReactNode, useCallback, useMemo, useState } from "react";

import type { ListType } from "@/Types/list";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import IconsButton from "../IconButton/IconsButton";
import List from "../List/List";

import styles from "./Board.module.css";

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

  const handleOnClickToDoList = useCallback((id: string): void => {
    setToDoList((prev) => {
      return { ...prev, items: prev.items.filter((item) => item.id !== id) };
    });
  }, []);

  // smart way of using useMemo instead of useCallback however it is not necessary: 
  // keep on using useCallback instead
  const handleOnClickDoingList = useMemo(() => {
    return (id: string): void => {
      setDoingList((prev) => {
        return {
          ...prev,
          items: [...prev.items].filter((item) => item.id !== id),
        };
      });
    };
  }, []);

  const handleOnClickDoneList = useCallback((id: string): void => {
    setDoneList((prev) => {
      return {
        ...prev,
        items: [...prev.items].filter((item) => item.id !== id),
      };
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
        <li>
          <List list={toDoList} onClick={handleOnClickToDoList} />
        </li>
        <li>
          <List list={doingList} onClick={handleOnClickDoingList} />
        </li>
        <li>
          <List list={doneList} onClick={handleOnClickDoneList} />
        </li>
      </ul>
    </div>
  );
}
