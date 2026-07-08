import { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Github from "./Github";
import ProjectCard from "./ProjectCards";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (imgPath, title) => {
    setShow(true);
    setModalImg(imgPath);
    setModalTitle(title);
  };

  // Single blur path: toggle on .content-wrapper only
  useEffect(() => {
    const mainContent = document.querySelector(".content-wrapper");
    if (show) mainContent?.classList.add("blur-effect");
    else mainContent?.classList.remove("blur-effect");
    return () => mainContent?.classList.remove("blur-effect");
  }, [show]);

  useEffect(() => {
    const imagesToPreload = [
      "/preload/projects/portfolio.png",
      "/preload/projects/barbershop.png",
      "/preload/projects/fitfuel.png",
      "/preload/projects/KuwaitDrivingTest.png",
      "/preload/projects/ChessEloShield.png",
      "/preload/projects/ChessvsGPT.png",
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          {t("projects.Projectsjs.projects")}&nbsp;
          <strong className="purple">{t("projects.Projectsjs.projects2")}</strong>
        </h1>
        <p style={{ color: "var(--color-text-primary)" }}>
          {t("projects.Projectsjs.projects3")}
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1) Portfolio */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/preload/projects/portfolio.png"
              onClick={() =>
                handleShow("/preload/projects/portfolio.png", "This Portfolio!")
              }
              title="This Portfolio!"
              description={t("projects.Projectsjs.card1Description")}
              showGHButton={true}
              ghLink="https://github.com/tarekchaalan/Portfolio"
              showHomeButton={true}
              homeLink="/"
            />
          </Col>

          {/* 2) Barbershop */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/preload/projects/barbershop.png"
              onClick={() =>
                handleShow(
                  "/preload/projects/barbershop.png",
                  "Barbershop Management System"
                )
              }
              title="Barbershop Management System"
              description={t("projects.Projectsjs.card2Description")}
              showGHButton={false}
              showDemoButton={true}
              demoLink="https://headlines-barbershop.firebaseapp.com/"
            />
          </Col>

          {/* 3) FitFuel */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/preload/projects/fitfuel.png"
              onClick={() => handleShow("/preload/projects/fitfuel.png", "FitFuel")}
              title="FitFuel"
              description={t("projects.Projectsjs.card3Description")}
              showGHButton={true}
              ghLink="https://github.com/tarekchaalan/FitFuel"
            />
          </Col>

          {/* 4) KuwaitDrivingTest */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/preload/projects/KuwaitDrivingTest.png"
              onClick={() =>
                handleShow(
                  "/preload/projects/KuwaitDrivingTest.png",
                  "Kuwait Driving Test"
                )
              }
              title="Kuwait Driving Test"
              description={t("projects.Projectsjs.card4Description")}
              showGHButton={true}
              ghLink="https://github.com/tarekchaalan/KuwaitDrivingTest"
            />
          </Col>

          {/* 5) ChessEloShield */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/preload/projects/ChessEloShield.png"
              onClick={() =>
                handleShow(
                  "/preload/projects/ChessEloShield.png",
                  "ChessEloShield"
                )
              }
              title="ChessEloShield"
              description={t("projects.Projectsjs.card5Description")}
              showGHButton={true}
              ghLink="https://github.com/tarekchaalan/ChessEloShield"
              showChromeButton={true}
              ChromeStoreLink="https://chromewebstore.google.com/detail/chesseloshield/ekjahhkooocdfnjjdfmlglmlbdomkpkn"
            />
          </Col>

          {/* 6) Chess vs GPT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/preload/projects/ChessvsGPT.png"
              onClick={() =>
                handleShow("/preload/projects/ChessvsGPT.png", "Chess vs GPT")
              }
              title="Chess vs GPT"
              description={t("projects.Projectsjs.card6Description")}
              showGHButton={true}
              ghLink="https://github.com/tarekchaalan/CHESSvsGPT"
              showDemoButton={true}
              demoLink="https://chess-vs-gpt.vercel.app/"
            />
          </Col>
        </Row>

        <Row>
          <Github />
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} fullscreen backdrop>
        <Modal.Body
          onClick={handleClose}
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
            alt={modalTitle || "Project"}
            style={{
              maxWidth: "100vw",
              maxHeight: "100vh",
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
