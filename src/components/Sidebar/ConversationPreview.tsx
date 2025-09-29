//types
import type { ReactElement } from "react";
import type { CompactModeContextValue } from "@/context/types";

//components
import { Avatar } from "@/components/Common";
import { Tooltip } from "@/components/Common";

//hooks
import { useCompactMode } from "@/hooks/useCompactMode";

interface ConversationPreviewProps {
  connectionName: string;
  connectionProfileImageUrl: string;
  messagePreview: string;
}

export function ConversationPreview({
  connectionName,
  connectionProfileImageUrl,
  messagePreview,
}: ConversationPreviewProps): ReactElement {
  const { isCompactMode }: CompactModeContextValue = useCompactMode();

  return (
    <div className="flex items-center gap-3 sm:gap-6 w-full min-w-0">
      <div className="flex-shrink-0">
        <Avatar profileImageUrl={connectionProfileImageUrl} isOnline={false} />
      </div>
      <div className="flex flex-col min-w-0 flex-1">
        <h1
          className="text-white font-medium text-sm sm:text-lg truncate"
          title={connectionName}
        >
          {connectionName}
        </h1>
        {!isCompactMode && (
          <Tooltip content={messagePreview}>
            <div className="text-xs sm:text-sm text-gray-300 truncate max-w-full hover:text-gray-100 cursor-pointer transition-colors">
              {messagePreview}
            </div>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
