import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub, SiApple, SiLinux, SiUbuntu } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaWindows } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Wrap each icon and text in a div with a class for the hover effect */}
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <SiApple />
        <div className="tech-icon-text">MacOS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <FaWindows />
        <div className="tech-icon-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <SiLinux />
        <div className="tech-icon-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <SiUbuntu />
        <div className="tech-icon-text">Ubuntu</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <VscVscode />
        <div className="tech-icon-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <IoTerminal />
        <div className="tech-icon-text">Terminal</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <SiGithub />
        <div className="tech-icon-text">Github</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
