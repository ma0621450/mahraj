import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import styles from './Testimonials.module.css'
import testimonialSvg from '../../assets/testimonials_svg.svg'
import userImg from '../../assets/testimonial_avatar.png'
import { BiSolidStar } from 'react-icons/bi'
import bottomImg from '../../assets/testimonial-bottom-shape.png'

const testimonialData = [
    {
        id: 1,
        name: "Aarif Al Zahri",
        role: "Cloud Solutions Architect",
        text: "“Our infrastructure was outdated and exposed to security risks. Then, we find Mahraj Technologies. They redesigned everything with strong controls and clear standards. Their solution removed uncertainty. We now operate with confidence, knowing our systems are secure and built for future growth.”",
        image: userImg,
        rating: 5
    },
    {
        id: 2,
        name: "Naveed Al Qassimi",
        role: "Cloud Solutions Architect",
        text: "“Mahraj Technologies helped us replace confusion with clarity. They introduced strong processes and proper documentation. IT management became predictable and controlled. Daily operations are now smoother, and our team can focus on work without system-related distractions.”",
        image: userImg,
        rating: 5
    },
    {
        id: 3,
        name: "Sameer Al Razi",
        role: "Cloud Solutions Architect",
        text: "“Before working with Mahraj Technologies, technical interruptions were a constant challenge. Their team implemented proactive monitoring and rapid support. Issues were handled before escalation. Our operations are now stable, reliable, and far more efficient.”",
        image: userImg,
        rating: 5
    },
    {
        id: 4,
        name: "Faisal Noorani",
        role: "Cloud Solutions Architect",
        text: "“Previous vendors made IT complicated and unclear. But Mahraj Technologies explained every step in simple terms. Their transparency and responsiveness built trust. Decisions became easier because we finally understood our technology and its impact on our business.”",
        image: userImg,
        rating: 5
    },
    {
        id: 5,
        name: "Imran Al Hakeem",
        role: "Cloud Solutions Architect",
        text: "“Mahraj Technologies helped us move beyond system limitations. Their scalable IT solutions and technology improved performance without disruption. We now operate on a technology foundation that supports current demands and future business expansion with confidence.”",
        image: userImg,
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <>
            <section className={styles.testimonials}>
                <div className="container">
                    <div className={styles.inner}>
                        <div className={styles.content}>
                            <h2>Testimonials</h2>
                            <h3>Our Clients Share Their Success Stories.</h3>
                        </div>
                        <div className={styles.sliderWrapper}>
                            <Swiper
                                modules={[Navigation, EffectCreative]}
                                effect={'creative'}
                                creativeEffect={{
                                    limitProgress: 3,
                                    prev: {
                                        translate: ['-120%', 0, -500],
                                        rotate: [0, 0, -15],
                                        opacity: 0,
                                    },
                                    next: {
                                        translate: [0, 25, -20],
                                        scale: 0.98,
                                        opacity: 1,
                                    },
                                }}
                                navigation={{
                                    prevEl: `.${styles.prevBtn}`,
                                    nextEl: `.${styles.nextBtn}`,
                                }}
                                speed={800}
                                loop={true}
                                grabCursor={true}
                                className={styles.swiperContainer}
                            >
                                {testimonialData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className={styles.card}>
                                            <div className={styles.cardText}>
                                                <img src={testimonialSvg} alt="" />
                                                <p>{item.text}</p>
                                            </div>
                                            <div className={styles.cardFooter}>
                                                <div className={styles.userInfo}>
                                                    <img src={item.image} className={styles.userImg} alt="" />
                                                    <div className={styles.userName}>
                                                        <h4>{item.name}</h4>
                                                        <p>{item.role}</p>
                                                    </div>
                                                </div>
                                                <div className={styles.userRating}>
                                                    {[...Array(item.rating)].map((_, i) => (
                                                        <BiSolidStar key={i} className={styles.star} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button className={`${styles.navBtn} ${styles.prevBtn}`}>
                                <FaArrowLeft />
                            </button>
                            <button className={`${styles.navBtn} ${styles.nextBtn}`}>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.bottomImg}>
                <img src={bottomImg} alt="" />
            </div>
        </>
    )
}
