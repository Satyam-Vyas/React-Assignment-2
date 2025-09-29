import { CONVERSATION_ACTION } from "@/constants/conversationActions";
import type { Conversation, Message } from "@/types/conversationTypes";

interface LoadConversationsAction {
  type: CONVERSATION_ACTION.LOAD_CONVERSATIONS;
  payload: {
    conversations: Conversation[];
  };
}

interface CreateConversationAction {
  type: CONVERSATION_ACTION.CREATE_CONVERSATION;
  payload: {
    conversation: Conversation;
  };
}

interface DeleteConversationAction {
  type: CONVERSATION_ACTION.DELETE_CONVERSATION;
  payload: {
    conversationId: string | null;
  };
}

interface SendMessageAction {
  type: CONVERSATION_ACTION.SEND_MESSAGE;
  payload: {
    conversationId: string | null;
    message: Message;
  };
}

interface DeleteMessageAction {
  type: CONVERSATION_ACTION.DELETE_MESSAGE;
  payload: {
    conversationId: string | null;
    messageId: string;
  };
}

interface EditMessageAction {
  type: CONVERSATION_ACTION.EDIT_MESSAGE;
  payload: {
    conversationId: string | null;
    messageId: string;
    newText: string;
  };
}

export type ConversationAction =
  | LoadConversationsAction
  | CreateConversationAction
  | DeleteConversationAction
  | SendMessageAction
  | DeleteMessageAction
  | EditMessageAction;
