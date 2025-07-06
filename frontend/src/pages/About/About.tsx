import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";
import classes from "./About.module.css";
import InfoBlock from "../../components/molecules/InfoBlock/InfoBlock";

const About: React.FC = () => {
  return (
    <main className={classes.about}>
      <section className={classes.hero}>
        <h1 className={classes.title}>Get to Know Brzozowscy Home</h1>
        <p className={classes.subtitle}>
          Not just a smart home — it's our digital hub. Built for convenience, powered by curiosity.
        </p>
        <Link to="/" className={classes.ctaLink}>
          <Button size="large">Return Home</Button>
        </Link>
      </section>

      <section className={classes.features}>
        <InfoBlock
          header="Why We Built This"
          children="Managing a home gets easier when everything’s in one place. This platform combines tools, trackers, and ideas tailored to our daily life."
        />
        <InfoBlock
          header="Family-Driven Tech"
          children="Every feature reflects our real needs — from calendar planning to project tracking, and even sharing weekend ideas."
        />
        <InfoBlock
          header="Made With Passion"
          children="This isn't just code — it's a personal project crafted with love for structure, simplicity, and smart solutions."
        />
        <InfoBlock
          header="Always Evolving"
          children="We’re constantly adding new tools and tweaking what matters. Your feedback (yes, even within the family!) shapes what’s next."
        />
      </section>
    </main>
  );
};

export default About;
