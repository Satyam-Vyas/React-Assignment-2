export interface UseMessageComposerReturn {
  message: string;
  setMessage: (message: string) => void;
  handleSendMessage: () => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  handleMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type TimestampFormatter = {
  condition: (daysElapsed: number) => boolean;
  format: (messageDate: Date) => string;
};
