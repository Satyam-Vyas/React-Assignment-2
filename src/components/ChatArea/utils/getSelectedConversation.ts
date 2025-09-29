//types
import type { Conversation } from "@/types/conversationTypes";

export function getSelectedConversation(
  conversations: Conversation[],
  selectedConversationId: string
): Conversation | undefined {
  return conversations.find(
    (conversation: Conversation) => conversation.id === selectedConversationId
  );
}
