import { createContext } from "react";

import type { ListType } from "@/Types/list";
import type { ListItemType } from "@/Types/list-item";

import { listsData } from "@/data/list-data";

type ContextValue = {
  lists: ListType[];
  create: (listId: string, item: ListItemType) => void;
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
