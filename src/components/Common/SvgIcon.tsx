//constants
import {
  SIZE_OPTIONS,
  ICON_PATHS,
  ICON_SIZE_CLASSES,
} from "@/constants/iconConfig";

type SvgIconProps = {
  path: ICON_PATHS;
  size: SIZE_OPTIONS;
};

export function SvgIcon({ path, size }: SvgIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${ICON_SIZE_CLASSES[size]}`}
    >
      <path d={path} />
    </svg>
  );
}
