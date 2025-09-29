//types
import type { ReactElement } from "react";

//components
import { Avatar } from "@/components/Common";

interface ProfileAvatarProps {
  imgUrl: string;
  name: string;
  isOnline: boolean;
}

export function UserProfile({
  imgUrl,
  name,
  isOnline,
}: ProfileAvatarProps): ReactElement {
  return (
    <div className="flex items-center gap-3 sm:gap-6">
      <Avatar profileImageUrl={imgUrl} isOnline={isOnline} />
      <h1 className="text-white font-medium text-sm sm:text-lg">{name}</h1>
    </div>
  );
}
