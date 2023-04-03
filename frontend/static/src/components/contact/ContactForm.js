import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function ContactForm() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  useEffect(() => {
    const sendEmail = async () => {
      try {
        const response = await fetch("/portfolio/send-email/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name,
            message,
          }),
          credentials: 'include'
        });
        if (response.ok) {
          handleClose();
          setEmail("");
          setName("");
          setMessage("");
          setIsSubmitting(false);
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.detail);
          setIsSubmitting(false);
        }
      } catch (error) {
        setErrorMessage("An error occurred. Please try again later.");
        setIsSubmitting(false);
      }
    };

    if (isSubmitting) {
      sendEmail();
    }
  }, [isSubmitting]);

  return (
    <div className="social-text">
      {/* <Button variant="primary" onClick={handleShow}>
        Contact Me Here
      </Button> */}

      <Modal show={show} style={{ marginTop: "10%" }} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="social-text">Email Drew</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="social-text" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="social-text" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="social-text" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            {errorMessage && (
              <p className="text-danger">{errorMessage}</p>
            )}

            <Button
              className="social-text"
              variant="secondary"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Close
            </Button>
            <Button
              className="social-text"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ContactForm;
