import { createRoot } from "react-dom/client"
import { StrictMode } from "react";
import "./assets/css/global.css";
import RouterConfig from "./config/router.config";
// import App from "./pages/App";

createRoot(document.getElementById('root')!)
.render(
  <StrictMode>
    <RouterConfig/>  
  </StrictMode>
);     