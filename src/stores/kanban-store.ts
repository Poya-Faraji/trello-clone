import { type StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { type BoardsSlice, createBoardSlice } from "./slices/boards-slice";
import { type ItemsSlice, createItemsSlice } from "./slices/items-slice";
import { type ListsSlice, createListSlice } from "./slices/lists-slice";

export type KanbanStore = BoardsSlice & ListsSlice & ItemsSlice;

export type KanbanStateCreator<T> = StateCreator<
  KanbanStore,
  [["zustand/immer", never]],
  [],
  T
>;

export const useKanbanStore = create<KanbanStore>()(
  persist(
    immer((...args) => ({
      ...createBoardSlice(...args),
      ...createListSlice(...args),
      ...createItemsSlice(...args),
    })),
    { name: "boards" },
  ),
);
