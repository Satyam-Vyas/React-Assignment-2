//types
import type { ReactElement } from "react";
import type { ModalContextValue } from "@/context/types";

//components
import { ConversationPreview } from "@/components/Sidebar/ConversationPreview";
import { SvgIconButton } from "@/components/Common";

//enums
import { ICON_PATHS, SIZE_OPTIONS } from "@/constants/iconConfig";
import { MODAL_TYPE } from "@/constants/modalType";

//hooks
import { useModal } from "@/hooks/useModal";

type ConversationListItemProps = {
  conversationId: string;
  connectionName: string;
  connectionProfileImageUrl: string;
  messagePreview: string;
  isSelected: boolean;
  onSelectConversation: () => void;
};

export function ConversationListItem({
  conversationId,
  connectionName,
  connectionProfileImageUrl,
  messagePreview,
  isSelected,
  onSelectConversation,
}: ConversationListItemProps): ReactElement {
  const { openModal }: ModalContextValue = useModal();
  return (
    <div
      className={`relative group h-20 p-3 border-b-2 border-conversation-border cursor-pointer flex justify-between items-center transition-all duration-200 
      ${
        isSelected
          ? "bg-selected-item-background"
          : "hover:bg-hover-item-background"
      }`}
      onClick={onSelectConversation}
    >
      <ConversationPreview
        connectionName={connectionName}
        connectionProfileImageUrl={connectionProfileImageUrl}
        messagePreview={messagePreview}
      />
      <div className="absolute top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 right-2">
        <SvgIconButton
          path={ICON_PATHS.DELETE}
          onClick={() =>
            openModal({ type: MODAL_TYPE.DELETE_CONVERSATION, conversationId })
          }
          className="w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white"
          size={SIZE_OPTIONS.SMALL}
        />
      </div>
    </div>
  );
}
