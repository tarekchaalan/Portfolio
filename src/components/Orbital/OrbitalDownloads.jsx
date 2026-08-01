import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { FaApple, FaWhatsapp } from "react-icons/fa";
import { BsCpu } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const builds = [
  {
    key: "silicon",
    name: "Apple Silicon",
    taglineKey: "orbital.OrbitalDownloadsjs.siliconTagline",
    icon: <FaApple />,
    file: "/downloads/Orbital-Apple-Silicon.zip",
    filename: "Orbital-Apple-Silicon.zip",
    size: "2.9 MB",
  },
  {
    key: "intel",
    name: "Intel",
    taglineKey: "orbital.OrbitalDownloadsjs.intelTagline",
    icon: <BsCpu />,
    file: "/downloads/Orbital-Intel.zip",
    filename: "Orbital-Intel.zip",
    size: "3.0 MB",
  },
];

function OrbitalDownloads() {
  const { t } = useTranslation();

  // Unlisted page: keep crawlers out and give the tab a proper name, but only
  // while this route is mounted so the rest of the site is unaffected
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    const previousTitle = document.title;
    document.title = "Orbital for macOS";

    return () => {
      document.head.removeChild(meta);
      document.title = previousTitle;
    };
  }, []);

  return (
    <Container fluid className="download-section">
      <Container className="download-content">
        <h1 className="download-heading">
          <span className="purple">Orbital</span>{" "}
          {t("orbital.OrbitalDownloadsjs.forMacOS")}
        </h1>
        <p className="download-subheading">
          {t("orbital.OrbitalDownloadsjs.subtitle")}
        </p>
        <p className="download-request">
          {t("orbital.OrbitalDownloadsjs.requestKey")}{" "}
          <a href="mailto:tchaalan23@outlook.com">
            <AiOutlineMail /> {t("orbital.OrbitalDownloadsjs.requestEmail")}
          </a>{" "}
          {t("orbital.OrbitalDownloadsjs.requestOr")}{" "}
          <a
            href="https://wa.me/96597207032"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </p>

        <Row className="justify-content-center">
          {builds.map((build) => (
            <Col key={build.key} xs={12} sm={10} md={6} lg={5} className="mb-4">
              <div className="download-card">
                <div className="download-card-icon">{build.icon}</div>
                <h2 className="download-card-title">{build.name}</h2>
                <p className="download-card-tagline">{t(build.taglineKey)}</p>
                <Button
                  variant="secondary"
                  href={build.file}
                  download={build.filename}
                  className="download-card-btn"
                >
                  <AiOutlineDownload />
                  &nbsp;{t("orbital.OrbitalDownloadsjs.download")}
                </Button>
                <span className="download-card-meta">
                  .zip &middot; {build.size}
                </span>
              </div>
            </Col>
          ))}
        </Row>

        <div className="download-help">
          <h3 className="download-help-title">
            {t("orbital.OrbitalDownloadsjs.helpTitle")}
          </h3>
          <p>
            {t("orbital.OrbitalDownloadsjs.help1a")}{" "}
            <span className="purple">&#63743;</span>{" "}
            {t("orbital.OrbitalDownloadsjs.help1b")}{" "}
            <strong>{t("orbital.OrbitalDownloadsjs.helpAboutMac")}</strong>.{" "}
            {t("orbital.OrbitalDownloadsjs.help2a")}{" "}
            <strong>{t("orbital.OrbitalDownloadsjs.helpChip")}</strong>{" "}
            {t("orbital.OrbitalDownloadsjs.help2b")}{" "}
            {t("orbital.OrbitalDownloadsjs.help3")}
          </p>
          <p>
            {t("orbital.OrbitalDownloadsjs.gatekeeper1")}{" "}
            <strong>Orbital.app</strong>{" "}
            {t("orbital.OrbitalDownloadsjs.gatekeeper2")}{" "}
            <strong>{t("orbital.OrbitalDownloadsjs.gatekeeperOpen")}</strong>
            {t("orbital.OrbitalDownloadsjs.gatekeeper3")}
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default OrbitalDownloads;
