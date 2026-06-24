import { type ActionDispatch, createContext } from "react";

import type { ListType } from "@/Types/list";
import type { ListAction } from "@/reducer/list-reducer";

import { listsData } from "@/data/list-data";

type ContextValue = {
  lists: ListType[];
  dispatchList: ActionDispatch<[action: ListAction]>;
};

const BoardContext = createContext<ContextValue>({
  lists: listsData,
  dispatchList: () => {},
});

export default BoardContext;
