import { useState, useEffect, useRef } from "react";
import "./header.css";
import { Link } from "react-scroll";
// import logo from "../../Assets/logo.jpg";

const Header = () => {
  const [activeNav, sectActiveNav] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const deskHeader = useRef();
  let lastScroll = 0;
  const headerSticky = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0 && deskHeader.current) {
      deskHeader.current.classList.remove("hide-scroll-header");
      return;
    }
    if (currentScroll > lastScroll && deskHeader.current) {
      deskHeader.current.classList.add("hide-scroll-header");
    } else if (currentScroll < lastScroll && deskHeader.current) {
      deskHeader.current.classList.remove("hide-scroll-header");
    }
    lastScroll = currentScroll;
  };
  useEffect(() => {
    window.addEventListener("scroll", headerSticky);
  });

  return (
    <header ref={deskHeader} className="web-header">
      <div className="header-container">
        <div className="logo-part">
          <a href="/">
            <img
              src="https://mintmaster.app/img/mint-master-logo.png"
              alt="Brainoids"
            />
          </a>
        </div>
        <nav className={menuOpen ? "opened-navs nav-sec" : "nav-sec"}>
          <a href="/" className="mob-logo">
            <img
              src="https://mintmaster.app/img/mint-master-logo.png"
              alt="Brainoids"
            />
          </a>
          <ul>
            <li>
              <Link
                className={activeNav === 0 ? "active-nav" : ""}
                onClick={() => {
                  sectActiveNav(0);
                  setMenuOpen(false);
                }}
                to="home"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={activeNav === 3 ? "active-nav" : ""}
                onClick={() => {
                  sectActiveNav(3);
                  setMenuOpen(false);
                }}
                to="roadmap"
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                className={activeNav === 5 ? "active-nav" : ""}
                onClick={() => {
                  sectActiveNav(5);
                  setMenuOpen(false);
                }}
                to="team"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className={activeNav === 1 ? "active-nav" : ""}
                onClick={() => {
                  sectActiveNav(1);
                  setMenuOpen(false);
                }}
                to="faq"
              >
                Faq
              </Link>
            </li>

            {/* <li>
              <a
                href="https://discord.gg/brainoids"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-discord"></i>
              </a>
            </li> */}
          </ul>
        </nav>
        {/* <button className="connect_btn">CONNECT WALLET</button> */}

        <div className="menu-btn">
          <div
            className={menuOpen ? "ham-burg-opened" : ""}
            id="nav-icon2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        className={`nav-shadow  ${menuOpen ? "show-shadow" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </header>
  );
};

export default Header;
