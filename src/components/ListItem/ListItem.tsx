import { type MouseEvent, type ReactNode, use } from "react";

import { toast } from "react-toastify";

import clsx from "clsx";

import type { ListItemType } from "@/Types/list-item";

import BoardContext from "@/context/Board-context";

import MingcuteDelete2Line from "@/icons/MingcuteDelete2Line";

import IconsButton from "../IconButton/IconsButton";

import styles from "./ListItem.module.css";

type Props = {
  listIndex: number;
  itemIndex: number;
  listId: string;
  item: ListItemType;
  onRemove?: (listId: string, itemId: string) => void;
};

export default function ListItem({
  listIndex,
  itemIndex,
  item,
}: Props): ReactNode {
  const { dispatchList } = use(BoardContext);

  const handleRemoveEvent = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatchList({ type: "item_removed", listIndex, itemIndex });
    toast.success("Item removed successfully");
  };

  return (
    <div className={clsx(styles["list-item"])}>
      {item.title}
      <IconsButton onClick={handleRemoveEvent}>
        <MingcuteDelete2Line />
      </IconsButton>
    </div>
  );
}
