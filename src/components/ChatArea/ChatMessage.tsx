//types
import type { Message } from "@/types/conversationTypes";
import type { ReactElement } from "react";
import type {
  CompactModeContextValue,
  ModalContextValue,
} from "@/context/types";

//constants
import { LOGGED_IN_USER } from "@/constants/loggedInUser";

//enums
import { ICON_PATHS, SIZE_OPTIONS } from "@/constants/iconConfig";
import { MODAL_TYPE } from "@/constants/modalType";

//components
import { SvgIconButton } from "@/components/Common";

//utils
import { formatTimestamp } from "@/components/ChatArea/utils/formatTimestamp";

//hooks
import { useCompactMode } from "@/hooks/useCompactMode";
import { useModal } from "@/hooks/useModal";

type ChatMessageProps = {
  message: Message;
};

export function ChatMessage({ message }: ChatMessageProps): ReactElement {
  const { isCompactMode }: CompactModeContextValue = useCompactMode();
  const { openModal }: ModalContextValue = useModal();
  const isSentByCurrentUser = message.senderId === LOGGED_IN_USER.userId;

  return (
    <div
      className={`relative group pl-2 pr-2 pt-2 text-sm rounded-lg flex flex-col max-w-[60%] w-fit ${
        isSentByCurrentUser
          ? "bg-message-outgoing self-end rounded-tr-none"
          : "bg-message-incoming self-start rounded-tl-none"
      }
      ${isCompactMode ? "pb-2" : "pb-0"}
      `}
    >
      <div className="text-white">
        <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-5">
          {message.text}
        </pre>
        {!isCompactMode && (
          <div className="text-[10px] text-gray-300 text-right">
            {formatTimestamp(message.timestamp)}
          </div>
        )}
      </div>

      <div className="flex justify-end items-center">
        {isSentByCurrentUser && (
          <div
            className={`absolute -top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-1 ${
              isSentByCurrentUser ? "-right-0" : "-left-0"
            }`}
          >
            <SvgIconButton
              path={ICON_PATHS.EDIT}
              onClick={(): void =>
                openModal({
                  type: MODAL_TYPE.EDIT_MESSAGE,
                  messageId: message.id,
                  originalText: message.text,
                })
              }
              className="w-6 h-6 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white"
              size={SIZE_OPTIONS.SMALL}
            />
            <SvgIconButton
              path={ICON_PATHS.DELETE}
              onClick={(): void =>
                openModal({
                  type: MODAL_TYPE.DELETE_MESSAGE,
                  messageId: message.id,
                })
              }
              className="w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white"
              size={SIZE_OPTIONS.SMALL}
            />
          </div>
        )}
      </div>
    </div>
  );
}
