import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import emailjs from "@emailjs/browser";
import "./index.css";
import App from "./App.tsx";
import "@fontsource-variable/schibsted-grotesk";

emailjs.init("mnQvg5uQfSbVY8bSR"); // Replace with your public key

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
