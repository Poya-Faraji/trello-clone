import { type MouseEvent, type ReactNode, useContext } from "react";

import type { ListItemType } from "@/Types/list-item";

import BoardContext from "@/context/Board-context";

import MingcuteDelete2Line from "@/icons/MingcuteDelete2Line";

import IconsButton from "../IconButton/IconsButton";

import styles from "./ListItem.module.css";
import clsx from "clsx";

type Props = {
  listId: string;
  item: ListItemType;
  isActive: string | null
  onClick?: (listId: string, itemId: string) => void;
  onRemove?: (listId: string, itemId: string) => void;
};

export default function ListItem({ listId, item, isActive, onClick }: Props): ReactNode {
  const { remove } = useContext(BoardContext);

  const handleRemoveEvent = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    remove(listId, item.id);
  };

  isActive = isActive === item.id ? "isActive" : ""

  return (
    <div
      className={clsx(styles["list-item"], styles[isActive])}
      onClick={() => onClick?.(listId, item.id)}
    >
      {item.title}
      <IconsButton onClick={handleRemoveEvent}>
        <MingcuteDelete2Line />
      </IconsButton>
    </div>
  );
}
