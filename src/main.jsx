import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HeadPage from "./components/headpage";
import AboutMe from "./components/aboutme";
import ProjectSec from "./components/myproject";
import ContactSec from "./components/contactme";
import FooterSec from "./components/footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeadPage />
    <AboutMe />
    <ProjectSec />
    <ContactSec />
    <FooterSec />
  </StrictMode>
);
