import React from "react";
import "./style.css";
import { Link } from "react-scroll";
// Layout

import Header from "../../Layout/Header2/Header";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home_main">
        <Link to="home">
          <div className="back_to_top">
            <svg class="woox-icon icon-top-arrow">
              <svg id="icon-top-arrow" viewBox="0 0 512 512">
                <path d="m454 383l-171-174c-3-2-5-4-7-6-9-9-20-14-31-14-11 0-22 5-31 14-3 2-5 4-5 6l-173 174c-9 9-14 20-14 31 0 11 5 22 14 31 17 18 44 18 60 0l149-149 149 149c18 18 45 18 60 0 18-20 18-47 0-62z m-354-261l290 0c17 0 33-15 33-33 0-18-16-33-33-33l-290 0c-18 0-33 15-33 33 0 18 15 33 33 33z"></path>
              </svg>
            </svg>
          </div>
        </Link>
        <Hero />
        <Roadmap />
      </div>
    </>
  );
};

export default Home;
