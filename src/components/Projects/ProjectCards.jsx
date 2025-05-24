// ProjectCards.js
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsArrowUpRightSquare, BsApple } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

function ProjectCards(props) {
  const {
    imgPath,
    title,
    description,
    onClick,
    showHomeButton,
    homeLink,
    showGHButton,
    ghLink,
    showDemoButton,
    demoLink,
    showAppleButton,
    AppStoreLink,
  } = props;

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        onClick={onClick}
        alt="card-img"
        style={{
          height: "280px",
          width: "auto",
          objectFit: "contain",
          cursor: "pointer",
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <div>
          {showGHButton && (
            <Button variant="secondary" href={ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {"GitHub"}
            </Button>
          )}
          {showHomeButton && (
            <Button
              variant="secondary"
              href={homeLink}
              style={{ marginLeft: "10px" }}
            >
              <AiOutlineHome /> &nbsp;
              {"Home"}
            </Button>
          )}
          {showDemoButton && (
            <Button
              variant="secondary"
              href={demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <BsArrowUpRightSquare /> &nbsp;
              {"Demo"}
            </Button>
          )}
          {showAppleButton && (
            <Button
              variant="secondary"
              href={AppStoreLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <BsApple /> &nbsp;
              {"App Store"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
