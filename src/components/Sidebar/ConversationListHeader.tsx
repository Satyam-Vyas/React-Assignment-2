//enums
import { LOGGED_IN_USER } from "@/constants/loggedInUser";
import { ICON_SIZE_CLASSES, SIZE_OPTIONS } from "@/constants/iconConfig";
import { CONNECTION_PROFILE_IMAGE_URL } from "@/constants/loggedInUser";
import { MODAL_TYPE } from "@/constants/modalType";

//components
import { ToggleButton } from "@/components/Common";
import { Avatar } from "@/components/Common";

//types
import type { ReactElement } from "react";
import type { ModalContextValue } from "@/context/types";
import type { CompactModeContextValue } from "@/context/types";

//libraries
import { memo } from "react";
import { Plus } from "lucide-react";

//hooks
import { useCompactMode } from "@/hooks/useCompactMode";
import { useModal } from "@/hooks/useModal";

export const ConversationListHeader = memo((): ReactElement => {
  const { isCompactMode, onToggleCompactMode }: CompactModeContextValue =
    useCompactMode();
  const { openModal }: ModalContextValue = useModal();

  return (
    <div className="h-20 px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between bg-header-background border-b border-conversation-border">
      <div className="flex items-center gap-4">
        <Avatar profileImageUrl={LOGGED_IN_USER.profileImageUrl} />

        <button
          onClick={() => {
            openModal({
              type: MODAL_TYPE.CREATE_CONVERSATION,
              connectionProfileImageUrl: CONNECTION_PROFILE_IMAGE_URL,
            });
          }}
          className="lg:px-3 lg:py-1.5 px-2 py-1.5 text-sm font-medium text-white bg-green-button hover:bg-green-button-hover rounded-lg transition-colors flex items-center gap-1"
        >
          <Plus className={`${ICON_SIZE_CLASSES[SIZE_OPTIONS.SMALL]}`} />
          <span className="hidden lg:block">New Chat</span>
        </button>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] lg:text-xs text-icon-color">
          Compact Mode
        </span>
        <ToggleButton
          isToggled={isCompactMode}
          onToggle={onToggleCompactMode}
        />
      </div>
    </div>
  );
});
