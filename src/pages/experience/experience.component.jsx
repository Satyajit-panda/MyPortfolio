import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tanumanasa from "../../assets/img/experience/tanumanasa.png";
import  Stl  from "../../assets/img/experience/STL.jpg";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={Tanumanasa} alt="cognizant logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Frontend Development Intern</Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong className="body-title-style ">Vichayan</strong>
                    <br />
                    <strong>Technology:</strong> HTML5,CSS3,JavaScript,Bootstrap,ReactJS
                    <br />
                    <strong>Duration:</strong> March 2021 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Well Trained</strong> Web Technology</li>
                      <li><strong>Developed</strong> small features in website using React.
                      </li>
                      <li><strong>Provided</strong> assistance to senior colleagues according to changes in client specifications.
                      </li>
                      <li><strong>Created</strong> Vichayan Web application using React.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>


      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={Stl} alt="Stl logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Testing Analyst</Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong>Technology:</strong> Unit Testing, Junit
                    <br />
                    <strong>Duration:</strong>   Sept 2020 - Feb 2021
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Tested</strong> Unit Testing using Junit </li>
                      <li><strong>Worked</strong> with the team of experienced Testers to understand coding
                        standards and architectural practices.
                      </li>
                      <li><strong>Provided</strong> assistance to Sr. Developers with tasks write test cases and make these to test 
                      suite and executing Test Suites
                      </li>
                      <li><strong>Wrote</strong> Test cases, priority level of bugs & their seviority</li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;