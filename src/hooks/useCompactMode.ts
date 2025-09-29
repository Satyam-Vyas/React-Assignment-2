//hooks
import { useContext } from "react";

//context
import { CompactModeContext } from "@/context/CompactModeContext";

//types
import type { CompactModeContextValue } from "@/context/types";

export const useCompactMode = (): CompactModeContextValue => {
  const context: CompactModeContextValue | undefined =
    useContext(CompactModeContext);
  if (!context) {
    throw new Error("useCompactMode must be used within a CompactModeProvider");
  }
  return context;
};
