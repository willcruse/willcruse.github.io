import React from "react";
import logo from "./willPic.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import GitHubProjects from "./GitHubProjects"

function App() {
  return (
    <Container fluid style={{marginTop: "1rem"}}>
      <Row>
        <Col>
          <ProfileComp />
        </Col>
        <Col>
        </Col>
        <Col>
          <GitHubProjects />
        </Col>
      </Row>
    </Container>
  );
}

const ProfileComp = () => {
  return (
    <Card style={{maxWidth: '15rem'}}>
      <Card.Img src={logo} variant="top"/>
      <Card.Header><b>Will Cruse</b></Card.Header>
      <Card.Body>
        <Card.Title><b>About Me</b></Card.Title>
        <Card.Text>
          I am a second year Computer Science student at the University of Bath.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};




export default App;
