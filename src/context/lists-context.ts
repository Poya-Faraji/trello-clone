import { type ActionDispatch, createContext } from "react";

import type { ListType } from "@/Types/list";
import type { ListAction } from "@/reducer/list-reducer";

type ContextValue = {
  lists: ListType[];
  dispatchList: ActionDispatch<[action: ListAction]>;
};

const ListsContext = createContext<ContextValue>({} as ContextValue);

export default ListsContext;
