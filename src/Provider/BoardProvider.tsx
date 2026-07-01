import { type PropsWithChildren, type ReactNode, useEffect } from "react";

import { useImmerReducer } from "use-immer";

import { boardReducer } from "@/reducer/board-reducer";

import BoardContext from "@/context/board-context";

import { boardsData } from "@/data/boards-data";

import type { BoardType } from "@/types/board";

function save(boards: BoardType[]): void {
  localStorage.setItem("boards", JSON.stringify(boards));
}

function load(): BoardType[] {
  const item = localStorage.getItem("boards");

  if (!item) {
    return boardsData;
  }
  return JSON.parse(item);
}

type Props = PropsWithChildren;

export default function BoardsProvider({ children }: Props): ReactNode {
  const [boards, dispatchBoards] = useImmerReducer(
    boardReducer,
    undefined,
    load,
  );

  useEffect(() => {
    save(boards);
  }, [boards]);

  return (
    <BoardContext
      value={{
        boards,
        dispatchBoards,
      }}
    >
      {children}
    </BoardContext>
  );
}
