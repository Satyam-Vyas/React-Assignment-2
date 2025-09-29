//hooks
import { useContext } from "react";

//contexts
import { ModalContext } from "@/context/ModalContext";

//types
import type { ModalContextValue } from "@/context/types";

export function useModal(): ModalContextValue {
  const context: ModalContextValue | null = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
