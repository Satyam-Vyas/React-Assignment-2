//reducers
import { conversationReducer } from "@/reducers/conversationReducer";

//types
import type { Conversation, Message } from "@/types/conversationTypes";
import type { ConversationAction } from "@/types/conversationActionTypes";
import type { Dispatch } from "react";
import type { UseConversationsReturn } from "@/hooks/types";

//enums
import { CONVERSATION_ACTION } from "@/constants/conversationActions";
import { MESSAGE_LIST_CHANGE_EVENT } from "@/constants/messageListChangeEvents";

//hooks
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";

//classUtils
import { messageListChangeTracker } from "@/classUtils/MessageListChangeTracker";

//utils
import {
  loadConversationsFromLocalStorage,
  saveConversationsToLocalStorage,
} from "@/utils/storageUtils";

export function useConversations(): UseConversationsReturn {
  const [selectedConversationId, setSelectedConversationId] = useState<
    string | null
  >(null);
  const [isConversationsLoaded, setIsConversationsLoaded] = useState(false);
  const [conversations, dispatch]: [
    Conversation[],
    Dispatch<ConversationAction>
  ] = useReducer(conversationReducer, []);

  useEffect(() => {
    if (!isConversationsLoaded) return;
    saveConversationsToLocalStorage(conversations);
  }, [conversations, isConversationsLoaded]);

  useLayoutEffect(() => {
    if (isConversationsLoaded) return;
    const storedConversations = loadConversationsFromLocalStorage();
    if (storedConversations.length > 0) {
      dispatch({
        type: CONVERSATION_ACTION.LOAD_CONVERSATIONS,
        payload: { conversations: storedConversations },
      });
    }
    setIsConversationsLoaded(true);
  }, [isConversationsLoaded]);

  const handleSelectConversation = useCallback(
    (conversationId: string): void => {
      setSelectedConversationId(conversationId);
      messageListChangeTracker.trackAction(
        MESSAGE_LIST_CHANGE_EVENT.CONVERSATION_CHANGED
      );
    },
    []
  );

  const handleCreateConversation = useCallback(
    (conversation: Conversation): void => {
      dispatch({
        type: CONVERSATION_ACTION.CREATE_CONVERSATION,
        payload: { conversation },
      });
    },
    []
  );

  const handleDeleteConversation = useCallback(
    (conversationId: string): void => {
      dispatch({
        type: CONVERSATION_ACTION.DELETE_CONVERSATION,
        payload: { conversationId },
      });
      setSelectedConversationId(null);
    },
    []
  );

  const handleSendMessage = useCallback(
    (message: Message): void => {
      dispatch({
        type: CONVERSATION_ACTION.SEND_MESSAGE,
        payload: { conversationId: selectedConversationId, message },
      });
      messageListChangeTracker.trackAction(
        MESSAGE_LIST_CHANGE_EVENT.MESSAGE_SENT
      );
    },
    [selectedConversationId]
  );

  const handleDeleteMessage = useCallback(
    (messageId: string): void => {
      dispatch({
        type: CONVERSATION_ACTION.DELETE_MESSAGE,
        payload: { conversationId: selectedConversationId, messageId },
      });
      messageListChangeTracker.trackAction(
        MESSAGE_LIST_CHANGE_EVENT.MESSAGE_DELETED
      );
    },
    [selectedConversationId]
  );

  const handleEditMessage = useCallback(
    (messageId: string, newText: string): void => {
      dispatch({
        type: CONVERSATION_ACTION.EDIT_MESSAGE,
        payload: { conversationId: selectedConversationId, messageId, newText },
      });
      messageListChangeTracker.trackAction(
        MESSAGE_LIST_CHANGE_EVENT.MESSAGE_EDITED
      );
    },
    [selectedConversationId]
  );

  return {
    selectedConversationId,
    conversations,
    handleSelectConversation,
    handleCreateConversation,
    handleSendMessage,
    handleDeleteMessage,
    handleEditMessage,
    handleDeleteConversation,
  };
}
