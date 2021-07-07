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


const App =() =>
{
  return (
    <div className="App" style={{ position: "relative" }}>
        <MyNavbar/>
        <MyCarousal/>
        <TitleMessage/>
        {/* About Me Section */}
        <div>
<Parallax blur = {{ min: -30, max: 30 }}
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
    </div>
  );
}

export default App;
