import { Header } from "layout/header/header";
import { Main } from "layout/sections/main/main";
import { SkillsIcons } from "layout/sections/skills/skills-icons";
import React from "react";
import { Projects } from "layout/sections/projects/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SkillsIcons />
      <Projects />
    </div>
  );
}

export default App;
