import styles from './Hero.module.css'
import heroWelcomeIcon from '../../assets/hero_welcome_icon.svg'
import heroImage from '../../assets/Container.png'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container`}>
                <div className={`${styles.flex} ${styles.inner}`}>
                    <div className={styles.heroText}>
                        <div className={`${styles.flex} ${styles.welcomeGroup}`}>
                            <img src={heroWelcomeIcon} alt="" />
                            <span className="tagline">WELCOME TO MAHRAJ TECHNOLOGIES</span>
                        </div>
                        <h1 className={styles.heading}>Smart IT Solutions in Dubai That Drive Digital Success</h1>
                        <p>We help businesses adopt modern technology to improve performance, security, and long-term growth.</p>
                        <div className={styles.ctaGroup}>
                            <a href="#" className='btn-primary'>Get Started</a>
                            <a href="#" className={styles.ctaHotline}>Hotline: +(733)-860-2906</a>
                        </div>
                    </div>
                    <div className={styles.heroImage}>
                        <div className={styles.heroImageContainer}>
                            <img src={heroImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}