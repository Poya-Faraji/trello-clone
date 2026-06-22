import { useContext, useReducer, type MouseEvent, type ReactNode } from "react";

import type { ListItemType } from "@/Types/list-item";

import MingcuteDelete2Line from "@/icons/MingcuteDelete2Line";

import IconsButton from "../IconButton/IconsButton";

import styles from "./ListItem.module.css";
import BoardContext from "@/context/Board-context";
import { listReducer } from "@/reducer/list-reducer";

type Props = {
  listId: string;
  item: ListItemType;
  onClick?: (listId: string, itemId: string) => void;
  onRemove?: (listId: string, itemId: string) => void;
};

export default function ListItem({
  listId,
  item,
  onClick,
}: Props): ReactNode {

  const { remove } = useContext(BoardContext)

  const handleRemoveEvent = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    remove(listId, item.id)
  };

  return (
    <div
      className={styles["list-item"]}
      onClick={() => onClick?.(listId, item.id)}
    >
      {item.title}
      <IconsButton onClick={handleRemoveEvent}>
        <MingcuteDelete2Line />
      </IconsButton>
    </div>
  );
}
