//components
import { UserProfile } from "@/components/Common";
import { SvgIconButton } from "@/components/Common";

//enums
import { ICON_PATHS } from "@/constants/iconConfig";

//types
import type { ReactElement } from "react";

//libraries
import { memo } from "react";

//constants
import { CONNECTION_PROFILE_IMAGE_URL } from "@/constants/loggedInUser";

type ChatHeaderProps = {
  connectionName: string | undefined;
  connectionProfileImageUrl: string | undefined;
};

export const ChatHeader = memo(
  ({
    connectionName,
    connectionProfileImageUrl,
  }: ChatHeaderProps): ReactElement => {
    return (
      <div className="h-20 px-2 sm:px-4 py-2 sm:py-3 flex justify-between items-center bg-header-background border-b border-conversation-border">
        <UserProfile
          imgUrl={connectionProfileImageUrl || CONNECTION_PROFILE_IMAGE_URL}
          name={connectionName || "Unknown user"}
          isOnline={false}
        />
        <div className="flex items-center gap-2 sm:gap-12 pr-1 sm:pr-6">
          <SvgIconButton path={ICON_PATHS.VIDEO_CALL} />
          <SvgIconButton path={ICON_PATHS.VOICE_CALL} />
          <SvgIconButton path={ICON_PATHS.SEARCH} />
        </div>
      </div>
    );
  }
);
