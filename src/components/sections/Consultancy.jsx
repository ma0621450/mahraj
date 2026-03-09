import styles from "./Consultancy.module.css";
import consultancyImage1 from "../../assets/consultancy_1.png";
import consultancyImage2 from "../../assets/consultancy_2.png";
import consultancyImage3 from "../../assets/consultancy_3.png";
import consultancyImage4 from "../../assets/consultancy_4.png";

export default function Consultancy() {
    return (
        <section className={styles.consultancy}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.text}>
                        <h3 className="tagline">Talk to Our Experts</h3>
                        <h2>You can book a session with our IT experts for clear planning and real, measurable results.</h2>
                        <a href="#" className="btn-primary">Book A Service</a>
                    </div>
                    <div className={styles.imagesGrid}>
                        <div className={styles.imgContainer}>
                            <img src={consultancyImage1} alt="" />
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={consultancyImage2} alt="" />
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={consultancyImage3} alt="" />
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={consultancyImage4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}