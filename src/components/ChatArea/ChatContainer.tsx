//components
import { ChatHeader } from "@/components/ChatArea/ChatHeader";
import { ChatMessages } from "@/components/ChatArea/ChatMessages";
import { MessageComposer } from "@/components/ChatArea/MessageComposer";

//types
import type { Conversation, Message } from "@/types/conversationTypes";
import type { ReactElement } from "react";

//hooks
import { useMemo } from "react";

//utils
import { getSelectedConversation } from "@/components/ChatArea/utils/getSelectedConversation";

type ChatContainerProps = {
  selectedConversationId: string;
  conversations: Conversation[];
  onSendMessage: (message: Message) => void;
};

export function ChatContainer({
  selectedConversationId,
  conversations,
  onSendMessage,
}: ChatContainerProps): ReactElement {
  const selectedConversation: Conversation | undefined = useMemo(
    () => getSelectedConversation(conversations, selectedConversationId),
    [conversations, selectedConversationId]
  );

  return (
    <div className="w-full flex flex-col h-[100vh]">
      <ChatHeader
        connectionName={selectedConversation?.connectionName}
        connectionProfileImageUrl={
          selectedConversation?.connectionProfileImageUrl
        }
      />
      <ChatMessages
        selectedConversationMessages={selectedConversation?.messages || []}
      />
      <MessageComposer
        onSendMessage={onSendMessage}
        key={selectedConversationId}
      />
    </div>
  );
}
