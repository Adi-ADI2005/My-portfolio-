import { useState, useEffect } from "react";
import NavBarLogo from "../../assets/icon/name-logo-white.png";
import './style.css';
import { NavLink } from "react-router-dom";

export default function Navcompo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={`navbar-bg ${scrolled ? "scrolled" : "top"}`}>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={NavBarLogo} alt="Logo" className="img-fluid" />
          </NavLink>
        </div>

        <div>
          <div className="nav-links hide-mobile">
            <ul className="d-flex gap-2 list-unstyled">
              <li>
                <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/journey" className={({ isActive }) => (isActive ? "active" : "")}>
                  Journey
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="hide-computer" data-bs-toggle="collapse" data-bs-target="#mobile">
            <i className="bi bi-three-dots-vertical"></i>
          </div>

          <div id="mobile" className="collapse">
            <div className="container">
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/journey" className={({ isActive }) => (isActive ? "active" : "")}>
                    Journey
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
