import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../components/ErrorBoundary";

function Bomb() {
  throw new Error("boom");
}

describe("ErrorBoundary", () => {
  it("renders a fallback instead of white-screening on a render error", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>
    );
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /return home/i })).toBeInTheDocument();
    console.error.mockRestore();
  });

  it("renders children when nothing throws", () => {
    render(
      <ErrorBoundary>
        <div>fine</div>
      </ErrorBoundary>
    );
    expect(screen.getByText("fine")).toBeInTheDocument();
  });
});
