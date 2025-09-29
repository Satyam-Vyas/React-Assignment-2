//enums
import { MODAL_VARIANT } from "@/components/Modal/constants";

//types
import type { ReactElement, ReactNode, RefObject } from "react";
import type { BaseModalHandle } from "@/components/Modal/types";

//components
import { BaseModal } from "@/components/Modal/BaseModal";

type ModalLayoutProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onConfirm: () => void;
  variant: MODAL_VARIANT;
  confirmButtonText?: string;
  ref: RefObject<BaseModalHandle | null>;
  closeOnBackdrop: boolean;
};

export function ModalLayout({
  title,
  children,
  onClose,
  onConfirm,
  variant,
  confirmButtonText = "Yes",
  closeOnBackdrop,
  ref,
}: ModalLayoutProps): ReactElement {
  return (
    <BaseModal ref={ref} closeOnBackdrop={closeOnBackdrop} onClose={onClose}>
      <div className="w-[92vw] max-w-md shadow-xl flex flex-col gap-1">
        <h2 className="px-4 pt-4 pb-2 text-base font-semibold text-white">
          {title}
        </h2>

        {children && <div className="px-4 py-2">{children}</div>}

        <div className="px-4 pb-4 pt-2 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className={`px-3 py-1.5 text-sm rounded-md text-white
            ${
              variant === MODAL_VARIANT.SUCCESS
                ? "bg-red-button hover:bg-red-button-hover"
                : "bg-cancel-button hover:bg-cancel-button-hover"
            } transition-colors`}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`px-3 py-1.5 text-sm rounded-md text-white transition-colors ${
              variant === MODAL_VARIANT.SUCCESS
                ? "bg-green-button hover:bg-green-button-hover"
                : "bg-red-button hover:bg-red-button-hover"
            }`}
          >
            {confirmButtonText}
          </button>
        </div>
      </div>
    </BaseModal>
  );
}
