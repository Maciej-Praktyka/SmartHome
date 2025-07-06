import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";

/**
 * Page displayed when the user navigates to a non-existent page.
 * @returns {JSX.Element} A centered page with a 404 header, a message, and a button to go back home.
 */
const NotFound: React.FC = () => {
  return (
    <main style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">
        <Button size="medium">Go Home</Button>
      </Link>
    </main>
  );
};

export default NotFound;
