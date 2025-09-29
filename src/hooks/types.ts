//types
import type { Conversation, Message } from "@/types/conversationTypes";

export type UseConversationsReturn = {
  selectedConversationId: string | null;
  conversations: Conversation[];
  handleSelectConversation: (conversationId: string) => void;
  handleCreateConversation: (conversation: Conversation) => void;
  handleSendMessage: (message: Message) => void;
  handleDeleteMessage: (messageId: string) => void;
  handleEditMessage: (messageId: string, newText: string) => void;
  handleDeleteConversation: (conversationId: string) => void;
};
