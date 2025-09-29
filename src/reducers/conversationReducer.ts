//types
import type { Conversation } from "@/types/conversationTypes";
import type { ConversationAction } from "@/types/conversationActionTypes";

//enums
import { CONVERSATION_ACTION } from "@/constants/conversationActions";

export function conversationReducer(
  prevConversations: Conversation[],
  action: ConversationAction
): Conversation[] {
  switch (action.type) {
    case CONVERSATION_ACTION.LOAD_CONVERSATIONS:
      return action.payload.conversations;

    case CONVERSATION_ACTION.CREATE_CONVERSATION:
      return [action.payload.conversation, ...prevConversations];

    case CONVERSATION_ACTION.DELETE_CONVERSATION:
      return prevConversations.filter(
        (conversation) => conversation.id !== action.payload.conversationId
      );

    case CONVERSATION_ACTION.SEND_MESSAGE:
      return prevConversations.map((conversation) => {
        if (conversation.id === action.payload.conversationId) {
          return {
            ...conversation,
            messages: [...conversation.messages, action.payload.message],
          };
        }
        return conversation;
      });

    case CONVERSATION_ACTION.DELETE_MESSAGE:
      return prevConversations.map((conversation) => {
        if (conversation.id === action.payload.conversationId) {
          return {
            ...conversation,
            messages: conversation.messages.filter(
              (message) => message.id !== action.payload.messageId
            ),
          };
        }
        return conversation;
      });

    case CONVERSATION_ACTION.EDIT_MESSAGE:
      return prevConversations.map((conversation) => {
        if (conversation.id === action.payload.conversationId) {
          return {
            ...conversation,
            messages: conversation.messages.map((message) => {
              if (message.id === action.payload.messageId) {
                return {
                  ...message,
                  text: action.payload.newText,
                  isEdited: true,
                };
              }
              return message;
            }),
          };
        }
        return conversation;
      });

    default:
      return prevConversations;
  }
}
