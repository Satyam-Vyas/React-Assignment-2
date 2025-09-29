//hooks
import { useCallback, useState } from "react";

//types
import type { UseTextPromptInputReturn } from "@/components/Modal/types";

export interface UseTextPromptInputProps {
  initialValue?: string;
  onSubmit: (value: string) => void;
  onClose: () => void;
}

export function useTextPromptInput({
  initialValue = "",
  onSubmit,
  onClose,
}: UseTextPromptInputProps): UseTextPromptInputReturn {
  const [userInput, setUserInput] = useState<string>(initialValue);

  const handleUserInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
      setUserInput(e.target.value);
    },
    []
  );

  const handleModalSubmit = useCallback(() => {
    if (userInput.trim()) {
      onSubmit(userInput);
    }
    setUserInput("");
  }, [userInput, onSubmit]);

  const handleModalClose = useCallback(() => {
    onClose();
    setUserInput("");
  }, [onClose]);

  return {
    userInput,
    setUserInput,
    handleUserInputChange,
    handleModalSubmit,
    handleModalClose,
  };
}
