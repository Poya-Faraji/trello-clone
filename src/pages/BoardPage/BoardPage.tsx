import { type ReactNode, useRef } from "react";

import BoardProvider from "@/Provider/BoardProvider";
import ActiveItemProvider from "@/Provider/ListProvider";

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
          {/* <Board /> */}
          <Button color="primary" onClick={handleButtonClick}>
            Show Modal
          </Button>
          <CreateListItemModal ref={ref} heading="This is Heading" />
        </ActiveItemProvider>
      </BoardProvider>
    </div>
  );
}
