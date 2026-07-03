import type { WritableDraft } from "immer";

import type { BoardType } from "@/types/board";

import type { KanbanStore } from "../kanban-store";

export function withBoardIndex(
  state: WritableDraft<KanbanStore>,
  boardId: string | undefined,
  callback: (boardIndex: number) => void,
): void {
  const boardIndex = state.boards.findIndex((board) => board.id === boardId);

  if (boardIndex === -1) {
    return;
  }

  callback(boardIndex);
}

export function withBoard(
  state: WritableDraft<KanbanStore>,
  boardId: string | undefined,
  callback: (board: BoardType) => void,
): void {
  withBoardIndex(state, boardId, (bordIndex) => {
    callback(state.boards[bordIndex]);
  });
}
