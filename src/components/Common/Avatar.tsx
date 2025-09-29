//types
import type { ReactElement } from "react";

interface AvatarProps {
  profileImageUrl: string;
  isOnline?: boolean;
}

export function Avatar({
  profileImageUrl,
  isOnline = false,
}: AvatarProps): ReactElement {
  return (
    <div className="relative">
      <img
        src={profileImageUrl}
        alt={"User profile image"}
        className="w-4 h-4 sm:w-10 sm:h-10 rounded-full object-cover"
      />
      {isOnline && (
        <span
          className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-online-status rounded-full
            border-2 border-header-background"
        ></span>
      )}
    </div>
  );
}
