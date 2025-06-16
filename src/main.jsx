import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HeadPage from "./components/headpage";

import ProjectSec from "./components/myproject";
import ContactSec from "./components/contactme";
import FooterSec from "./components/footer";
import AboutMe from "./components/aboutme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="">
      <HeadPage />
      <AboutMe />
      <ProjectSec />
      <ContactSec />
      <FooterSec />
    </div>
  </StrictMode>
);
