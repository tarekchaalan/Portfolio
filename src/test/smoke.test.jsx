import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";
import Pre from "../components/Pre";

describe("smoke", () => {
  it("renders the 404 page with a link home", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /return home/i })).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("renders the footer with the current year", () => {
    render(<Footer />);
    expect(
      screen.getByText(new RegExp(String(new Date().getFullYear())))
    ).toBeInTheDocument();
  });

  it("preloader toggles by load prop", () => {
    const { container, rerender } = render(<Pre load={true} />);
    expect(container.querySelector("#preloader")).not.toBeNull();
    rerender(<Pre load={false} />);
    expect(container.querySelector("#preloader-none")).not.toBeNull();
  });
});
