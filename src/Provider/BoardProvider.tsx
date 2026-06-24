import { type PropsWithChildren, type ReactNode, useEffect } from "react";

import { useImmerReducer } from "use-immer";

import type { ListType } from "@/Types/list";
import { listReducer } from "@/reducer/list-reducer";

import BoardContext from "@/context/Board-context";

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
  const [lists, dispatchList] = useImmerReducer(listReducer, load());

  useEffect(() => {
    save(lists);
  }, [lists]);

  return (
    <BoardContext
      value={{
        lists,
        dispatchList,
      }}
    >
      {children}
    </BoardContext>
  );
}
