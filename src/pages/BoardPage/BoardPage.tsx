import { type ReactNode } from "react";

import BoardProvider from "@/Provider/BoardProvider";
import ActiveItemProvider from "@/Provider/ListProvider";

// import Board from "@/components/Board/Board";
// import Button from "@/components/Button/Button";
// import Modal from "@/components/Modal/Modal";
import TextInput from "@/components/TextInput/TextInput";

// import { useParams } from "react-router";

import styles from "./BoardPage.module.css";

export default function BoardPage(): ReactNode {
  // const { id } = useParams();
  // const ref = useRef<HTMLDialogElement>(null);

  // const handleOpenModalButtonClick = (): void => {
  //   ref.current?.showModal();
  // };

  return (
    <div className={styles["board-page"]}>
      <BoardProvider>
        <ActiveItemProvider>
          {/* <Board /> */}
          {/* <Button color="primary" onClick={handleOpenModalButtonClick}>
            open modal
          </Button>
          <Modal ref={ref} heading="This is heading">
            Hello there are children here.
          </Modal> */}

          <TextInput label="Email" />
        </ActiveItemProvider>
      </BoardProvider>
    </div>
  );
}
