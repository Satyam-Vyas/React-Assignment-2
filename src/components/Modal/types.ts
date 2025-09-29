import type { useModal } from "@/hooks/useModal";
import type { RefObject } from "react";

export type BaseModalHandle = {
  show: () => void;
  close: () => void;
};

export type RootModalHandle = BaseModalHandle;

export interface UseTextPromptInputReturn {
  userInput: string;
  setUserInput: (value: string) => void;
  handleUserInputChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleModalSubmit: () => void;
  handleModalClose: () => void;
}

export type UseDialogReturn = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  onBackdropClick: (e: React.MouseEvent<HTMLDialogElement>) => void;
};

export interface UseRootModalManagerReturn {
  modal: ReturnType<typeof useModal>["modal"];
  modalRef: React.RefObject<RootModalHandle | null>;
  handleModalClose: () => void;
}
