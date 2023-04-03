import { Container, Card, Col } from "react-bootstrap";

function Repo({ repo }) {
  return (
    <Col 
    // style={{height: "100%"}}
    md={4} className="mb-4">
      <Card className="h-100">
        {repo.description && (
        <div className="iframe-container">
          <iframe
            title={repo.name}
            src={repo.description}
            width="100%"
            height="300px" // Adjust height according to your preference
            frameBorder="0"
            className="website-preview"
          ></iframe>
        </div>
        )}
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
