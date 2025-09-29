//assets
import logo from "@/assets/whatsapp-icon.svg";

//types
import type { ReactElement } from "react";

export function NoConversationSelectedPreview(): ReactElement {
  return (
    <div className="border-conversation-border bg-app-background border-l w-full flex flex-col h-[100vh] items-center justify-center px-4 sm:px-6 lg:px-8">
      <img
        src={logo}
        alt="WhatsApp Icon"
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 mb-4 sm:mb-6"
      />
      <h1 className="text-green-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center">
        WhatsApp Web
      </h1>
      <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl leading-relaxed opacity-80 px-2">
        Select a conversation to get started!
      </p>
    </div>
  );
}
