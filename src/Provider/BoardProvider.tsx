import {
  type PropsWithChildren,
  type ReactNode,
  useEffect,
  useState,
} from "react";

import type { ListType } from "@/Types/list";

import { BoardContext } from "@/context/Board-context";

import { listsData } from "@/data/list-data";

type Props = PropsWithChildren;

function save(lists: ListType[]): void {
  localStorage.setItem("lists", JSON.stringify(lists));
}

function load(): ListType[] {
  const isEmpty = localStorage.getItem("lists");
  return isEmpty === null ? listsData : JSON.parse(isEmpty);
}

export default function BoardProvider({ children }: Props): ReactNode {
  const [lists, setLists] = useState<ListType[]>(load);

  useEffect(() => {
    save(lists);
  }, [lists]);

  const create = (): void => {
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
  const move = (fromListId: string, itemId: string, toListId: string): void => {
    setLists((prev) => {
      const fromListIndex = prev.findIndex((list) => list.id === fromListId);

      const toListIndex = prev.findIndex((list) => list.id === toListId);

      if (fromListIndex === -1 || toListIndex === -1) {
        console.error("Error findind desired list.");
        return prev;
      }

      const clone = [...prev];
      const list = {
        ...clone[fromListIndex],
        items: [...clone[fromListIndex].items],
      };
      const toList = {
        ...clone[toListIndex],
        items: [...clone[toListIndex].items],
      };

      const itemIndex = clone[fromListIndex].items.findIndex(
        (item) => item.id === itemId,
      );

      if (itemIndex === -1) {
        console.error("Error findind desired list-item.");
        return prev;
      }

      const [item] = list.items.splice(itemIndex, 1);
      toList.items.push(item);

      clone[fromListIndex] = list;
      clone[toListIndex] = toList;

      return clone;
    });
  };
  const remove = (listId: string, itemId: string): void => {
    setLists((prev) => {
      const listIndex = prev.findIndex((list) => list.id === listId);

      if (listIndex === -1) {
        console.error("Error findind desired list.");
        return prev;
      }

      const clone = [...prev];
      const list = {
        ...clone[listIndex],
        items: [...clone[listIndex].items],
      };

      const itemIndex = clone[listIndex].items.findIndex(
        (item) => item.id === itemId,
      );

      if (itemIndex === -1) {
        console.error("Error findind desired list-item.");
        return prev;
      }

      list.items = list.items.filter((item) => item.id !== itemId);
      //  You can also mutate the array however since it is happening twice via strictmode
      // it is recommended to have a clone and return a array to that clone.
      // list.items.splice(itemIndex, 1)

      clone[listIndex] = list;

      return clone;
    });
  };

  return (
    <BoardContext
      value={{
        lists,
        create,
        move,
        remove,
      }}
    >
      {children}
    </BoardContext>
  );
}
