import styles from './About.module.css'
import aboutImg from '../../../assets/about_img.png'
import ctaSvg from '../../../assets/about_cta_svg.svg'

export default function About() {
    return (
        <section className={styles.about}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.aboutImage}>
                        <div className={styles.aboutImageContainer}>
                            <img src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className={styles.aboutContent}>
                        <h3 className='tagline'>About Our Company</h3>
                        <h2>Our Reliable IT & Technology Solutions for Startup Agencies</h2>
                        <p>We deliver dependable IT and technology solutions in Dubai that help startup agencies operate smoothly and scale confidently. Our focus is on stability, performance, and long-term digital growth.</p>
                        <div className={styles.ctaWrapper}>
                            <img src={ctaSvg} alt="" />
                            <div className={styles.ctaText}>
                                <h4>Built for Startup Speed and Flexibility</h4>
                                <p>Our solutions adapt quickly to changing needs while supporting fast decision-making and innovation.</p>
                            </div>
                        </div>
                        <a href="" className='btn-primary'>Get Our Services</a>
                    </div>
                </div>
            </div>
        </section>
    )
}