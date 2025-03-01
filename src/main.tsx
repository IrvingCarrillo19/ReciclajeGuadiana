import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import { Flowbite } from "flowbite-react";
import "./App.css";
import customTheme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Flowbite theme={{ theme: customTheme }}>
      <AppRoutes />
    </Flowbite>
  </React.StrictMode>
);
