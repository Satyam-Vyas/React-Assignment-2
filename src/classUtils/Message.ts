//constants
import { LOGGED_IN_USER } from "@/constants/loggedInUser";

//types
import type { Message as MessageInterface } from "@/types/conversationTypes";

//libraries
import { v4 as uniqueIdGenerator } from "uuid";

export class Message implements MessageInterface {
  id: string;
  text: string;
  timestamp: number;
  senderId: string;
  isEdited: boolean;

  constructor(text: string, senderId: string = LOGGED_IN_USER.userId) {
    this.id = uniqueIdGenerator();
    this.text = text;
    this.timestamp = Date.now();
    this.senderId = senderId;
    this.isEdited = false;
  }
}
