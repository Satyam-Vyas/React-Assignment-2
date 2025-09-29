//libraries
import { memo } from "react";

//components
import { ConversationListHeader } from "@/components/Sidebar/ConversationListHeader";
import { ConversationListItem } from "@/components/Sidebar/ConversationListItem";

//types
import type { ReactElement } from "react";
import type { Conversation } from "@/types/conversationTypes";

interface ConversationListProps {
  selectedConversationId: string | null;
  onSelectConversation: (conversationId: string) => void;
  conversations: Conversation[];
}

export const ConversationList = memo(
  ({
    selectedConversationId,
    onSelectConversation,
    conversations,
  }: ConversationListProps): ReactElement => {
    return (
      <div className="bg-conversation-panel-background flex flex-col max-h-screen border-r-2 border-conversation-border min-w-0 overflow-hidden">
        <ConversationListHeader />

        <ul className="flex-auto overflow-auto max-h-full">
          {conversations.map((conversation: Conversation): ReactElement => {
            return (
              <li key={conversation.id}>
                <ConversationListItem
                  conversationId={conversation.id}
                  connectionName={conversation.connectionName}
                  connectionProfileImageUrl={
                    conversation.connectionProfileImageUrl
                  }
                  isSelected={selectedConversationId === conversation.id}
                  onSelectConversation={(): void =>
                    onSelectConversation(conversation.id)
                  }
                  messagePreview={
                    conversation.messages[conversation.messages.length - 1]
                      ?.text || ""
                  }
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);
