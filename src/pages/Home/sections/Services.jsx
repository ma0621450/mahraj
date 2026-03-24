import styles from './Services.module.css'
import serviceImg from '../../../assets/service_img.png'
import serviceSvg1 from '../../../assets/service_svg_1.svg'
import serviceSvg2 from '../../../assets/service_svg_2.svg'
import serviceSvg3 from '../../../assets/service_svg_3.svg'

export default function Services() {

    const serviceOffering = [
        {
            title: "Secure Systems",
            description: "We protect your business with reliable IT security that keeps data safe and systems stable.",
            image: serviceSvg1,
        },
        {
            title: "Smooth Operations",
            description: "Our IT solutions ensure your daily business operations run efficiently without interruptions.",
            image: serviceSvg2,
        },
        {
            title: "Scalable Support",
            description: "We provide flexible IT services in Dubai that grow with your business and adapt to changing needs.",
            image: serviceSvg3,
        },
    ]

    return (
        <section className={styles.services}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.head}>
                        <h5 className='tagline'>Our Services</h5>
                        <h2 className={styles.title}>Our Unique IT Services</h2>
                        <p>We provide reliable IT services in Dubai that help businesses run securely, efficiently, and without disruption.</p>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.contentText}>
                            <h4 className='tagline'>Service Highlights That Create Real Impact</h4>
                            <h5 className={styles.title}>Analytics Overview Youâ€™ve
                                Always Wanted</h5>
                            <div className={styles.serviceOffering}>
                                {serviceOffering.map((service, index) => (
                                    <div key={index} className={styles.serviceOfferingItem}>
                                        <img src={service.image} alt={service.title} />
                                        <div className={styles.serviceOfferingText}>
                                            <h6>{service.title}</h6>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.contentImg}>
                            <div className={styles.contentImgContainer}>
                                <img src={serviceImg} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}