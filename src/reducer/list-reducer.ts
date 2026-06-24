import type { ListType } from "@/Types/list";
import type { ListItemType } from "@/Types/list-item";

export type ListAction =
  | {
      type: "created";
      listId: string;
      item: ListItemType;
    }
  | {
      type: "moved";
      fromListId: string;
      itemId: string;
      toListId: string;
    }
  | {
      type: "removed";
      listId: string;
      itemId: string;
    };

export function listReducer(state: ListType[], action: Action): ListType[] {
  switch (action.type) {
    case "created": {
      const listIndex = state.findIndex((list) => list.id === action.listId);

      if (listIndex === -1) {
        console.error("Error findind desired list.");
        return state;
      }

      const clone = [...state];
      const list = {
        ...clone[listIndex],
        items: [...clone[listIndex].items],
      };

      list.items.push(action.item);

      clone[listIndex] = list;
      return clone;
    }
    case "moved": {
      const fromListIndex = state.findIndex(
        (list) => list.id === action.fromListId,
      );

      const toListIndex = state.findIndex(
        (list) => list.id === action.toListId,
      );

      if (fromListIndex === -1 || toListIndex === -1) {
        console.error("Error findind desired list.");
        return state;
      }

      const clone = [...state];
      const list = {
        ...clone[fromListIndex],
        items: [...clone[fromListIndex].items],
      };
      const toList = {
        ...clone[toListIndex],
        items: [...clone[toListIndex].items],
      };

      const itemIndex = clone[fromListIndex].items.findIndex(
        (item) => item.id === action.itemId,
      );

      if (itemIndex === -1) {
        console.error("Error findind desired list-item.");
        return state;
      }

      const [item] = list.items.splice(itemIndex, 1);
      toList.items.push(item);

      clone[fromListIndex] = list;
      clone[toListIndex] = toList;

      return clone;
    }
    case "removed": {
      const listIndex = state.findIndex((list) => list.id === action.listId);

      if (listIndex === -1) {
        console.error("Error findind desired list.");
        return state;
      }

      const clone = [...state];
      const list = {
        ...clone[listIndex],
        items: [...clone[listIndex].items],
      };

      const itemIndex = clone[listIndex].items.findIndex(
        (item) => item.id === action.itemId,
      );

      if (itemIndex === -1) {
        console.error("Error findind desired list-item.");
        return state;
      }

      list.items = list.items.filter((item) => item.id !== action.itemId);
      //  You can also mutate the array however since it is happening twice via strictmode
      // it is recommended to have a clone and return a array to that clone.
      // list.items.splice(itemIndex, 1)

      clone[listIndex] = list;

      return clone;
    }

    default:
      throw new Error("Unknown Action in listReducer!");
  }
}
