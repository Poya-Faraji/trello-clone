import { type ReactNode, useRef } from "react";

import BoardProvider from "@/Provider/BoardProvider";
import ActiveItemProvider from "@/Provider/ListProvider";

import Board from "@/components/Board/Board";
import Button from "@/components/Button/Button";
import CreateListItemModal from "@/components/CreateListItemModal/CreateListItemModal";

// import { useParams } from "react-router";

import styles from "./BoardPage.module.css";

export default function BoardPage(): ReactNode {
  // const { id } = useParams();
  const ref = useRef<HTMLDialogElement>(null);
  const handleButtonClick = (): void => {
    ref.current?.showModal();
  };

  return (
    <div className={styles["board-page"]}>
      <BoardProvider>
        <ActiveItemProvider>
          <CreateListItemModal ref={ref} listId="list-1" />
          <Button color="primary" onClick={handleButtonClick}>
            Show Modal
          </Button>
          <Board />
        </ActiveItemProvider>
      </BoardProvider>
    </div>
  );
}
