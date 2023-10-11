import React from "react";
import { Header } from "layout/header/header";
import { Main } from "layout/sections/main/main";
import { SkillsIcons } from "layout/sections/skills/skills-icons";
import { Projects } from "layout/sections/projects/projects";
import { Gallery } from "layout/sections/gallery/gallery";
import { Contact } from "layout/sections/contact/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SkillsIcons />
      <Projects />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
