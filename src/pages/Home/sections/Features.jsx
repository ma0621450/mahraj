import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Features.module.css';
import deploymentIcon from '../../../assets/features_deployment_icon.svg';
import developmentIcon from '../../../assets/features_development_icon.svg';
import techSolutionsIcon from '../../../assets/features_tech_solutions_icon.svg';
import aiDrivenInsightsIcon from '../../../assets/features_ai_driven_insights_icon.svg';

const features = [
    { title: 'Business Focus', icon: deploymentIcon, description: "We align every solution with your business goals. Our work supports growth, branding, and long-term results, not just delivery." },
    { title: 'Quality Delivery', icon: developmentIcon, description: "We deliver high-quality work without unnecessary delays. Every project meets professional standards and real-world expectations." },
    { title: 'Cost Efficiency', icon: techSolutionsIcon, description: "Our services are priced smartly. You get strong value, reliable results, and no hidden costs." },
    { title: 'Client Clarity', icon: aiDrivenInsightsIcon, description: "We communicate clearly at every step. You always know what is happening, what to expect, and when results will be delivered." },
    { title: 'Proven Expertise', icon: aiDrivenInsightsIcon, description: "Our experience across projects helps us avoid mistakes and deliver dependable outcomes every time." },
];

export default function Features() {
    return (
        <section className={styles.featuresSection}>
            <div className="container-fluid">
                <div className={styles.header}>
                    <span className="tagline">OUR UNIQUE FEATURES</span>
                    <h2 className={styles.title}>Discover Our Unique Features</h2>
                </div>

                <div className={styles.sliderWrapper}>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        grabCursor={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1400: {
                                slidesPerView: 4,
                            },
                        }}
                        className={styles.swiperContainer}
                    >
                        {[...features, ...features].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.featureCard}>
                                    <div className={styles.icon}>
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <a href="#">Read More âž”</a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
