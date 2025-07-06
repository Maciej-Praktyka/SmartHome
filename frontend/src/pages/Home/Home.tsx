import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";
import classes from "./Home.module.css";
import InfoBlock from "../../components/molecules/InfoBlock/InfoBlock";

const Home: React.FC = () => {
  return (
    <main className={classes.home}>
      <section className={classes.hero}>
        <h1 className={classes.title}>Welcome to the Brzozowscy Space</h1>
        <p className={classes.subtitle}>
          Our all in one place for everything related to our home.
        </p>
        <Link to="/calendar" className={classes.ctaLink}>
          <Button size="large">Explore Calendar</Button>
        </Link>
      </section>

      <section className={classes.features}>
        <InfoBlock
          header="Home Setup"
          children="Router, File Server, and more, all in one place."
          buttonText="Home Setup"
          buttonLink="Setup"
        />
        <InfoBlock
          header="Calendar"
          children="Keep track of important dates and events."
          buttonText="Explore Calendar"
          buttonLink="Calendar"
        />
        <InfoBlock
          header="Projects"
          children="All of your projects in one place."
          buttonText="Explore Projects"
          buttonLink="Projects"
        />
        <InfoBlock
          header="Photos"
          children="View and manage your family photos."
          buttonText="View Photos"
          buttonLink="Photos"
        />
      </section>
    </main>
  );
};

export default Home;
