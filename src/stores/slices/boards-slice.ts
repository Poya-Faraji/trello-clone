import { boardsData } from "@/data/boards-data";

import type { BoardType } from "@/types/board";

import type { KanbanStateCreator } from "../kanban-store";
import { withBoardIndex } from "../utils/kanban-utils";

export type BoardsSlice = {
  boards: BoardType[];
  createBoard: (board: Omit<BoardType, "id" | "lists">) => void;
  editBoard: (BoardId: string | undefined, board: Partial<BoardType>) => void;
  removeBoard: (BoardId: string | undefined) => void;
};

export const createBoardSlice: KanbanStateCreator<BoardsSlice> = (set) => ({
  boards: boardsData,
  createBoard: (board) =>
    set((state) => {
      const id = globalThis.crypto.randomUUID();
      state.boards.push({ id, lists: [], ...board });
    }),
  editBoard: (boardId, board) =>
    set((state) =>
      withBoardIndex(state, boardId, (boardIndex) => {
        state.boards[boardIndex] = { ...state.boards[boardIndex], ...board };
      }),
    ),
  removeBoard: (boardId): void =>
    set((state) =>
      withBoardIndex(state, boardId, (boardIndex) => {
        state.boards.splice(boardIndex, 1);
      }),
    ),
});
