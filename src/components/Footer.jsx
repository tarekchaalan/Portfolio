import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Tarek Chaalan</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} | Tarek C.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li id="SIfooter" className="social-icons">
              <a
                href="https://github.com/tarekchaalan"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li id="SIfooter" className="social-icons">
              <a
                href="https://www.linkedin.com/in/tarekchaalan/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li id="SIfooter" className="social-icons">
              <a
                href="mailto:tarekJobs@outlook.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
