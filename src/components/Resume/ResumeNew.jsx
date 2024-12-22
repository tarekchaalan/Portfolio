import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload, AiFillBulb } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import pdfDarkEN from "/src/Assets/Resumes/Tarek_Chaalan_Resume_Dark-en.pdf";
import pdfLightEN from "/src/Assets/Resumes/Tarek_Chaalan_Resume_Light-en.pdf";
import pdfDarkES from "/src/Assets/Resumes/Tarek_Chaalan_Resume_Dark-es.pdf";
import pdfLightES from "/src/Assets/Resumes/Tarek_Chaalan_Resume_Light-es.pdf";
import pdfDarkFR from "/src/Assets/Resumes/Tarek_Chaalan_Resume_Dark-fr.pdf";
import pdfLightFR from "/src/Assets/Resumes/Tarek_Chaalan_Resume_Light-fr.pdf";
import pdfDarkAR from "/src/Assets/Resumes/Tarek_Chaalan_Resume_Dark-ar.pdf";
import pdfLightAR from "/src/Assets/Resumes/Tarek_Chaalan_Resume_Light-ar.pdf";

// Set worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

// Resume files categorized by language and theme
const resumes = {
  en: { dark: pdfDarkEN, light: pdfLightEN },
  es: { dark: pdfDarkES, light: pdfLightES },
  fr: { dark: pdfDarkFR, light: pdfLightFR },
  ar: { dark: pdfDarkAR, light: pdfLightAR },
  default: { dark: pdfDarkEN, light: pdfLightEN },
};

function ResumeNew() {
  const { t } = useTranslation();
  const [width, setWidth] = useState(1200);
  const [theme, setTheme] = useState("dark");
  const [numPages, setNumPages] = useState(null);
  const currentLang = i18n.language;

  // Update width based on screen size
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const currentResume = resumes[currentLang]
    ? resumes[currentLang][theme]
    : resumes["default"][theme];

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">

        {/* Buttons */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col xs={12} sm={6} md={4} className="mb-2">
            <Button
              variant="primary"
              href={currentResume}
              target="_blank"
              download="Tarek_Chaalan_Resume.pdf"
              style={{ width: "100%" }}
            >
              <AiOutlineDownload />
              &nbsp;{t("resume.ResumeNewjs.Download")}
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-2">
            <Button
              variant="secondary"
              onClick={toggleTheme}
              style={{ width: "100%" }}
            >
              <AiFillBulb />
              &nbsp;{t("resume.ResumeNewjs.Toggle")}
            </Button>
          </Col>
        </Row>

        <Row
          className="resume"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto",
            maxWidth: "800px",
          }}
        >
          <Document file={currentResume} onLoadSuccess={onDocumentLoadSuccess}>
            {[...Array(numPages)].map((_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.3 : 0.6}
                style={{
                  marginBottom: "20px", // Space between pages
                  backgroundColor: "#ffffff", // Page background
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            ))}
          </Document>
        </Row>

        {/* Buttons (Bottom) */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col xs={12} sm={6} md={4} className="mb-2">
            <Button
              variant="primary"
              href={currentResume}
              target="_blank"
              download="Tarek_Chaalan_Resume.pdf"
              style={{ width: "100%" }}
            >
              <AiOutlineDownload />
              &nbsp;{t("resume.ResumeNewjs.Download")}
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-2">
            <Button
              variant="secondary"
              onClick={toggleTheme}
              style={{ width: "100%" }}
            >
              <AiFillBulb />
              &nbsp;{t("resume.ResumeNewjs.Toggle")}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
