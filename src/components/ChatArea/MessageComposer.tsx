//components
import { SvgIconButton } from "@/components/Common";

//enums
import { ICON_PATHS, SIZE_OPTIONS } from "@/constants/iconConfig";

//types
import type { Message } from "@/types/conversationTypes";
import type { ReactElement } from "react";
import type { UseMessageComposerReturn } from "@/components/ChatArea/types";

//hooks
import { useMessageComposer } from "@/components/ChatArea/hooks/useMessageComposer";

interface MessageComposerProps {
  onSendMessage: (message: Message) => void;
}

export function MessageComposer({
  onSendMessage,
}: MessageComposerProps): ReactElement {
  const {
    message,
    handleSendMessage,
    handleKeyPress,
    handleMessageChange,
  }: UseMessageComposerReturn = useMessageComposer({
    onSendMessage,
  });

  return (
    <div
      className="h-20 px-3 py-2 sm:px-8 sm:py-3 bg-input-container-background flex items-center gap-3 sm:gap-6 border-t
     border-conversation-border"
    >
      <div className="flex items-center flex-grow relative">
        <textarea
          className="bg-input-background text-xs sm:text-sm focus:outline-none text-white rounded-lg
          px-4 py-3 w-full resize-none min-h-[40px] sm:min-h-[48px] overflow-y-auto"
          placeholder="Type a message"
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyPress}
          rows={1}
        />
      </div>

      <SvgIconButton
        path={ICON_PATHS.SEND}
        onClick={handleSendMessage}
        className="sm:w-10 sm:h-10 sm:pl-0.5 sm:bg-green-button sm:hover:bg-green-button-hover sm:rounded-full 
        flex items-center justify-center text-white sm:hover:text-white"
        size={SIZE_OPTIONS.LARGE}
      />
    </div>
  );
}
