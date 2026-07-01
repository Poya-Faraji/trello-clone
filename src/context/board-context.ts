import { type ActionDispatch, createContext } from "react";

import type { BoardAction } from "@/reducer/board-reducer";

import type { BoardType } from "@/types/board";

type ContextValue = {
  boards: BoardType[];
  dispatchBoards: ActionDispatch<[action: BoardAction]>;
};

const BoardContext = createContext<ContextValue>({} as ContextValue);

export default BoardContext;
