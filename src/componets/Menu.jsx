import { useState } from "react";
import "../assets/styles/menu.css";
import signature from "../assets/images/signature.png";

const Menu = () => {

    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
        setOpen(false);
    };

    return (
        <nav className="menu">

            <div className="menu-container">

                {/* Logo */}
                <div
                    className="logo"
                    onClick={() => scrollToSection("home")}
                >
                    <img src={signature} alt="signature" />
                </div>

                {/* Links */}
                <ul className={`nav-links ${open ? "active" : ""}`}>
                    <li onClick={() => scrollToSection("story")}>Story</li>
                    <li onClick={() => scrollToSection("works")}>Works</li>
                    <li onClick={() => scrollToSection("skills")}>Skills</li>
                </ul>

                {/* Right Side */}
                <div className="menu-right">

                    <button className="sayHi" onClick={() => scrollToSection("contact")}>
                        Say Hi!
                    </button>

                    {/* Hamburger */}
                    {/* <div
                        className="hamburger"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </div> */}

                </div>

            </div>

        </nav>
    );
};

export default Menu;