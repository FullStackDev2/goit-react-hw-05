import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "120px",
      color: "white"
    }}>
      <h1 style={{ fontSize: "80px" }}>404</h1>
      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        Oops! Page not found.
      </p>
      <Link
        to="/"
        style={{
          padding: "10px 20px",
          background: "#ff4d4d",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none"
        }}
      >
        Go Home
      </Link>
    </div>
  );
}
