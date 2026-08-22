import { useEffect, useMemo, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import { AiOutlineDownload, AiOutlineMail, AiOutlineDown } from "react-icons/ai";
import { FaApple, FaWhatsapp } from "react-icons/fa";
import { BsCpu } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const CHANGELOG_URL = "/downloads/changelogs/CHANGELOG.md";

// Releases before this one were never distributed as zips, so they appear in
// the changelog but not in the version picker
const OLDEST_DOWNLOADABLE_VERSION = "1.1.0";

const builds = [
  {
    key: "silicon",
    name: "Apple Silicon",
    taglineKey: "orbital.OrbitalDownloadsjs.siliconTagline",
    icon: <FaApple />,
    slug: "Apple-Silicon",
    // Evergreen alias kept in /downloads; used until the changelog loads
    fallbackFile: "/downloads/Orbital-Apple-Silicon.zip",
  },
  {
    key: "intel",
    name: "Intel",
    taglineKey: "orbital.OrbitalDownloadsjs.intelTagline",
    icon: <BsCpu />,
    slug: "Intel",
    fallbackFile: "/downloads/Orbital-Intel.zip",
  },
];

function buildFile(build, version) {
  return version
    ? `/downloads/Orbital-${version}-${build.slug}.zip`
    : build.fallbackFile;
}

function compareVersions(a, b) {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pa[i] || 0) - (pb[i] || 0);
    if (diff) return diff;
  }
  return 0;
}

// Parses the changelog's markdown: "## <version> — <date>" releases containing
// "### <title>" sections of "- <item>" bullets, plus loose paragraphs
function parseChangelog(markdown) {
  const releases = [];
  let intro = "";
  let release = null;
  let section = null;

  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trim();

    const releaseMatch = line.match(/^##\s+(\d+(?:\.\d+)*)\s*(?:[—–-]\s*(.*))?$/);
    if (releaseMatch) {
      release = {
        version: releaseMatch[1],
        date: releaseMatch[2] || "",
        sections: [],
        paragraphs: [],
      };
      releases.push(release);
      section = null;
      continue;
    }

    if (!release) {
      if (line && !line.startsWith("#")) intro += (intro ? " " : "") + line;
      continue;
    }

    const sectionMatch = line.match(/^###\s+(.*)$/);
    if (sectionMatch) {
      section = { title: sectionMatch[1], items: [] };
      release.sections.push(section);
      continue;
    }

    const itemMatch = line.match(/^-\s+(.*)$/);
    if (itemMatch) {
      if (!section) {
        section = { title: "", items: [] };
        release.sections.push(section);
      }
      section.items.push(itemMatch[1]);
      continue;
    }

    if (line) release.paragraphs.push(line);
  }

  return { intro, releases };
}

// Renders **bold** spans; the only inline markdown the changelog uses
function renderInline(text) {
  return text
    .split("**")
    .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}

function OrbitalDownloads() {
  const { t } = useTranslation();
  const [changelog, setChangelog] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [sizes, setSizes] = useState({});
  const [openVersions, setOpenVersions] = useState(() => new Set());
  const requestedSizes = useRef(new Set());
  const pickerRef = useRef(null);

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

  // The changelog is the source of truth for which versions exist; if it
  // fails to load, the cards fall back to the evergreen latest-build zips
  useEffect(() => {
    let cancelled = false;
    fetch(CHANGELOG_URL)
      .then((res) => (res.ok ? res.text() : Promise.reject(new Error(res.status))))
      .then((text) => {
        if (cancelled) return;
        const parsed = parseChangelog(text);
        setChangelog(parsed);
        if (parsed.releases.length) {
          setOpenVersions(new Set([parsed.releases[0].version]));
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const downloadableVersions = useMemo(() => {
    if (!changelog) return [];
    return changelog.releases
      .map((r) => r.version)
      .filter((v) => compareVersions(v, OLDEST_DOWNLOADABLE_VERSION) >= 0)
      .sort((a, b) => compareVersions(b, a));
  }, [changelog]);

  const latestVersion = downloadableVersions[0] || null;
  const activeVersion = selectedVersion || latestVersion;

  // Real file sizes for the selected version, straight from the server
  useEffect(() => {
    if (!activeVersion) return;
    builds.forEach((build) => {
      const url = buildFile(build, activeVersion);
      if (requestedSizes.current.has(url)) return;
      requestedSizes.current.add(url);
      fetch(url, { method: "HEAD" })
        .then((res) => {
          const bytes = Number(res.headers.get("content-length"));
          if (res.ok && bytes) {
            setSizes((prev) => ({
              ...prev,
              [url]: `${(bytes / 1e6).toFixed(1)} MB`,
            }));
          }
        })
        .catch(() => {});
    });
  }, [activeVersion]);

  const versionOptions = downloadableVersions.map((version) => ({
    value: version,
    label:
      version === latestVersion
        ? `${version} — ${t("orbital.OrbitalDownloadsjs.latestTag")}`
        : version,
  }));

  const toggleRelease = (version) => {
    setOpenVersions((prev) => {
      const next = new Set(prev);
      if (next.has(version)) {
        next.delete(version);
      } else {
        next.add(version);
      }
      return next;
    });
  };

  const installVersion = (version) => {
    setSelectedVersion(version);
    pickerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

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

        {versionOptions.length > 0 && (
          <div className="version-picker" ref={pickerRef}>
            <span className="version-picker-label">
              {t("orbital.OrbitalDownloadsjs.versionLabel")}
            </span>
            <Select
              options={versionOptions}
              value={versionOptions.find((o) => o.value === activeVersion)}
              onChange={(option) => setSelectedVersion(option.value)}
              isSearchable={false}
              className="version-select"
              classNamePrefix="select"
            />
          </div>
        )}

        <Row className="justify-content-center">
          {builds.map((build) => {
            const file = buildFile(build, activeVersion);
            return (
              <Col
                key={build.key}
                xs={12}
                sm={10}
                md={6}
                lg={5}
                className="mb-4"
              >
                <div className="download-card">
                  <div className="download-card-icon">{build.icon}</div>
                  <h2 className="download-card-title">{build.name}</h2>
                  <p className="download-card-tagline">{t(build.taglineKey)}</p>
                  <Button
                    variant="secondary"
                    href={file}
                    download={file.split("/").pop()}
                    className="download-card-btn"
                  >
                    <AiOutlineDownload />
                    &nbsp;{t("orbital.OrbitalDownloadsjs.download")}
                  </Button>
                  <span className="download-card-meta">
                    .zip{sizes[file] ? <> &middot; {sizes[file]}</> : null}
                  </span>
                </div>
              </Col>
            );
          })}
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

        {changelog && changelog.releases.length > 0 && (
          <div className="changelog">
            <h3 className="changelog-title">
              {t("orbital.OrbitalDownloadsjs.changelogTitle")}
            </h3>
            {changelog.intro && (
              <p className="changelog-intro">{changelog.intro}</p>
            )}
            {changelog.releases.map((release) => {
              const isOpen = openVersions.has(release.version);
              const isDownloadable =
                compareVersions(
                  release.version,
                  OLDEST_DOWNLOADABLE_VERSION
                ) >= 0;
              return (
                <div className="changelog-entry" key={release.version}>
                  <button
                    type="button"
                    className="changelog-entry-header"
                    aria-expanded={isOpen}
                    onClick={() => toggleRelease(release.version)}
                  >
                    <span className="changelog-entry-version">
                      {release.version}
                      {release.version === latestVersion && (
                        <span className="changelog-latest-badge">
                          {t("orbital.OrbitalDownloadsjs.latestTag")}
                        </span>
                      )}
                    </span>
                    <span className="changelog-entry-date">{release.date}</span>
                    <AiOutlineDown
                      className={
                        "changelog-entry-chevron" + (isOpen ? " open" : "")
                      }
                    />
                  </button>
                  {isOpen && (
                    <div className="changelog-entry-body">
                      {release.paragraphs.map((paragraph, i) => (
                        <p key={i}>{renderInline(paragraph)}</p>
                      ))}
                      {release.sections.map((section, i) => (
                        <div key={section.title || i}>
                          {section.title && (
                            <h4 className="changelog-section-title">
                              {section.title}
                            </h4>
                          )}
                          <ul>
                            {section.items.map((item, j) => (
                              <li key={j}>{renderInline(item)}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {isDownloadable && (
                        <button
                          type="button"
                          className="changelog-install-btn"
                          onClick={() => installVersion(release.version)}
                        >
                          <AiOutlineDownload />
                          &nbsp;
                          {t("orbital.OrbitalDownloadsjs.installThisVersion")}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </Container>
  );
}

export default OrbitalDownloads;
