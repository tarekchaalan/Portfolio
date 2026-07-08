import { Component } from "react";

// Class component because React error boundaries have no hook equivalent
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Unhandled render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              color: "var(--color-primary)",
              margin: 0,
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              color: "var(--color-text-secondary)",
              margin: "1rem 0",
            }}
          >
            Please refresh the page to try again.
          </p>
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "0.8rem 1.5rem",
              backgroundColor: "var(--color-primary)",
              color: "var(--color-bg-primary)",
              textDecoration: "none",
              borderRadius: "5px",
              margin: "1rem 0",
              fontWeight: 600,
            }}
          >
            Return Home
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
