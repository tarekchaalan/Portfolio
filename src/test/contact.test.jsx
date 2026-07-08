import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup, act } from "@testing-library/react";
import Contact from "../components/Contact/Contact";

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

let resolveSend;
vi.mock("@emailjs/browser", () => ({
  default: {
    sendForm: vi.fn(
      () =>
        new Promise((resolve) => {
          resolveSend = resolve;
        })
    ),
  },
}));

afterEach(cleanup);

describe("Contact form (regression)", () => {
  it("disables submit while sending so the message cannot be sent twice", async () => {
    const emailjs = (await import("@emailjs/browser")).default;
    vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<Contact />);
    const button = screen.getByRole("button", {
      name: "contact.Contactjs.submit",
    });
    const form = button.closest("form");

    fireEvent.submit(form);
    expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
    expect(button).toBeDisabled();

    // A second submit while the first is in flight must not send again
    fireEvent.submit(form);
    expect(emailjs.sendForm).toHaveBeenCalledTimes(1);

    await act(async () => {
      resolveSend();
    });
    expect(button).toBeEnabled();
  });
});
