import { Container, Card, Col } from "react-bootstrap";

function Repo({ repo }) {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          <Card.Img
            variant="top"
            src={repo.screenshot_url || "https://via.placeholder.com/300x200"}
          />
        </a>
        <Card.Body>
          <Card.Title>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </Card.Title>
          <Card.Text>
            {repo.description || "No description available."}
          </Card.Text>
          <Card.Text>
            <strong>Technologies:</strong> {repo.language || "Not specified"}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Repo;