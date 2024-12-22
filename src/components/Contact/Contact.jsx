import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  const [formDetails, setFormDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Check if the input field is the phoneNumber field
    if (name === "phoneNumber") {
      // Regular expression to validate the phone number
      const regex = /^[0-9+\-() ]*$/;

      // If value matches the regex, update the state
      if (regex.test(value)) {
        setFormDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
      }
    } else {
      // For other inputs, update the state normally
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qh1c1m8",
        "template_7jhktnz",
        e.target,
        "mRlQfKoUVYb1_0NPW"
      )
      .then(
        () => {
          alert("Your message has been sent.");
          setFormDetails({
            name: "",
            phoneNumber: "",
            email: "",
            message: "",
          });
        },
        () => {
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <div>
      <main className="contact-page">
        <Container fluid className="contact-section">
          <div className="contact-header">
            <p>{t("contact.Contactjs.header")}</p>
          </div>
          <Container className="contact-container">
            <Row className="justify-content-md-center">
              <Col md={6}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder={t("contact.Contactjs.name")}
                      name="name"
                      className="input-style"
                      value={formDetails.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder={t("contact.Contactjs.phone")}
                      name="phoneNumber"
                      className="input-style"
                      value={formDetails.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder={t("contact.Contactjs.email")}
                      name="email"
                      className="input-style"
                      value={formDetails.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      style={{ height: "387px" }}
                      placeholder={t("contact.Contactjs.message")}
                      name="message"
                      className="input-style"
                      value={formDetails.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="button-style"
                  >
                    {t("contact.Contactjs.submit")}
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Container>
      </main>
    </div>
  );
}

export default Contact;
