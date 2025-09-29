//libraries
import { createContext } from "react";

//types
import type { ModalContextValue } from "@/context/types";

export const ModalContext = createContext<ModalContextValue | null>(null);
