import styles from './Marquee.module.css'
import marquee1 from '../../../assets/marquee_svg_1.svg'
import marquee2 from '../../../assets/marquee_svg_2.svg'
import marquee3 from '../../../assets/marquee_svg_3.svg'
import marquee4 from '../../../assets/marquee_svg_4.svg'
import marquee5 from '../../../assets/marquee_svg_5.svg'
import marquee6 from '../../../assets/marquee_svg_6.svg'
import marquee7 from '../../../assets/marquee_svg_7.svg'

export default function Marquee() {

    const logos = [
        marquee1,
        marquee2,
        marquee3,
        marquee4,
        marquee5,
        marquee6,
        marquee7
    ]

    return (
        <section className={styles.marquee}>
            <div className="container-fluid">
                <div className={styles.track}>
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className={styles.marqueeItem}>
                            <img src={logo} alt="brand logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}