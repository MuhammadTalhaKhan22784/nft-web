import React from "react";
import himg from "../../Assets/Images/nft_img2.jpg";
import Fade from "react-reveal";
import Bounce from "react-reveal";
import Slide from "react-reveal/Slide";

const Hero = () => {
  return (
    <>
      <div className="hero" id="home">
        <div className="h_overlay">
          <div className="h_left">
            <Fade left duration={1200} delay={1000}>
              <h1>
                Collect Your
                <br />
                <strong>
                  Favorite <span className="half_color">NFT'S </span>
                </strong>
              </h1>
            </Fade>
            <Fade bottom duration={1200} delay={1100}>
              <p>
                A platform built on Hedera Hashgraph Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </Fade>
            <div className="h_btn">
              <Bounce left duration={1300} delay={1300}>
                <button className="explore">Explore Now</button>
              </Bounce>
              <Bounce right duration={1300} delay={1500}>
                <button className="whitepaper">Whitepaper</button>
              </Bounce>
            </div>
          </div>
          <Slide right duration={1200} delay={1400}>
            <div className="h_right">
              <img src={himg} alt="..." />
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Hero;
