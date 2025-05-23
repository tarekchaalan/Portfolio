import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Github() {
  const { t } = useTranslation();

  const [dynamicFontSize, setDynamicFontSize] = useState(getFontSize());

  function getFontSize() {
    return window.innerWidth < 767 ? 10 : 16;
  }

  useEffect(() => {
    const handleResize = () => {
      setDynamicFontSize(getFontSize());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        {t("projects.Githubjs.github")}{" "}
        <strong className="purple">{t("projects.Githubjs.github2")}</strong>
      </h1>
      <GitHubCalendar
        id="GHCalendar"
        username="tarekchaalan"
        blockSize={15}
        blockMargin={5}
        color="#64ffda"
        fontSize={dynamicFontSize}
      />
    </Row>
  );
}

export default Github;
