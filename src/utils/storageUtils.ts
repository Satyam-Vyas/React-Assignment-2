//types
import type { Conversation } from "@/types/conversationTypes";

const CONVERSATIONS_STORAGE_KEY = "whatsapp_conversations";

export function loadConversationsFromLocalStorage(): Conversation[] {
  try {
    const storedConversations = localStorage.getItem(CONVERSATIONS_STORAGE_KEY);

    if (!storedConversations) {
      return [];
    }

    const parsedConversations = JSON.parse(storedConversations);
    return parsedConversations as Conversation[];
  } catch (error) {
    console.error("Failed to load conversations from localStorage:", error);
    return [];
  }
}

export function saveConversationsToLocalStorage(
  conversations: Conversation[]
): boolean {
  try {
    const serializedConversations = JSON.stringify(conversations);

    localStorage.setItem(CONVERSATIONS_STORAGE_KEY, serializedConversations);
    return true;
  } catch (error) {
    console.error("Failed to save conversations to localStorage:", error);
    return false;
  }
}

export function clearConversationsFromLocalStorage(): boolean {
  try {
    localStorage.removeItem(CONVERSATIONS_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error("Failed to clear conversations from localStorage:", error);
    return false;
  }
}
