//libraries
import { createContext } from "react";

//types
import type { CompactModeContextValue } from "@/context/types";

export const CompactModeContext = createContext<
  CompactModeContextValue | undefined
>(undefined);
