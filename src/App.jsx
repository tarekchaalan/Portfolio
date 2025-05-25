import React, { useState, useEffect, Suspense } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./colors.css";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";

function Loading() {
  return <>Loading...</>;
}

function App() {
  const [load, upadateLoad] = useState(true);
  const [locale, setLocale] = useState(i18n.language);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    // Preload project images from public folder
    const preloadImages = [
      "/preload/projects/placeholder.png",
      "/preload/projects/fitfuel.png",
      "/preload/projects/portfolio.png",
      "/preload/projects/TicTacToe.png",
    ];
    // ^^ To preload more pics in the future just add the path to the array ^^

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Preload language-specific resume PDFs from public folder
    const lang = localStorage.getItem("i18nextLng") || "en";
    const darkPDF = `/preload/resumes/Tarek_Chaalan_Resume_Dark-${lang}.pdf`;
    const lightPDF = `/preload/resumes/Tarek_Chaalan_Resume_Light-${lang}.pdf`;

    [darkPDF, lightPDF].forEach((src) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = src;
      link.as = "document";
      document.head.appendChild(link);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <div className="content-wrapper">
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loading />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/project"
                element={
                  <Suspense fallback={<Loading />}>
                    <Projects />
                  </Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<Loading />}>
                    <About />
                  </Suspense>
                }
              />
              <Route
                path="/resume"
                element={
                  <Suspense fallback={<Loading />}>
                    <Resume />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<Loading />}>
                    <Contact />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<Loading />}>
                    <Navigate to="/" />
                  </Suspense>
                }
              />
            </Routes>
          </div>
        </LocaleContext.Provider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
