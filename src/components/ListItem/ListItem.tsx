import { type MouseEvent, type ReactNode, use, useContext } from "react";

import type { ListItemType } from "@/Types/list-item";

import BoardContext from "@/context/Board-context";

import MingcuteDelete2Line from "@/icons/MingcuteDelete2Line";

import IconsButton from "../IconButton/IconsButton";

import styles from "./ListItem.module.css";
import clsx from "clsx";
import ActiveItemContext from "@/context/active-item-context";
import { toast } from "react-toastify";

type Props = {
  listId: string;
  item: ListItemType;
  onRemove?: (listId: string, itemId: string) => void;
};

export default function ListItem({ listId, item }: Props): ReactNode {
  const { remove } = useContext(BoardContext);
  const { activeItemId, activate, deactivate } = use(ActiveItemContext)

  const handleRemoveEvent = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    remove(listId, item.id);
    deactivate()
    toast.success('Item removed successfully')
  };

  const handleListItemClick = (): void => {
    if (activeItemId === item.id) {
      deactivate()
    } else {
      activate(listId, item.id)
    }
  };

  return (
    <div
      className={clsx(styles["list-item"], activeItemId === item.id && styles.active)}
      onClick={handleListItemClick}
    >
      {item.title}
      <IconsButton onClick={handleRemoveEvent}>
        <MingcuteDelete2Line />
      </IconsButton>
    </div>
  );
}
