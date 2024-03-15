import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

const k = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!k) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={k}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
