import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/satya2.jpg'
import Button from 'react-bootstrap/Button'



import "./about.style.css";


const About = ()=>{
  return(
      <div id='about'>
      <div className="about">
      <h1 className='pt-3 text-center font-details pb-3'>ABOUT ME</h1>
      <Container>
          <Row className="pt-3 pb-5 align-items-center">
          {/* Profile Pic */}
              <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
              <Image className="profile justify-content-end" src={Profile} thumbnail fluid />
              </Row>
              </Col>
          {/* Profile Description */}    
          <Col xs={12} md={6}>
          <Row className=" align-items-start p-2 my-details rounded">
              {/*Description*/}
              Hi there! My name is <strong>&nbsp; Satyajit Panda</strong>
                <br />A Computer Science graduate from Odisha, India. Currently working as a Frontend Development Intern in Tanumanasa Service Pvt Ltd.
                 I am passionate about Web and Mobile Development using JavaScript. I aspire to be a Full Stack Web Developer with HTML, CSS, JavaScript, React.js, Express.js, Node.js, and MongoDB as my tech stack.
                <br />
                In 2020, I successfully completed my Engineering in branch 'Computer Science & Engineering'.
                <br />
                I love continuous learning to improve my skills as well as add new tools under my belt.
                <br />
                I work well in a team setting and believe in using my full potential towards providing better solutions to clients.
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products. My vision is to make a difference in the world through technology.
                <br /> <br />
                </Row>
                <Row>
              {/*buttons*/}
              <Col className="d-flex justify-content-center flex-wrap">
                   <div>
                       <a href="#Contact">
                           <Button className="m-2" variant="outline-primary"> Lets talk</Button>
                       </a>
                 </div>
                  <div>
                    <a href="#contact" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Satyajit-panda" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/satyajitpanda123/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
              </Col>
          </Row>
        </Col>
    </Row>
      </Container>

      </div>
      </div>
  )
}
export default About;