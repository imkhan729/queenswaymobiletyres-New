import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootEl = document.getElementById("root")!;
createRoot(rootEl).render(<App />);

// Fade out the initial loader once React has mounted and styles are applied.
requestAnimationFrame(() => {
  const loader = document.getElementById("initial-loader");
  if (!loader) return;
  loader.classList.add("loaded");
  // Remove after the CSS transition completes so it doesn't intercept clicks.
  setTimeout(() => loader.remove(), 350);
});
