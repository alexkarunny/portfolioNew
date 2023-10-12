import React from "react";
import { Header } from "layout/header/header";
import { Main } from "layout/sections/main/main";
import { SkillsIcons } from "layout/sections/skills/skills-icons";
import { Projects } from "layout/sections/projects/projects";
import { Gallery } from "layout/sections/gallery/gallery";
import { Contact } from "layout/sections/contact/contact";
import { Slogan } from "layout/sections/slogan/slogan";
import { AboutMe } from "layout/sections/about/about-me";
import { Footer } from "layout/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutMe />
      <SkillsIcons />
      <Projects />
      <Gallery />
      <Contact />
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;
