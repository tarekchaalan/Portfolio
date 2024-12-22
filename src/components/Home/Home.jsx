import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import myImg from "../../Assets/myAvatar.svg";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("home.Homejs.greeting")}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {t("home.Homejs.introduction1")}
                <strong className="main-name">
                  {" "}
                  {t("home.Homejs.introduction2")}
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <span style={{ display: "inline-block" }}>
                  <Type />
                </span>
                <h1
                  id="aftertypejs"
                  style={{ display: "inline", fontSize: "2.4em" }}
                >
                  {t("home.Homejs.developer")}
                </h1>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 10 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                id="home-img"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={4} className="myAvtar">
              <img
                src={myImg}
                alt="avatar"
                id="SVGAvtar"
                className="img-fluid"
              />
            </Col>

            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.5em" }}>
                {t("home.Homejs.letMeIntroduce1")}{" "}
                <span className="purple">
                  {" "}
                  {t("home.Homejs.letMeIntroduce2")}{" "}
                </span>{" "}
                {t("home.Homejs.letMeIntroduce3")}
              </h1>
              <p className="home-about-body">
                {t("home.Homejs.summary")}
                &nbsp;
                <i>
                  <b className="purple">{t("home.Homejs.summary2")} &nbsp;</b>
                </i>
                {t("home.Homejs.summary3")}
                <br />
                <br />
                {t("home.Homejs.fluency1")}
                <i>
                  <b className="purple"> {t("home.Homejs.languages")} </b>
                </i>
                <br />
                <br />
                {t("home.Homejs.Interests")}
                <i>
                  <b className="purple"> {t("home.Homejs.Interests2")} </b>{" "}
                  {t("home.Homejs.Interests3")}
                  &nbsp;
                  <b className="purple">{t("home.Homejs.Interests4")}</b>
                </i>
                <br />
                <br />
                {t("home.Homejs.developwith")}{" "}
                <b className="purple">{t("home.Homejs.developwith2")}</b>
                <i>
                  <b className="purple"> {t("home.Homejs.developwith4")}</b>
                </i>
                &nbsp; {t("home.Homejs.developwith5")}
                <i>
                  <b className="purple"> {t("home.Homejs.developwith6")}</b>
                </i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>{t("home.Homejs.connect")}</h1>
              <p>
                {t("home.Homejs.connectWithMe")}{" "}
                <span className="purple">
                  {t("home.Homejs.connectWithMe2")}
                </span>
                &nbsp;
                {t("home.Homejs.connectWithMe3")}
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/tarekchaalan"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/tarekchaalan/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:tarekJobs@outlook.com"
                    rel="noreferrer"
                    className="icon-color home-social-icons"
                  >
                    <MdEmail />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
