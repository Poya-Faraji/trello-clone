import { type MouseEvent, type ReactNode, use } from "react";

import { toast } from "react-toastify";

import clsx from "clsx";

import type { ListItemType } from "@/Types/list-item";

import BoardContext from "@/context/Board-context";
import ActiveItemContext from "@/context/active-item-context";

import MingcuteDelete2Line from "@/icons/MingcuteDelete2Line";

import IconsButton from "../IconButton/IconsButton";

import styles from "./ListItem.module.css";

type Props = {
  listId: string;
  item: ListItemType;
  onRemove?: (listId: string, itemId: string) => void;
};

export default function ListItem({ listId, item }: Props): ReactNode {
  const { dispatchList } = use(BoardContext);
  const { activeItemId, activate, deactivate } = use(ActiveItemContext);

  const handleRemoveEvent = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatchList({ type: "removed", listId, itemId: item.id });
    deactivate();
    toast.success("Item removed successfully");
  };

  const handleListItemClick = (): void => {
    if (activeItemId === item.id) {
      deactivate();
    } else {
      activate(listId, item.id);
    }
  };

  return (
    <div
      className={clsx(
        styles["list-item"],
        activeItemId === item.id && styles.active,
      )}
      onClick={handleListItemClick}
    >
      {item.title}
      <IconsButton onClick={handleRemoveEvent}>
        <MingcuteDelete2Line />
      </IconsButton>
    </div>
  );
}
