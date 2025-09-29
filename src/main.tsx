//libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//styles
import "./index.css";

//components
import App from "@/App.tsx";
import { CompactModeProvider } from "@/context/CompactModeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CompactModeProvider>
      <App />
    </CompactModeProvider>
  </StrictMode>
);
