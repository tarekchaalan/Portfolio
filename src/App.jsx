import { useState, useEffect, Suspense, lazy } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./colors.css";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";

// Route components are lazy so heavy dependencies (react-pdf on the resume
// page in particular) stay out of the initial bundle
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/Resume"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const OrbitalDownloads = lazy(() =>
  import("./components/Orbital/OrbitalDownloads")
);
const NotFound = lazy(() => import("./components/NotFound"));

function Loading() {
  return <>Loading...</>;
}

// Component to handle redirects from 404.html
function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if we have a redirect path stored from 404.html
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && location.pathname === '/') {
      // Clear the stored path
      sessionStorage.removeItem('redirectPath');
      // Navigate to the intended path
      navigate(redirectPath);
    }
  }, [navigate, location]);

  return null;
}

function App() {
  const [load, updateLoad] = useState(true);
  const [locale, setLocale] = useState(i18n.language);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    // Preload project images from public folder
    const preloadImages = [
      "/preload/projects/placeholder.png",
      "/preload/projects/portfolio.png",
      "/preload/projects/barbershop.png",
      "/preload/projects/fitfuel.png",
      "/preload/projects/KuwaitDrivingTest.png",
      "/preload/projects/ChessEloShield.png",
      "/preload/projects/ChessvsGPT.png",
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
            <RedirectHandler />
            <ErrorBoundary>
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
                {/* Unlisted: intentionally absent from the navbar and any
                    internal links; the page injects noindex while mounted */}
                <Route
                  path="/orbital-f9a83e"
                  element={
                    <Suspense fallback={<Loading />}>
                      <OrbitalDownloads />
                    </Suspense>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Suspense fallback={<Loading />}>
                      <NotFound />
                    </Suspense>
                  }
                />
              </Routes>
            </ErrorBoundary>
          </div>
        </LocaleContext.Provider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
