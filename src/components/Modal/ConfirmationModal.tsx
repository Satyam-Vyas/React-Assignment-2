//enums
import { MODAL_VARIANT } from "@/components/Modal/constants";

//types
import type { ReactElement, RefObject } from "react";
import type { BaseModalHandle } from "@/components/Modal/types";

//components
import { ModalLayout } from "./ModalLayout";

type ConfirmationModalProps = {
  variant: MODAL_VARIANT;
  onConfirm: () => void;
  onClose: () => void;
  closeOnBackdrop: boolean;
  confirmButtonText?: string;
  title: string;
  ref: RefObject<BaseModalHandle | null>;
};

export function ConfirmationModal({
  onConfirm,
  onClose,
  confirmButtonText = "Yes",
  variant,
  closeOnBackdrop,
  title,
  ref,
}: ConfirmationModalProps): ReactElement {
  return (
    <ModalLayout
      ref={ref}
      onClose={onClose}
      onConfirm={onConfirm}
      variant={variant}
      confirmButtonText={confirmButtonText}
      title={title}
      closeOnBackdrop={closeOnBackdrop}
    >
      <p className="text-sm text-white">This action cannot be undone.</p>
    </ModalLayout>
  );
}
