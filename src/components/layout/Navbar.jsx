import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import { CiCirclePlus } from "react-icons/ci";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    // Close menu when a nav link is clicked
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={`container`}>
                <div className={`${styles.flex} ${styles.inner}`}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Mahraj" width={150} height={50} />
                    </div>

                    <ul className={styles.navLinks}>
                        <li><a href="#" className={styles.navItem}>Home</a></li>
                        <li><a href="#" className={styles.navItem}>About</a></li>
                        <li><a href="#" className={styles.navItem}>Services</a></li>
                        <li><a href="#" className={styles.navItem}>Blog</a></li>
                        <li><a href="#" className={styles.navItem}>Contact</a></li>
                    </ul>

                    <div className={styles.rightItems}>
                        <div className={`${styles.flex} ${styles.ctaGroup}`}>
                            <div className={`${styles.flex} ${styles.hotline}`}>
                                <div className={styles.hotlineIconWrapper}>
                                    <FaPhoneAlt />
                                </div>
                                <div className={styles.hotlineText}>
                                    <span className={styles.hotlineLabel}>Hotline 24/7</span>
                                    <span className={styles.hotlineNumber}>+1 (555) 123-4567</span>
                                </div>
                            </div>

                            <a href="#" className="btn-primary">
                                Let's Talk <span className={styles.plusIcon}><CiCirclePlus /></span>
                            </a>
                        </div>

                        {/* Hamburger button */}
                        <button
                            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
                            onClick={toggleMenu}
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen}
                        >
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                        </button>
                    </div>
                </div>

                {/* Dropdown menu panel – sits BELOW the navbar */}
                <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
                    <ul className={styles.mobileNavLinks}>
                        <li><a href="#" className={styles.mobileNavItem} onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#" className={styles.mobileNavItem} onClick={handleLinkClick}>About</a></li>
                        <li><a href="#" className={styles.mobileNavItem} onClick={handleLinkClick}>Services</a></li>
                        <li><a href="#" className={styles.mobileNavItem} onClick={handleLinkClick}>Blog</a></li>
                        <li><a href="#" className={styles.mobileNavItem} onClick={handleLinkClick}>Contact</a></li>
                    </ul>


                </div>
            </div>
        </nav>
    )
}