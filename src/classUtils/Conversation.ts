//libraries
import { v4 as uniqueIdGenerator } from "uuid";

//types
import type {
  Conversation as ConversationInterface,
  Message,
} from "@/types/conversationTypes";

export class Conversation implements ConversationInterface {
  id: string;
  connectionName: string;
  connectionProfileImageUrl: string;
  messages: Message[];

  constructor(connectionName: string, connectionProfileImageUrl: string) {
    this.id = uniqueIdGenerator();
    this.connectionName = connectionName;
    this.connectionProfileImageUrl = connectionProfileImageUrl;
    this.messages = [];
  }
}
