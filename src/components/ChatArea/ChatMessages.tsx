//types
import type { Message } from "@/types/conversationTypes";
import type { ReactElement } from "react";

//components
import { ChatMessage } from "@/components/ChatArea/ChatMessage";
import { EmptyChatScreen } from "@/components/ChatArea/EmptyChatScreen";

//hooks
import { useEffect, useRef } from "react";

//classUtils
import { messageListChangeTracker } from "@/classUtils/MessageListChangeTracker";

type ChatMessagesProps = {
  selectedConversationMessages: Message[];
};

export function ChatMessages({
  selectedConversationMessages,
}: ChatMessagesProps): ReactElement {
  const hasMessages = selectedConversationMessages.length > 0;

  return (
    <div className="h-[calc(100vh-140px)] flex-grow overflow-y-auto bg-chat-background bg-fixed">
      {hasMessages ? (
        <MessageList messages={selectedConversationMessages} />
      ) : (
        <EmptyChatScreen />
      )}
    </div>
  );
}

interface MessageListProps {
  messages: Message[];
}

function MessageList({ messages }: MessageListProps): ReactElement {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageListChangeTracker.shouldAutoScroll()) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages]);

  return (
    <div className="h-full z-0">
      <div className="px-4 sm:px-8 py-6 relative z-10">
        <div className="flex flex-col space-y-4">
          {messages.map(
            (message: Message): ReactElement => (
              <ChatMessage key={message.id} message={message} />
            )
          )}
          <div ref={scrollRef} />
        </div>
      </div>
    </div>
  );
}
