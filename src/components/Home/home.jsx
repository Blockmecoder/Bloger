import React from "react";
import NavBar from "../NavBar/page";
import circle from "../../../public/home/circle.png";
import cross from "../../../public/home/cross.png";
import graph from "../../../public/home/graph.png";
import graphm from "../../../public/home/graphm.png";
import hamburger from "../../../public/home/hamburger.png";
import laptop from "../../../public/home/laptop.png";
import laptopm from "../../../public/home/laptopm.png";
import mobiles from "../../../public/home/mobiles.png";
import pattern from "../../../public/home/pattern.png";
import patternm from "../../../public/home/patternm.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <NavBar />
      <Image
        className={styles.pattern}
        src={pattern}
        style={{ height: "auto" }}
        width={3000}
      />
      <div className={styles.hero}>
        <h1>A modern publishing platform</h1>
        <h3>Grow your audience and build your online brand</h3>
        <div className={styles.links}>
          <Link href="/">Start for Free</Link>
          <Link href="/">Learn More</Link>
        </div>
      </div>
      <div className={styles.future}>
        <h1>Designed for the future</h1>
        <div className={styles.mainFuture}>
          <div className={styles.mainData}>
            <h3>Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h3>Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
          <Image
            className={styles.graph}
            src={graph}
            style={{ height: "auto" }}
            width={100}
          />
        </div>
      </div>
      <div className={styles.mobile}>
        <Image
          className={styles.mobiles}
          src={mobiles}
          style={{ height: "auto" }}
          width={100}
        />
        <Image
          className={styles.circle}
          src={circle}
          style={{ height: "auto" }}
          width={100}
        />
        <div>
          <h3>State of the Art Infrastructure</h3>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
      <div className={styles.laptop}>
        
      </div>
      Free, open, simple Blogr is a free and open source application backed by a
      large community of helpful developers. It supports features such as code
      syntax highlighting, RSS feeds, social media integration, third-party
      commenting tools, and works seamlessly with Google Analytics. The
      architecture is clean and is relatively easy to learn. Powerful tooling
      Batteries included. We built a simple and straightforward CLI tool that
      makes customization and deployment a breeze, but capable of producing even
      the most complicated sites.
    </div>
  );
};

export default Home;
