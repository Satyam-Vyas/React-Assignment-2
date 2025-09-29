//hooks
import { useDialog } from "@/components/Modal/hooks/useDialog";
import { useImperativeHandle } from "react";

//types
import type { ReactNode, ReactElement, RefObject } from "react";
import type { BaseModalHandle } from "@/components/Modal/types";
import type { UseDialogReturn } from "@/components/Modal/types";

type BaseModalProps = {
  children: ReactNode;
  ref: RefObject<BaseModalHandle | null>;
  closeOnBackdrop: boolean;
  onClose: () => void;
};

export function BaseModal({
  children,
  ref,
  closeOnBackdrop,
  onClose,
}: BaseModalProps): ReactElement {
  const { dialogRef, onBackdropClick }: UseDialogReturn = useDialog(
    closeOnBackdrop,
    onClose
  );

  useImperativeHandle(ref, () => ({
    show: () => {
      dialogRef.current?.showModal();
    },
    close: () => {
      dialogRef.current?.close();
    },
  }));

  return (
    <dialog
      ref={dialogRef}
      onClick={onBackdropClick}
      className="open:flex open:items-center open:justify-center backdrop:bg-black/50 
      m-0 p-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      rounded-lg h-fit w-fit bg-conversation-panel-background border-conversation-border border-1"
    >
      {children}
    </dialog>
  );
}
