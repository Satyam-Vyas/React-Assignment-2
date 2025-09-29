//hooks
import { useRef } from "react";

//types
import type { UseDialogReturn } from "@/components/Modal/types";

export function useDialog(
  closeOnBackdrop: boolean,
  onClose: () => void
): UseDialogReturn {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const onBackdropClick = (e: React.MouseEvent<HTMLDialogElement>): void => {
    if (!closeOnBackdrop) {
      return;
    }

    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const rect = dialog.getBoundingClientRect();
    const clickInside =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!clickInside) {
      onClose();
    }
  };

  return {
    dialogRef,
    onBackdropClick,
  };
}
