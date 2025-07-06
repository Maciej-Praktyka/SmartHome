import React, { useEffect } from "react";

const Test: React.FC = () => {
  useEffect(() => {
    fetch("http://localhost:8000/api/status")
      .then((res) => res.json())
      .then((data) => console.log("Backend says:", data));
  }, []);

  return (
    <div>
      <h2>Check the console for backend response</h2>
    </div>
  );
};

export default Test;
