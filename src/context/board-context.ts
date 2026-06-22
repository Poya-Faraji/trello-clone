import { createContext } from "react";

import type { ListType } from "@/Types/list";

import { listsData } from "@/data/list-data";

type ContextValue = {
  lists: ListType[];
  create: () => void;
  move: (fromListId: string, itemId: string, toListId: string) => void;
  remove: (listId: string, itemId: string) => void;
};

const BoardContext = createContext<ContextValue>({
  lists: listsData,
  create: () => {},
  move: () => {},
  remove: () => {},
});

export default BoardContext;
