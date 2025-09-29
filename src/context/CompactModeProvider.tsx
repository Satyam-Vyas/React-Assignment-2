//hooks
import { useCallback, useState } from "react";

//context
import { CompactModeContext } from "@/context/CompactModeContext";

//types
import type { ReactNode } from "react";

export const CompactModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isCompactMode, setIsCompactMode] = useState(false);

  const onToggleCompactMode = useCallback((): void => {
    setIsCompactMode((isCompactMode) => !isCompactMode);
  }, []);

  return (
    <CompactModeContext.Provider value={{ isCompactMode, onToggleCompactMode }}>
      {children}
    </CompactModeContext.Provider>
  );
};
