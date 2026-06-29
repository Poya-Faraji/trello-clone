import type { Draft } from "immer";

import { arrayMove } from "@dnd-kit/sortable";

import type { ListType } from "@/Types/list";
import type { ListItemType } from "@/Types/list-item";

export type ListAction =
  | {
      type: "list_created";
      list: ListType;
    }
  | {
      type: "list_dragged_end";
      activeListIndex: number;
      overListIndex: number;
    }
  | {
      type: "item_created";
      listIndex: number;
      item: ListItemType;
    }
  | {
      type: "item_removed";
      listIndex: number;
      itemIndex: number;
    }
  | {
      type: "item_dragged_over";
      activeListIndex: number;
      activeItemIndex: number;
      overItemIndex: number;
      overListIndex?: number;
    }
  | {
      type: "item_dragged_end";
      activeListIndex: number;
      activeItemIndex: number;
      overItemIndex: number;
    };

export function listReducer(
  draft: Draft<ListType[]>,
  action: ListAction,
): void {
  switch (action.type) {
    case "list_created": {
      draft.push(action.list);
      return;
    }
    case "list_dragged_end": {
      const { activeListIndex, overListIndex } = action;

      if (activeListIndex === overListIndex) {
        return;
      }

      const activeList = draft[activeListIndex];

      draft.splice(activeListIndex, 1);
      draft.splice(overListIndex, 0, activeList);

      return;
    }
    case "item_created": {
      const list = draft[action.listIndex];
      list.items.push(action.item);
      return;
    }
    case "item_removed": {
      const list = draft[action.listIndex];
      list.items.splice(action.itemIndex, 1);

      return;
    }
    case "item_dragged_end": {
      const { activeListIndex, activeItemIndex, overItemIndex } = action;

      if (activeItemIndex === overItemIndex) {
        return;
      }

      const activeList = draft[activeListIndex];

      activeList.items = arrayMove(
        activeList.items,
        activeItemIndex,
        overItemIndex,
      );

      return;
    }
    case "item_dragged_over": {
      const { activeListIndex, activeItemIndex, overItemIndex, overListIndex } =
        action;

      if (activeListIndex === overListIndex) {
        return;
      }

      const activeList = draft[activeListIndex];
      const activeItem = activeList.items[activeItemIndex];
      const overList = draft[overListIndex!];

      // can't use arrayMove method anymore since it creats a new array

      const newIndex = overItemIndex ?? overList.items.length;

      overList.items.splice(newIndex, 0, activeItem);
      activeList.items.splice(activeItemIndex, 1);

      return;
    }

    default:
      throw new Error("Unknown Action in listReducer!");
  }
}
