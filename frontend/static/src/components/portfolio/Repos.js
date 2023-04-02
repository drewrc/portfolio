import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Repo({ repo }) {
  const [showIframe, setShowIframe] = useState(false);

  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  return (
    <Container>
      <Row>
        <Col>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
        </Col>
        {repo.html_url && (
          <Col>
            <Button onClick={toggleIframe}>
              {showIframe ? "Hide" : "Show"} website
            </Button>
          </Col>
        )}
      </Row>
      {showIframe && (
        <Row>
          <Col>
            <iframe
              src={repo.html_url}
              width="50%"
              height="500px"
              title="Website"
            />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Repo;
