//hooks
import { useState, useCallback } from "react";

//types
import type { Message as MessageInterface } from "@/types/conversationTypes";
import type { UseMessageComposerReturn } from "../types";

//classUtils
import { Message } from "@/classUtils/Message";

//utils
import { isEnterPressedWithoutShift } from "@/components/ChatArea/utils/isEnterKeyPressed";

interface UseMessageComposerProps {
  onSendMessage: (message: MessageInterface) => void;
}

export function useMessageComposer({
  onSendMessage,
}: UseMessageComposerProps): UseMessageComposerReturn {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = useCallback((): void => {
    const trimmedMessage = message.trim();

    if (trimmedMessage) {
      onSendMessage(new Message(trimmedMessage));
      setMessage("");
    }
  }, [message, onSendMessage]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent): void => {
      if (isEnterPressedWithoutShift(e)) {
        e.preventDefault();
        handleSendMessage();
      }
    },
    [handleSendMessage]
  );

  const handleMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      setMessage(e.target.value);
    },
    []
  );

  return {
    message,
    setMessage,
    handleSendMessage,
    handleKeyPress,
    handleMessageChange,
  };
}
