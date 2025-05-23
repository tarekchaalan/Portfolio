import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import usFlag from "../Assets/flags/US-Flag.png";
import esFlag from "../Assets/flags/ES-Flag.png";
import frFlag from "../Assets/flags/FR-Flag.png";
import arFlag from "../Assets/flags/SA-Flag.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { TbFilePhone } from "react-icons/tb";
import LocaleContext from "../LocaleContext";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

// Inline SVG Logo as a React component
const BrandLogo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 50" {...props}>
    <g>
      <g>
        <g transform="translate(0, 0)">
          <path
            d="M12.80 18.75L20.20 18.75L21.40 13.20L1.20 13.20L0 18.75L7.30 18.75L1 48.20L6.55 48.20L12.80 18.75ZM38.95 18.85L41.35 14.35Q39.75 13.45 37.78 13.02Q35.80 12.60 34 12.60Q31.25 12.60 28.95 13.75Q26.65 14.90 25.05 17.12Q23.45 19.35 22.75 22.65L19.25 39.00Q18.60 42.05 19.30 44.25Q20 46.45 21.98 47.62Q23.95 48.80 27.05 48.80Q29 48.80 31.13 48.32Q33.25 47.85 35.60 47.05L35.90 41.80Q35.65 41.85 34.48 42.20Q33.30 42.55 31.70 42.85Q30.10 43.15 28.55 43.15Q27.10 43.15 26.15 42.72Q25.20 42.30 24.85 41.37Q24.50 40.45 24.80 38.90L28.30 22.50Q28.65 20.95 29.35 19.95Q30.05 18.95 31.30 18.45Q32.55 17.95 34.45 17.95Q35.60 17.95 36.83 18.20Q38.05 18.45 38.95 18.85Z"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
);

function NavBar() {
  const { t } = useTranslation();

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { setLocale } = useContext(LocaleContext);
  const [locale, setLocalLocale] = useState(i18n.language); // Use local state to manage dropdown
  const options = [
    {
      value: "en",
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={usFlag}
            alt="EN"
            style={{ marginRight: "10px", width: "20px" }}
          />
          EN
        </div>
      ),
    },
    {
      value: "es",
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={esFlag}
            alt="ES"
            style={{ marginRight: "10px", width: "20px" }}
          />
          ES
        </div>
      ),
    },
    {
      value: "fr",
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={frFlag}
            alt="FR"
            style={{ marginRight: "10px", width: "20px" }}
          />
          FR
        </div>
      ),
    },
    {
      value: "ar",
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={arFlag}
            alt="AR"
            style={{ marginRight: "10px", width: "20px" }}
          />
          AR
        </div>
      ),
    },
  ];

  const handleLocaleChange = (selectedOption) => {
    const newLocale = selectedOption.value;
    i18n.changeLanguage(newLocale); // Change the language
    updateExpanded(false); // Collapse the navbar
    setLocalLocale(newLocale); // Update local state
  };

  const customStyles = {
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "var(--color-text-primary)",
      marginLeft: "-15px",
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      color: "var(--color-text-primary)",
      border: "none",
      outline: "none",
      boxShadow: "none",
      cursor: "pointer",
      marginTop: "8px",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "var(--color-text-primary)",
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused
          ? "var(--color-primary)"
          : "var(--color-bg-primary)",
        color: "var(--color-text-primary)",
        cursor: "pointer",
      };
    },
  };

  useEffect(() => {
    function handleLanguageChange(lng) {
      setLocalLocale(lng); // Update local state when language changes
      setLocale(lng); // Update context if needed
    }
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [setLocale]);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={(navColour ? "sticky" : "navbar") + " align-items-center"}
    >
      <Container fluid className="px-4">
        <div className="d-flex w-100 align-items-center justify-content-between">
          {/* Left: Logo */}
          <Navbar.Brand href="/" className="d-flex">
            <BrandLogo
              className="logo align-self-center"
              style={{ width: "2.5em", height: "2.5em", display: "block" }}
            />
          </Navbar.Brand>

          {/* Center: Nav links */}
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center flex-grow-1"
          >
            <Nav
              className="align-items-center justify-content-center mx-auto"
              defaultActiveKey="#home"
            >
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} />{" "}
                  {t("navbar.Navbarjs.Home")}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
                  {t("navbar.Navbarjs.About")}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  {t("navbar.Navbarjs.Projects")}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} />{" "}
                  {t("navbar.Navbarjs.Resume")}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={() => updateExpanded(false)}
                >
                  <TbFilePhone style={{ marginBottom: "2px" }} />{" "}
                  {t("navbar.Navbarjs.Contact")}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

          {/* Right: GitHub and Language */}
          <div className="d-flex align-items-center gap-2">
            <Button
              href="https://github.com/tarekchaalan"
              target="_blank"
              className="git-btn-inner"
            >
              <AiFillGithub style={{ fontSize: "1.2em" }} />
            </Button>
            <Select
              options={options}
              value={options.find((o) => o.value === locale)}
              onChange={handleLocaleChange}
              styles={customStyles}
              isSearchable={false}
              classNamePrefix="select"
            />
          </div>
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
      </Container>
    </Navbar>
  );
}

export default NavBar;
