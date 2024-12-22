import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiPostgresql,
  SiDjango,
  SiFlask,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons hover-show-text hover-show-text">
        <CgCPlusPlus />
        <div className="tech-icon-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <DiJavascript1 />
        <div className="tech-icon-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <DiNodejs />
        <div className="tech-icon-text">Node JS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <DiReact />
        <div className="tech-icon-text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <DiPython />
        <div className="tech-icon-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <SiDjango />
        <div className="tech-icon-text">Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <SiFlask />
        <div className="tech-icon-text">Flask</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <SiHtml5 />
        <div className="tech-icon-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <SiCss3 />
        <div className="tech-icon-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <FaAws />
        <div className="tech-icon-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <TbApi />
        <div className="tech-icon-text">APIs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <DiGit />
        <div className="tech-icon-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <SiFirebase />
        <div className="tech-icon-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-show-text">
        <SiPostgresql />
        <div className="tech-icon-text">Postgre</div>
      </Col>
    </Row>
  );
}

export default Techstack;
