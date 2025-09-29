//assets
import logo from "@/assets/whatsapp-icon.svg";

//types
import type { ReactElement } from "react";

//libraries
import { memo } from "react";

export const EmptyChatScreen = memo((): ReactElement => {
  return (
    <div className="h-full z-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-white text-center">
        <img
          src={logo}
          alt="WhatsApp"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mb-3 sm:mb-4 md:mb-6 opacity-50"
        />
        <p className="text-lg sm:text-xl md:text-2xl font-medium opacity-70 mb-2 sm:mb-3">
          No messages yet
        </p>
        <p className="text-sm sm:text-base md:text-lg opacity-50 max-w-xs sm:max-w-sm">
          Start the conversation!
        </p>
      </div>
    </div>
  );
});
