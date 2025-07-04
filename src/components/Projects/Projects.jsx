import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Github from "./Github";
import ProjectCard from "./ProjectCards";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  // const [isMonitor, setIsMonitor] = useState(window.innerWidth > 1024);
  const [modalImg, setModalImg] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (imgPath) => {
    setShow(true);
    setModalImg(imgPath);
  };

  useEffect(() => {
    if (show) {
      const mainContent = document.querySelector(".main-content");
      if (mainContent) mainContent.classList.add("blur-effect");
    } else {
      const mainContent = document.querySelector(".main-content");
      if (mainContent) mainContent.classList.remove("blur-effect");
    }

    return () => {
      const mainContent = document.querySelector(".main-content");
      if (mainContent) mainContent.classList.remove("blur-effect");
    };
  }, [show]);

  useEffect(() => {
    const imagesToPreload = [
      "/preload/projects/placeholder.png",
      "/preload/projects/fitfuel.png",
      "/preload/projects/portfolio.png",
      "/preload/projects/TicTacToe.png",
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Container fluid className="project-section">
      <div className={show ? "blur-effect" : ""}>
        <Container>
          <h1 className="project-heading">
            {t("projects.Projectsjs.projects")}
            &nbsp;
            <strong className="purple">
              {t("projects.Projectsjs.projects2")}
            </strong>
          </h1>
          <p style={{ color: "var(--color-text-primary)" }}>
            {t("projects.Projectsjs.projects3")}
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/preload/projects/portfolio.png"
                onClick={() => handleShow("/preload/projects/portfolio.png")}
                title="This Portfolio!"
                description={t("projects.Projectsjs.card1Description")}
                showGHButton={true}
                ghLink="https://github.com/tarekchaalan/Portfolio"
                showHomeButton={true}
                homeLink="/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/preload/projects/fitfuel.png"
                onClick={() => handleShow("/preload/projects/fitfuel.png")}
                title="FitFuel"
                description={t("projects.Projectsjs.card2Description")}
                showAppleButton={true}
                AppStoreLink="https://apps.apple.com/us/app/fit-fuel/id6502246301"
                ghLink="https://github.com/tarekchaalan/FitFuel"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/preload/projects/ChessvsGPT.png"
                onClick={() => handleShow("/preload/projects/ChessvsGPT.png")}
                title="Chess vs GPT"
                description={t("projects.Projectsjs.card3Description")}
                showGHButton={true}
                ghLink="https://github.com/tarekchaalan/CHESSvsGPT"
                showDemoButton={true}
                demoLink="https://chess-vs-gpt.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/preload/projects/barbershop.png"
                onClick={() => handleShow("/preload/projects/barbershop.png")}
                title="Barbershop Management System"
                description={t("projects.Projectsjs.card4Description")}
                showGHButton={false}
                showDemoButton={true}
                demoLink="https://headlines-barbershop.firebaseapp.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/preload/projects/TicTacToe.png"
                onClick={() => handleShow("/preload/projects/TicTacToe.png")}
                title="Tic Tac Toe"
                description={t("projects.Projectsjs.card5Description")}
                showGHButton={true}
                ghLink="https://github.com/tarekchaalan/TicTacToe"
                showDemoButton={true}
                demoLink="https://tic-tac-toe-zeta-two-20.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/preload/projects/placeholder.png"
                onClick={() => handleShow("/preload/projects/placeholder.png")}
                title="Title Here"
                description={t("projects.Projectsjs.card6Description")}
                ghLink="https://github.com/tarekchaalan"
              />
            </Col>
          </Row>
          <Row>
            <Github />
          </Row>
        </Container>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        fullscreen // ← full-screen modal
        backdrop={true}
      >
        <Modal.Body
          onClick={handleClose} // ← any click anywhere closes
          style={{
            backgroundColor: "transparent",
            padding: 0,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img
            src={modalImg}
            alt="Project"
            style={{
              maxWidth: "100vw",
              maxHeight: "100vh", // fit viewport
              width: "auto",
              height: "auto",
              display: "block",
            }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Projects;
