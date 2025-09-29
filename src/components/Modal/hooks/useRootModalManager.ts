//hooks
import { useCallback, useEffect, useRef } from "react";
import { useModal } from "@/hooks/useModal";

//types
import type {
  RootModalHandle,
  UseRootModalManagerReturn,
} from "@/components/Modal/types";
import type { ModalContextValue } from "@/context/types";

export function useRootModalManager(): UseRootModalManagerReturn {
  const { modal, closeModal }: ModalContextValue = useModal();
  const modalRef = useRef<RootModalHandle | null>(null);

  const handleModalClose = useCallback((): void => {
    modalRef.current?.close();
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    if (modal) {
      modalRef.current?.show();
    }
  }, [modal]);

  return {
    modal,
    modalRef,
    handleModalClose,
  };
}
