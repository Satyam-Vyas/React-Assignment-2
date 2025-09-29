//enums
import { MESSAGE_LIST_CHANGE_EVENT } from "@/constants/messageListChangeEvents";

interface MessageListChange {
  type: MESSAGE_LIST_CHANGE_EVENT;
  timestamp: number;
}

class MessageListChangeTracker {
  private static instance: MessageListChangeTracker;
  private actions: MessageListChange[] = [];
  private maxActionsToStore: number = 50;

  private constructor() {}

  public static getInstance(): MessageListChangeTracker {
    if (!MessageListChangeTracker.instance) {
      MessageListChangeTracker.instance = new MessageListChangeTracker();
    }
    return MessageListChangeTracker.instance;
  }

  public trackAction(type: MESSAGE_LIST_CHANGE_EVENT): void {
    const action: MessageListChange = {
      type,
      timestamp: Date.now(),
    };

    this.actions.push(action);

    if (this.actions.length > this.maxActionsToStore) {
      this.actions = this.actions.slice(
        this.actions.length - this.maxActionsToStore
      );
    }
  }

  public getLastAction(): MessageListChange | undefined {
    return this.actions[this.actions.length - 1];
  }

  public shouldAutoScroll(): boolean {
    const autoScrollActionTypes = [
      MESSAGE_LIST_CHANGE_EVENT.MESSAGE_SENT,
      MESSAGE_LIST_CHANGE_EVENT.CONVERSATION_CHANGED,
    ];

    for (const actionType of autoScrollActionTypes) {
      if (this.getLastAction()?.type === actionType) {
        return true;
      }
    }

    return false;
  }

  public clearActions(): void {
    this.actions = [];
  }
}

export const messageListChangeTracker = MessageListChangeTracker.getInstance();
