export interface Message {
  id: string;
  text: string;
  timestamp: number;
  isEdited: boolean;
  senderId: string;
}

export interface Conversation {
  id: string;
  connectionName: string;
  connectionProfileImageUrl: string;
  messages: Message[];
}
