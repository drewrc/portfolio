import React from "react";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Repo from "./Repos";

function Portfolio() {
  const [repo, setRepo] = useState([]);

  const getGitHubRepos = async () => {
    const response = await fetch("/api_v1/github_repos/");
    const data = await response.json();
    setRepo(data);
    console.log(data);
  };

  useEffect(() => {
    getGitHubRepos();
  }, []);

  console.log({ repo });

  const reposHTML = repo.map((repo) => (
    <Repo key={repo.id} repo={repo} />
  ));

  return (
    <Container>
      <h1>My Portfolio</h1>
      <Row>{reposHTML}</Row>
    </Container>
  );
}

export default Portfolio;