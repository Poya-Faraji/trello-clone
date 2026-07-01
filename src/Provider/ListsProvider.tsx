import { type PropsWithChildren, type ReactNode, use, useEffect } from "react";

import { useImmerReducer } from "use-immer";

import { listReducer } from "@/reducer/list-reducer";

import BoardContext from "@/context/board-context";
import BoardPageContext from "@/context/board-page-context";
import ListsContext from "@/context/lists-context";

type Props = PropsWithChildren;

export default function ListsProvider({ children }: Props): ReactNode {
  const { dispatchBoards } = use(BoardContext);
  const { board } = use(BoardPageContext);

  const [lists, dispatchList] = useImmerReducer(listReducer, board.lists);

  useEffect(() => {
    dispatchBoards({
      type: "board_edited",
      boardId: board.id,
      board: { lists },
    });
  }, [board.id, dispatchBoards, lists]);

  return (
    <ListsContext
      value={{
        lists,
        dispatchList,
      }}
    >
      {children}
    </ListsContext>
  );
}
