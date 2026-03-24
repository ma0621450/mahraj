import { FaChevronRight, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
import styles from "./Footer.module.css"
import { FaClock, FaClockRotateLeft, FaFacebookF, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaYoutube } from "react-icons/fa6"
import logo from "../../assets/logo.svg"
import footerPostImage1 from "../../assets/footer_post_1.png"
import footerPostImage2 from "../../assets/footer_post_2.png"
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.newletter}>
                        <div className={styles.newsletterText}>
                            <div className={styles.newsletterIcon}>
                                <span><FaEnvelope /></span>
                            </div>
                            <div className={styles.newsletterTitle}>
                                <h2>Sign Up To Our Newsletters.</h2>
                                <p>Subscribe to our Newsletter & Event Right Now to be Updated</p>
                            </div>
                        </div>
                        <div className={styles.newsletterForm}>
                            <input type="email" placeholder="Enter Your Email" />
                            <button type="submit">Subscribe Now</button>
                        </div>
                    </div>
                    <div className={styles.footerContent}>
                        <div className={styles.footerGrid}>


                            <div className={styles.footerBrand}>
                                <div className={styles.footerBrandLogo}>
                                    <img src={logo} alt="" />
                                </div>
                                <div className={styles.footerBrandText}>
                                    <p>Our team delivers reliable, secure, and future-ready IT solutions you can trust to grow your business with confidence.</p>
                                </div>
                                <div className={styles.footerBrandSocial}>
                                    <div className={styles.footerBrandSocialIcon}>
                                        <span><FaFacebookF /></span>
                                    </div>
                                    <div className={styles.footerBrandSocialIcon}>
                                        <span><FaLinkedin /></span>
                                    </div>
                                    <div className={styles.footerBrandSocialIcon}>
                                        <span><FaInstagram /></span>
                                    </div>
                                    <div className={styles.footerBrandSocialIcon}>
                                        <span><FaYoutube /></span>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.footerServices}>
                                <div className={styles.footerServicesTitle}>
                                    <h2>Our Services</h2>
                                </div>
                                <div className={styles.footerServicesList}>
                                    <ul>
                                        <li><Link to="/services"><FaChevronRight /> Database Solution</Link></li>
                                        <li><Link to="/services"><FaChevronRight /> Data Protection</Link></li>
                                        <li><Link to="/services"><FaChevronRight />  App Development</Link></li>
                                        <li><Link to="/services"><FaChevronRight />   Machine Learning</Link></li>
                                        <li><Link to="/services"><FaChevronRight />   Helpdesk Services</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.footerContact}>
                                <div className={styles.footerContactTitle}>
                                    <h2>Address Company</h2>
                                </div>
                                <div className={styles.footerContactList}>
                                    <ul>
                                        <li><a href="#"><FaLocationDot /> 12 Tech Avenue,
                                            Suite Innovation City, United
                                            States</a></li>
                                        <li><a href="#"><FaPhone /> Call us : +12456978963</a></li>
                                        <li><a href="#"><FaEnvelope />  Mail: mahraj@gmail.com</a></li>
                                        <li><a href="#"><FaClock />   Office : 8:00 AM - 7:00 PM</a></li>
                                    </ul>
                                </div>
                            </div>


                            <div className={styles.footerPosts}>
                                <div className={styles.footerPostsTitle}>
                                    <h2>Recent Posts</h2>
                                </div>
                                <div className={styles.footerPostsList}>

                                    <div className={styles.footerPost}>
                                        <div className={styles.footerPostImage}>
                                            <div className={styles.footerPostImageContainer}>
                                                <img src={footerPostImage1} alt="" />
                                            </div>
                                        </div>
                                        <div className={styles.footerPostText}>
                                            <div className={styles.footerPostTextDate}>
                                                <span><FaClockRotateLeft /></span><span> May 17, 2025</span>
                                            </div>
                                            <h3 className={styles.footerPostTextTitle}>How Businesses Can Leverage AI</h3>
                                            <div className={styles.footerPostTextReadMore}>
                                                <Link to="/blog">Read More</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.footerPost}>
                                        <div className={styles.footerPostImage}>
                                            <div className={styles.footerPostImageContainer}>
                                                <img src={footerPostImage2} alt="" />
                                            </div>
                                        </div>
                                        <div className={styles.footerPostText}>
                                            <div className={styles.footerPostTextDate}>
                                                <span><FaClockRotateLeft /></span><span> May 17, 2025</span>
                                            </div>
                                            <h3 className={styles.footerPostTextTitle}>IT Industry Key Trends</h3>
                                            <div className={styles.footerPostTextReadMore}>
                                                <Link to="/blog">Read More</Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className={styles.footerBottom}>
                        <div className={styles.footerBottomContent}>
                            <div className={styles.footerBottomText}>
                                <p>Copyright @ 2025 Mahraj Technologies. All Rights Received.</p>
                            </div>
                            <div className={styles.footerBottomLinks}>
                                <ul>
                                    <li><Link to="/#">Privacy Policy</Link></li>
                                    <li><Link to="/#">Terms of Use</Link></li>
                                    <li><Link to="/#">Site Map</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}