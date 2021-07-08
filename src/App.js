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
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOption";



const App =() =>
{
  return (
    <div className="App" style={{ position: "relative" }}>
        <MyNavbar/>
        <MyCarousal/>
        <TitleMessage/>
        <Particles
          className="particles particles-box"
          params={particlesOptions}
        />
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
          <hr/>
          </Container>
          </Parallax>
          </div>
          {/*Skills Section*/}
          <div>
          <Container className="container-box rounded">
          <Fade duration={500}>
          <hr/>
          <Skills/>
          </Fade>
          </Container>
          </div>
           {/*Experience*/}
          <div>
          <Container className="container-box rounded">
          <Fade duration={500}>
          <hr/>
          <Experience/>
          </Fade>
          </Container>
          </div>
          {/*TimeLine*/}
          <div>
          <Container className="container-box rounded">
          <Fade duration={500}>
          <hr/>
          <TimeLine/>
          </Fade>
          </Container>
          </div>
          {/*TimeLine*/}
          <div>
          <Container className="container-box rounded">
          <Fade duration={500}>
          <hr/>
          <ContactForm/>
          </Fade>
          </Container>
          </div>
          <hr/>
          <FooterPanel/>

          </div>

  );
};
export default App;
