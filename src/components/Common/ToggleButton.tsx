//types
import type { ReactElement } from "react";

type ToggleButtonProps = {
  isToggled: boolean;
  onToggle: () => void;
};

export function ToggleButton({
  isToggled,
  onToggle,
}: ToggleButtonProps): ReactElement {
  return (
    <button
      role="switch"
      aria-checked={isToggled}
      onClick={onToggle}
      className={`relative md:w-12 md:h-6 w-8 h-5 rounded-full transition-colors duration-200 focus:outline-none ${
        isToggled ? "bg-green-button" : "bg-gray-400"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 md:h-5 md:w-5 h-4 w-4 bg-white rounded-full shadow-md transition-transform duration-200 
            ${isToggled ? "md:translate-x-6 translate-x-3" : ""}`}
      ></span>
    </button>
  );
}
