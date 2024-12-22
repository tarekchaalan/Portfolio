import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";
import kuwaitFlag from "../../Assets/flags/KW-Flag.png";
import lebanonFlag from "../../Assets/flags/LB-Flag.png";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("about.AboutCardjs.aboutMe1")}
            &nbsp;
            <span className="purple">{t("about.AboutCardjs.aboutMe2")} </span>
            {t("about.AboutCardjs.aboutMe3")}
            <span className="purple"> {t("about.AboutCardjs.aboutMe4")}</span>
            {t("about.AboutCardjs.period")}
            <br />
            {t("about.AboutCardjs.aboutMe5")}
            &nbsp;
            <span className="purple">
              {t("about.AboutCardjs.aboutMe6")}{" "}
              <img
                src={kuwaitFlag}
                alt="Kuwait"
                style={{ marginLeft: "5px", width: "23px" }}
              />
            </span>
            {t("about.AboutCardjs.aboutMe7")}
            &nbsp;
            <span className="purple">
              {t("about.AboutCardjs.aboutMe8")}{" "}
              <img
                src={lebanonFlag}
                alt="Lebanon"
                style={{ marginLeft: "5px", width: "20px" }}
              />
            </span>
            {t("about.AboutCardjs.period")}
            <br />
            {t("about.AboutCardjs.aboutMe9")}
            &nbsp;
            <span className="purple">{t("about.AboutCardjs.aboutMe10")}</span>
            &nbsp;
            <br />
            <br />
            {t("about.AboutCardjs.activities1")}
          </p>
          <br />
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; {t("about.AboutCardjs.activities2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; {t("about.AboutCardjs.activities3")}
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; {t("about.AboutCardjs.activities4")}
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
