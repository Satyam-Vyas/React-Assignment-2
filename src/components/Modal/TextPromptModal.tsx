//enums
import type { MODAL_VARIANT } from "@/components/Modal/constants";

//components
import { ModalLayout } from "@/components/Modal/ModalLayout";

//types
import type { BaseModalHandle } from "@/components/Modal/types";
import type { ReactElement, RefObject } from "react";

//hooks
import { useTextPromptInput } from "@/components/Modal/hooks/useTextPromptInput";

type TextPromptModalProps = {
  onSubmit: (userInputValue: string) => void;
  onClose: () => void;
  submitButtonText?: string;
  variant: MODAL_VARIANT;
  closeOnBackdrop: boolean;
  title: string;
  isMultiline: boolean;
  ref: RefObject<BaseModalHandle | null>;
  initialValue?: string;
};

export function TextPromptModal({
  onSubmit,
  onClose,
  submitButtonText = "Yes",
  variant,
  closeOnBackdrop,
  title,
  isMultiline,
  ref,
  initialValue,
}: TextPromptModalProps): ReactElement {
  const {
    userInput,
    handleUserInputChange,
    handleModalSubmit,
    handleModalClose,
  } = useTextPromptInput({
    initialValue,
    onSubmit,
    onClose,
  });
  return (
    <ModalLayout
      ref={ref}
      variant={variant}
      onConfirm={handleModalSubmit}
      onClose={handleModalClose}
      closeOnBackdrop={closeOnBackdrop}
      title={title}
      confirmButtonText={submitButtonText}
    >
      {isMultiline ? (
        <textarea
          value={userInput}
          onChange={handleUserInputChange}
          className="w-full h-32 text-white rounded-lg p-3 bg-input-background focus:outline-none"
          placeholder="Edit your message..."
        />
      ) : (
        <input
          value={userInput}
          onChange={handleUserInputChange}
          className="w-full text-white rounded-lg p-2 bg-input-background focus:outline-none"
        />
      )}
    </ModalLayout>
  );
}
