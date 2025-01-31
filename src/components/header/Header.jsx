import { Link } from "react-router-dom"
import "./header.css"
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("opennn");

        setIsMobileMenuOpen((prev) => !prev);
    };
    return (
        <header className="header">
            <section className="header-container">
                <Link to={"/"} className="link"><h1 className="header-title">Sümeyye Sever</h1></Link>
                <div>
                    <button id="hamburger-button" className="hamburger-btn" onClick={toggleMenu}>&#9776;</button>
                    <nav className="desktop-nav">
                        <ul>
                            <Link to={"/posts"} className="link"><li>Posts</li></Link>
                            <div>·</div>
                            <Link to={"/tech-stack"} className="link"><li>Tech Stack</li></Link>
                            <div>·</div>
                            <Link to={"/projects"} className="link"><li>Projects</li></Link>
                            <div>·</div>
                            <Link to={"/personal"} className="link"><li>Personal</li></Link>
                        </ul>
                    </nav>
                </div>
            </section>
            {isMobileMenuOpen && (
                <section id="mobile-menu" className="mobile-menu">
                    <button className="close-btn" onClick={toggleMenu}>&times;</button>
                    <nav className="mobile-nav">
                        <ul className='nav-links'>
                            <Link to={"/"} className="link" onClick={toggleMenu}><li>Home</li></Link>
                            <Link to={"/posts"} className="link" onClick={toggleMenu}><li>Posts</li></Link>
                            <Link to={"/tech-stack"} className="link" onClick={toggleMenu}><li>Tech Stack</li></Link>
                            <Link to={"/projects"} className="link" onClick={toggleMenu}><li>Projects</li></Link>
                            <Link to={"/personal"} className="link" onClick={toggleMenu}><li>Personal</li></Link>
                        </ul>
                    </nav>
                </section>
            )}
        </header>
    )
}
