//components
import { NoConversationSelectedPreview } from "@/components/ChatArea/NoConversationSelectedPreview";
import ChatContainer from "@/components/ChatArea";
import ConversationList  from "@/components/Sidebar";

//types
import type { ReactElement } from "react";
import type { Conversation, Message } from "@/types/conversationTypes";

type ChatAppProps = {
  selectedConversationId: string | null;
  conversations: Conversation[];
  handleSelectConversation: (conversationId: string) => void;
  handleSendMessage: (message: Message) => void;
};

export default function ChatApp({
  selectedConversationId,
  conversations,
  handleSelectConversation,
  handleSendMessage,
}: ChatAppProps): ReactElement {
  return (
    <div className="grid grid-cols-mobile sm:grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden">
      <ConversationList
        selectedConversationId={selectedConversationId}
        onSelectConversation={handleSelectConversation}
        conversations={conversations}
      />
      {selectedConversationId ? (
        <ChatContainer
          selectedConversationId={selectedConversationId}
          conversations={conversations}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <NoConversationSelectedPreview />
      )}
    </div>
  );
}
