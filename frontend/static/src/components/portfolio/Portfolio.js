import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FinalProject from "./finalproject/FinalProject";
import HackPulse from "./hackpulse/HackPulseNews";
import PixelPerfect from "./pixelperfect/PixelPerfect";
import Restaurant from "./restaurant/ReactRestaurant";
import Repo from "./Repos";
import TurnBasedGame from "./TurnBasedGame/TurnBasedGame";

function Portfolio() {
  const [repos, setRepos] = useState(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;

  const getGitHubRepos = async () => {
    const response = await fetch("/api_v1/github_repos/");
    const data = await response.json();
    setRepos(data);
    console.log(data);
  };

  useEffect(() => {
    getGitHubRepos();
  }, []);

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const maxPages = repos ? Math.ceil(repos.length / itemsPerPage) - 1 : 0;

  return (
    <main style={{ marginTop: "-5%" }}>
      <Container style={{ backgroundColor: "rgb(247, 239, 239, 0.2)" }}>
        <Row>
          <Col style={{ marginTop: "5%" }}>
            <h3
              style={{
                marginTop: "5%",
                borderTop: "5px solid rgb(247, 239, 239, 0.2)",
                borderLeft: "5px solid rgb(247, 239, 239, 0.2)",
              }}
              className="main-container"
              id="header-about"
            >
              Portfolio
            </h3>
            <Row>
                <FinalProject/>
            </Row>
            <Row>
                <HackPulse/>
            </Row>
            <Row>
                <Restaurant/>
            </Row>
            <Row>
                <PixelPerfect/>
            </Row>
            <Row>
                <TurnBasedGame />
            </Row>
            
            {/**REPOS JSX */}

            {/* <Row>
            <h1>Github Repos</h1>
              {repos &&
                repos
                  .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
                  .map((repo) => <Repo key={repo.id} repo={repo} />)}
            </Row>
            <Row className="justify-content-center">
              <Col xs="auto">
                <Button disabled={page === 0} onClick={handlePrev}>
                  Previous
                </Button>
              </Col>
              <Col xs="auto">
                <Button disabled={page === maxPages} onClick={handleNext}>
                  Next
                </Button>
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Portfolio;
