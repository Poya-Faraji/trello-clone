import type { PropsWithChildren, ReactNode } from "react";

import BoardPageContext from "@/context/board-page-context";

import type { BoardType } from "@/types/board";

type Props = PropsWithChildren<{
  board: BoardType;
}>;

export default function BoardPageProvider({
  board,
  children,
}: Props): ReactNode {
  return <BoardPageContext value={{ board }}>{children}</BoardPageContext>;
}
