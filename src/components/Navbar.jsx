import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import usFlag from "../Assets/flags/US-Flag.png";
import esFlag from "../Assets/flags/ES-Flag.png";
import frFlag from "../Assets/flags/FR-Flag.png";
import arFlag from "../Assets/flags/SA-Flag.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
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
      color: "white",
      marginLeft: "-15px",
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      color: "white",
      border: "none",
      outline: "none",
      boxShadow: "none",
      cursor: "pointer",
      marginTop: "8px",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "white",
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#acadac" : null,
        color: isFocused ? "#000000" : "#000000",
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
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
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
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
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

            <Nav.Item className="git-btn">
              <Button
                href="https://github.com/tarekchaalan"
                target="_blank"
                className="git-btn-inner"
              >
                <AiFillGithub style={{ fontSize: "1.2em" }} />
              </Button>
            </Nav.Item>
            <Nav.Item className="change-lang">
              <Select
                options={options}
                value={options.find((o) => o.value === locale)}
                onChange={handleLocaleChange}
                styles={customStyles}
                isSearchable={false}
                classNamePrefix="select"
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
