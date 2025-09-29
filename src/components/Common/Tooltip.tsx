//types
import type { ReactElement, ReactNode } from "react";

//hooks
import { useState } from "react";

interface TooltipProps {
  children: ReactNode;
  content: string;
}

export function Tooltip({ children, content }: TooltipProps): ReactElement {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block w-[80%]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {content && isHovered && (
        <div
          className="z-[100] absolute left-0 top-full mt-1 bg-conversation-panel-background text-white text-sm px-3 py-2 rounded-md shadow-xl border border-gray-700
            whitespace-pre-wrap break-words w-fit max-w-full"
        >
          {content}
        </div>
      )}
    </div>
  );
}
