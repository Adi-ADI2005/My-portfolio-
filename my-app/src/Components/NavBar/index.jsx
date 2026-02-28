import NavBarLogo from "../../assets/icon/name-logo-white.png";
import './style.css';
import { NavLink } from "react-router-dom";

export default function Navcompo() {
    return (
        <section className="navbar-bg">
            <nav className="navbar">
                {/* Logo */}
                <div className="logo">
                    <NavLink to="/">
                        <img src={NavBarLogo} alt="Logo" className="img-fluid" />
                    </NavLink>
                </div>

                <div>
                    {/* Desktop Nav */}
                    <div className="nav-links hide-mobile">
                        <ul className="d-flex gap-5 list-unstyled">
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

                    {/* Mobile Nav Toggle */}
                    <div className="hide-computer" data-bs-toggle="collapse" data-bs-target="#mobile">
                        <i className="bi bi-three-dots-vertical"></i>
                    </div>

                    {/* Mobile Nav Menu */}
                    <div id="mobile" className="collapse">
                        <div className="container">
                            <ul className="gap-4 list-unstyled" style={{ lineHeight: 2 }}>
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
