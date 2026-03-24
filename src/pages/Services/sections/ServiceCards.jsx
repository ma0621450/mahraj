import { Link } from "react-router-dom";
import styles from "./ServiceCards.module.css";
import { FaPencilRuler } from "react-icons/fa";
import Image from "../../../assets/service_card_img.png";

export default function ServiceCards() {
    const cardsData = [
        {
            id: 1,
            image: Image,
            title: "UI/UX and Product Design",
            description: "The Advanced Threat Protection (ATP) Suite Development project focuses on creating a robust and comprehensive...",
            link: "#"
        },
        {
            id: 2,
            image: Image,
            title: "Web App Development",
            description: "The Advanced Threat Protection (ATP) Suite Development project focuses on creating a robust and comprehensive...",
            link: "#"
        },
        {
            id: 3,
            image: Image,
            title: "Cloud Infrastructure",
            description: "The Advanced Threat Protection (ATP) Suite Development project focuses on creating a robust and comprehensive...",
            link: "#"
        },
        {
            id: 4,
            image: Image,
            title: "Cyber Security Solutions",
            description: "The Advanced Threat Protection (ATP) Suite Development project focuses on creating a robust and comprehensive...",
            link: "#"
        },
        {
            id: 5,
            image: Image,
            title: "Managed IT Services",
            description: "The Advanced Threat Protection (ATP) Suite Development project focuses on creating a robust and comprehensive...",
            link: "#"
        },
        {
            id: 6,
            image: Image,
            title: "Data Backup & Recovery",
            description: "The Advanced Threat Protection (ATP) Suite Development project focuses on creating a robust and comprehensive...",
            link: "#"
        }
    ];

    return (
        <section className={styles.serviceCardsSection}>
            <div className="container">
                <div className={styles.cardsGrid}>
                    {cardsData.map((card) => (
                        <div key={card.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src={card.image} alt={card.title} className={styles.cardImage} />
                                <div className={styles.iconBox}>
                                    <FaPencilRuler className={styles.icon} />
                                </div>
                            </div>
                            <div className={styles.contentContainer}>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDescription}>{card.description}</p>
                                <Link to={card.link} className={styles.readMoreBtn}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}