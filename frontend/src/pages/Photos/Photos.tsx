import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";

const Photos: React.FC = () => {
  return (
    <main style={{ textAlign: "center", padding: "4rem" }}>
      <h1>Coming soon...</h1>
      <p>We're working hard to bring you this page. Stay tuned!</p>
      <Link to="/">
        <Button size="medium">Go Home</Button>
      </Link>
    </main>
  );
};

export default Photos;
