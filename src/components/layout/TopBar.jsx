import { FaBehance, FaFacebookF, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import styles from "./TopBar.module.css";

export default function TopBar() {
    return (
        <div className={styles.topBar}>
            <div className="container">
                <div className={`${styles.flex} ${styles.inner}`}>
                    <div className={`${styles.flex} ${styles.contactInfo}`}>
                        <div className={styles.links}>
                            <a href="#"><FaLocationDot /></a>
                            <a href="#" className={styles.linkText}>128 Munich 1258, Germany</a>
                        </div>
                        <div className={styles.links}>
                            <a href="#"><IoMdMail /></a>
                            <a href="#" className={styles.linkText}>help.me@example.com</a>
                        </div>
                    </div>

                    <div className={`${styles.flex} ${styles.socials}`}>
                        <span className={styles.socialLabel}>Follow Us:</span>
                        <div className={styles.links}>
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaBehance /></a>
                            <a href="#"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
