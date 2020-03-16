import React, { useEffect, useState } from "react";
import { Container, Row, Card } from "react-bootstrap";

const GitHubProjects = () => {
  const [projects, updateProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/willcruse/repos")
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        json.sort((a, b) => {
            return  Date.parse(b.updated_at) - Date.parse(a.updated_at) 
        })
        updateProjects(json.filter(val => val.name !== "wiki"));
      });
  }, []);
  return (
    <Container fluid>
      <Row>
        <h1>GitHub Repos</h1>
      </Row>
      {projects.map((val, ind) => {
        return <GitHubProject value={val} key={ind} />;
      })}
    </Container>
  );
};

const GitHubProject = props => (
  <Card style={{marginBottom: "0.5rem"}}>
    <Card.Header>{props.value.name}</Card.Header>
    <Card.Body>
        {props.value.description == null ? <></> : <Card.Text>{props.value.description}</Card.Text>}
      <Card.Link href={props.value.html_url}>GitHub Repo</Card.Link>
    </Card.Body>
  </Card>
);

export default GitHubProjects;
