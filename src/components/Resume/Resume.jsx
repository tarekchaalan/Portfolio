import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload, AiFillBulb } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../ThemeContext";

// Set worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

// Resume files categorized by language and theme
const resumes = {
  en: {
    dark: "/preload/resumes/Tarek_Chaalan_Resume_Dark-en.pdf",
    light: "/preload/resumes/Tarek_Chaalan_Resume_Light-en.pdf",
  },
  es: {
    dark: "/preload/resumes/Tarek_Chaalan_Resume_Dark-es.pdf",
    light: "/preload/resumes/Tarek_Chaalan_Resume_Light-es.pdf",
  },
  fr: {
    dark: "/preload/resumes/Tarek_Chaalan_Resume_Dark-fr.pdf",
    light: "/preload/resumes/Tarek_Chaalan_Resume_Light-fr.pdf",
  },
  ar: {
    dark: "/preload/resumes/Tarek_Chaalan_Resume_Dark-ar.pdf",
    light: "/preload/resumes/Tarek_Chaalan_Resume_Light-ar.pdf",
  },
  default: {
    dark: "/preload/resumes/Tarek_Chaalan_Resume_Dark-en.pdf",
    light: "/preload/resumes/Tarek_Chaalan_Resume_Light-en.pdf",
  },
};

function Resume() {
  const { t } = useTranslation();
  const [width, setWidth] = useState(1200);
  const { theme: appTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useState(appTheme === "dark" ? "dark" : "light");
  const [numPages, setNumPages] = useState(null);
  const currentLang = i18n.language;

  // Update width based on screen size
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Sync resume theme with app theme (inverted)
  useEffect(() => {
    setTheme(appTheme === "dark" ? "dark" : "light");
  }, [appTheme]);

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
              variant="secondary"
              href={currentResume}
              target="_blank"
              download="Tarek_Chaalan_Resume.pdf"
              style={{ width: "100%" }}
            >
              <AiOutlineDownload />
              &nbsp;{t("resume.Resumejs.Download")}
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-2">
            <Button
              variant="secondary"
              onClick={toggleTheme}
              style={{ width: "100%" }}
            >
              <AiFillBulb />
              &nbsp;{t("resume.Resumejs.Toggle")}
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
              variant="secondary"
              href={currentResume}
              target="_blank"
              download="Tarek_Chaalan_Resume.pdf"
              style={{ width: "100%" }}
            >
              <AiOutlineDownload />
              &nbsp;{t("resume.Resumejs.Download")}
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-2">
            <Button
              variant="secondary"
              onClick={toggleTheme}
              style={{ width: "100%" }}
            >
              <AiFillBulb />
              &nbsp;{t("resume.Resumejs.Toggle")}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
