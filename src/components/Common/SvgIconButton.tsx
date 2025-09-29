//constants
import { SIZE_OPTIONS, ICON_PATHS } from "@/constants/iconConfig";

//components
import { SvgIcon } from "@/components/Common";

//types
import type { ReactElement } from "react";

interface IconButtonProps {
  path: ICON_PATHS;
  onClick?: () => void;
  className?: string;
  size?: SIZE_OPTIONS;
}

export function SvgIconButton({
  path,
  onClick,
  className = "",
  size = SIZE_OPTIONS.MEDIUM,
}: IconButtonProps): ReactElement {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`text-icon-color hover:text-white transition-colors ${className}`}
    >
      <SvgIcon path={path} size={size} />
    </button>
  );
}
