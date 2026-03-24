import { FaShareAlt } from 'react-icons/fa'
import styles from './Team.module.css'
import team1 from '../../../assets/team-card.png'

export default function Team() {
    return (
        <section className={styles.team}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.head}>
                        <h3 className='tagline'>our team</h3>
                        <h2>Our Qualified IT Team</h2>
                        <p>Our team consists of experienced IT professionals who deliver reliable solutions in Dubai with precision, efficiency, and a strong understanding of business needs.</p>
                    </div>
                    <div className={styles.cardsContainer}>
                        <div className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.img}>
                                    <div className={styles.imgContainer}>
                                        <img src={team1} alt="" />
                                    </div>
                                    <div className={styles.shareBtn}>
                                        <FaShareAlt />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3>John Doe</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.img}>
                                    <div className={styles.imgContainer}>
                                        <img src={team1} alt="" />
                                    </div>
                                    <div className={styles.shareBtn}>
                                        <FaShareAlt />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3>John Doe</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.img}>
                                    <div className={styles.imgContainer}>
                                        <img src={team1} alt="" />
                                    </div>
                                    <div className={styles.shareBtn}>
                                        <FaShareAlt />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3>John Doe</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}