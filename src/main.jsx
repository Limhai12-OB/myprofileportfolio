import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HeadPage from "./components/headpage";
// import AboutMe from "./components/aboutme";
import ProjectSec from "./components/myproject";
import ContactSec from "./components/contactme";
import FooterSec from "./components/footer";
import Test from "./components/test";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-full">
      <HeadPage />
      {/* <AboutMe /> */}
      <Test />
      <ProjectSec />
      <ContactSec />
      <FooterSec />
    </div>
  </StrictMode>
);
