import type { ReactNode } from "react";

import { useModalStore } from "@/stores/modal-store";

export default function ModalContainer(): ReactNode {
  const renderModal = useModalStore((state) => state.renderModal);

  return renderModal?.();
}
