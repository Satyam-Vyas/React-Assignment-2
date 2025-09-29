//hooks
import { useState, useCallback } from "react";

//types
import type { ReactNode } from "react";
import type { ModalType } from "@/context/types";

//contexts
import { ModalContext } from "@/context/ModalContext";

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
}: ModalProviderProps) => {
  const [modal, setModal] = useState<ModalType | null>(null);

  const openModal = useCallback((m: Exclude<ModalType, null>): void => {
    setModal(m);
  }, []);

  const closeModal = useCallback((): void => {
    setModal(null);
  }, []);

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
