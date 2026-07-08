import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects/Projects";
import { ThemeProvider } from "../ThemeContext";

// react-github-calendar fetches over the network; stub it out
vi.mock("../components/Projects/Github", () => ({
  default: () => <div data-testid="github-calendar" />,
}));

// useTranslation suspends while the HTTP backend loads locale files, which
// never resolves under jsdom — return keys directly instead
vi.mock("react-i18next", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useTranslation: () => ({
      t: (key) => key,
      i18n: { changeLanguage: () => Promise.resolve() },
    }),
  };
});

afterEach(cleanup);

function renderNavbar() {
  return render(
    <ThemeProvider>
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe("Navbar scroll listener (regression)", () => {
  it("removes its scroll listener on unmount", () => {
    const addSpy = vi.spyOn(window, "addEventListener");
    const removeSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = renderNavbar();
    const added = addSpy.mock.calls.filter(([type]) => type === "scroll").length;
    unmount();
    const removed = removeSpy.mock.calls.filter(
      ([type]) => type === "scroll"
    ).length;

    expect(added).toBeGreaterThan(0);
    expect(removed).toBe(added);

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it("does not stack listeners across re-renders", () => {
    const addSpy = vi.spyOn(window, "addEventListener");
    const { rerender } = renderNavbar();
    const before = addSpy.mock.calls.filter(([t]) => t === "scroll").length;
    rerender(
      <ThemeProvider>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </ThemeProvider>
    );
    const after = addSpy.mock.calls.filter(([t]) => t === "scroll").length;
    expect(after).toBe(before);
    addSpy.mockRestore();
  });
});

describe("Projects modal blur (regression)", () => {
  it("blurs the .content-wrapper while the image modal is open", () => {
    render(
      <MemoryRouter>
        <div className="content-wrapper">
          <Projects />
        </div>
      </MemoryRouter>
    );
    const wrapper = document.querySelector(".content-wrapper");
    expect(wrapper.classList.contains("blur-effect")).toBe(false);

    fireEvent.click(screen.getAllByAltText("card-img")[0]);
    expect(wrapper.classList.contains("blur-effect")).toBe(true);
  });
});

describe("Footer markup (regression)", () => {
  it("has no duplicate SIfooter ids and keeps the styling hook as a class", () => {
    render(<Footer />);
    expect(document.querySelectorAll("#SIfooter")).toHaveLength(0);
    expect(document.querySelectorAll(".social-icons.SIfooter")).toHaveLength(3);
  });
});
