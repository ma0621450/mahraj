import styles from './Blog.module.css'
import { FaChevronRight, FaRegCalendar, FaRegUser } from 'react-icons/fa';
import blogImage from '../../../assets/blog_1.png'

export default function Blog() {
    return (
        <section className={styles.blog}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.head}>
                        <h2>Read our latest blog</h2>
                        <p>Our team is dedicated to delivering exceptional IT solutions tailored to meet
                            the unique needs of each client.</p>
                    </div>
                    <div className={styles.blogCardContainer}>
                        <div className={styles.blogCard}>
                            <div className={styles.blogCardImage}>
                                <div className={styles.blogCardImageContainer}>
                                    <img src={blogImage} alt="" />
                                </div>

                            </div>
                            <div className={styles.blogCardContent}>
                                <div className={styles.blogCardMeta}>
                                    <div className={styles.blogCardMetaItem}>
                                        <span><FaRegCalendar /></span>
                                        <span>January 10, 2024</span>
                                    </div>
                                    <div className={styles.blogCardMetaItem}>
                                        <span><FaRegUser /></span>
                                        <span>By Mahraj</span>
                                    </div>
                                </div>
                                <div className={styles.blogCardTitle}>
                                    <h3>The Importance of Cybersecurity Services from IT Experts</h3>
                                </div>
                                <a href="#" className={styles.blogCardLink}>Read Details <FaChevronRight /></a>
                            </div>
                        </div>
                        <div className={styles.blogCard}>
                            <div className={styles.blogCardImage}>
                                <div className={styles.blogCardImageContainer}>
                                    <img src={blogImage} alt="" />
                                </div>
                            </div>
                            <div className={styles.blogCardContent}>
                                <div className={styles.blogCardMeta}>
                                    <div className={styles.blogCardMetaItem}>
                                        <span><FaRegCalendar /></span>
                                        <span>January 10, 2024</span>
                                    </div>
                                    <div className={styles.blogCardMetaItem}>
                                        <span><FaRegUser /></span>
                                        <span>By Mahraj</span>
                                    </div>
                                </div>
                                <div className={styles.blogCardTitle}>
                                    <h3>The Importance of Cybersecurity Services from IT Experts</h3>
                                </div>
                                <a href="#" className={styles.blogCardLink}>Read Details <FaChevronRight /></a>
                            </div>
                        </div>
                        <div className={styles.blogCard}>
                            <div className={styles.blogCardImage}>
                                <div className={styles.blogCardImageContainer}>
                                    <img src={blogImage} alt="" />
                                </div>
                            </div>
                            <div className={styles.blogCardContent}>
                                <div className={styles.blogCardMeta}>
                                    <div className={styles.blogCardMetaItem}>
                                        <span><FaRegCalendar /></span>
                                        <span>January 10, 2024</span>
                                    </div>
                                    <div className={styles.blogCardMetaItem}>
                                        <span><FaRegUser /></span>
                                        <span>By Mahraj</span>
                                    </div>
                                </div>
                                <div className={styles.blogCardTitle}>
                                    <h3>The Importance of Cybersecurity Services from IT Experts</h3>
                                </div>
                                <div className={styles.blogCardLinkContainer}>
                                    <a href="#" className={styles.blogCardLink}>Read Details <FaChevronRight /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}