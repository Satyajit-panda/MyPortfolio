import React from "react";
import Fade from 'react-reveal/Fade';
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import BgImage from "./assets/img/parallex/background.webp";

import './App.css';
//components
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousel/my-carouselcomponent";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import TimeLine from "./components/projects-timeline/projects-timeline.component";


const App =() =>
{
  return (
    <div className="App" style={{ position: "relative" }}>
        <MyNavbar/>
        <MyCarousal/>
        <TitleMessage/>
        {/* About Me Section */}
        <div>
<Parallax blur = {{ min: -1000, max: 1000}}
          bgImage={BgImage}
          bgImageAlt="parallax bg"
          strength={-200}>
          <Container className="container-box rounded">
          <Fade duration={500}>
          <About/>
          </Fade>
          </Container>
          </Parallax>
          </div>
          {/*Skills Section*/}
          <div>
          <Container className="container-box rounded">
          <Fade duration={500}>
          <Skills/>
          </Fade>
          </Container>
          </div>
          <div>
          <Container className="container-box rounded">
          <Fade duration={500}>
          <Experience/>
          </Fade>
          </Container>
          </div>
          <Container className="container-box rounded">
          <Fade duration={500}>
          <TimeLine/>
          </Fade>
          </Container>
          </div>

  );
};
export default App;
