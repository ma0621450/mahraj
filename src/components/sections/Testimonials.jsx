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
        name: "Thomas Richard Ellington",
        role: "Cloud Solutions Architect",
        text: "“We pride ourselves on delivering cutting-edge IT solutions that empower businesses to scale, optimize efficiency, and enhance security. Here’s what one of our valued clients had to say about their experience working with us.”",
        image: userImg,
        rating: 5
    },
    {
        id: 2,
        name: "Thomas Richard Ellington",
        role: "Cloud Solutions Architect",
        text: "“We pride ourselves on delivering cutting-edge IT solutions that empower businesses to scale, optimize efficiency, and enhance security. Here’s what one of our valued clients had to say about their experience working with us.”",
        image: userImg,
        rating: 5
    },
    {
        id: 3,
        name: "Thomas Richard Ellington",
        role: "Cloud Solutions Architect",
        text: "“We pride ourselves on delivering cutting-edge IT solutions that empower businesses to scale, optimize efficiency, and enhance security. Here’s what one of our valued clients had to say about their experience working with us.”",
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
