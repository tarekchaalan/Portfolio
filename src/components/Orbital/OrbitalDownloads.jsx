import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { FaApple, FaWhatsapp } from "react-icons/fa";
import { BsCpu } from "react-icons/bs";

const builds = [
  {
    key: "silicon",
    name: "Apple Silicon",
    tagline: "For Macs with an M-series chip (M1 or later)",
    icon: <FaApple />,
    file: "/downloads/Orbital-Apple-Silicon.zip",
    filename: "Orbital-Apple-Silicon.zip",
    size: "2.9 MB",
  },
  {
    key: "intel",
    name: "Intel",
    tagline: "For Intel-based Macs",
    icon: <BsCpu />,
    file: "/downloads/Orbital-Intel.zip",
    filename: "Orbital-Intel.zip",
    size: "3.0 MB",
  },
];

function OrbitalDownloads() {
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
          <span className="purple">Orbital</span> for macOS
        </h1>
        <p className="download-subheading">
          Early builds, shared by invitation. Pick the version that matches your
          Mac.
        </p>
        <p className="download-request">
          Request a key via{" "}
          <a href="mailto:tchaalan23@outlook.com">
            <AiOutlineMail /> email
          </a>{" "}
          or{" "}
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
                <p className="download-card-tagline">{build.tagline}</p>
                <Button
                  variant="secondary"
                  href={build.file}
                  download={build.filename}
                  className="download-card-btn"
                >
                  <AiOutlineDownload />
                  &nbsp;Download
                </Button>
                <span className="download-card-meta">
                  .zip &middot; {build.size}
                </span>
              </div>
            </Col>
          ))}
        </Row>

        <div className="download-help">
          <h3 className="download-help-title">Which one do I need?</h3>
          <p>
            Open the Apple menu <span className="purple">&#63743;</span> in the
            top-left corner of your screen and choose{" "}
            <strong>About This Mac</strong>. If it lists a chip like{" "}
            <strong>Apple M1</strong> (or M2, M3, M4&hellip;), download the
            Apple Silicon version. If it lists an <strong>Intel</strong>{" "}
            processor, download the Intel version.
          </p>
          <p>
            If macOS warns that it can&rsquo;t verify the app on first launch,
            right-click <strong>Orbital.app</strong> and choose{" "}
            <strong>Open</strong>, then confirm.
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default OrbitalDownloads;
