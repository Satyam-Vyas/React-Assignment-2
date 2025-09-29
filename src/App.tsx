//hooks
import { useConversations } from "@/hooks/useConversations";

//components
import { ModalProvider } from "@/context/ModalProvider";
import ModalRoot from "@/components/Modal";
import ChatApp from "@/components/ChatApp";

//types
import type { ReactElement } from "react";
import type { UseConversationsReturn } from "@/hooks/types";

export default function App(): ReactElement {
  const {
    conversations,
    selectedConversationId,
    handleSelectConversation,
    handleCreateConversation,
    handleDeleteConversation,
    handleDeleteMessage,
    handleEditMessage,
    handleSendMessage,
  }: UseConversationsReturn = useConversations();

  return (
    <ModalProvider>
      <ChatApp
        selectedConversationId={selectedConversationId}
        conversations={conversations}
        handleSelectConversation={handleSelectConversation}
        handleSendMessage={handleSendMessage}
      />
      <ModalRoot
        handleCreateConversation={handleCreateConversation}
        handleDeleteConversation={handleDeleteConversation}
        handleDeleteMessage={handleDeleteMessage}
        handleEditMessage={handleEditMessage}
      />
    </ModalProvider>
  );
}
