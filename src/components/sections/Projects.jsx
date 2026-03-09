import { FaCheck } from "react-icons/fa";
import styles from "./Projects.module.css";
import projectImg from "../../assets/project1.png";

export default function Projects() {
    return (
        <section className={styles.projects}>
            <div className="container">
                <div className={styles.head}>
                    <h2 className="tagline">our projects</h2>
                    <h3>Our Recent Projects</h3>
                    <p>Our team is dedicated to delivering exceptional IT solutions tailored to meet
                        the unique needs of each client.</p>
                </div>
                <div className={styles.projectsContainer}>
                    <div className={styles.project}>
                        <div className={styles.projectText}>
                            <h4>Renewable Energy Landing Page</h4>
                            <p>See the power of data in action as we break down how analytics
                                driven decisions led to a surge in campaign effectiveness.</p>
                            <div className={styles.projectTextChecks}>
                                <div className={styles.check}>
                                    <span className={styles.checkIcon}><FaCheck /></span>
                                    <span className={styles.checkText}>900% incease in ROI</span>
                                </div>
                                <div className={styles.check}>
                                    <span className={styles.checkIcon}><FaCheck /></span>
                                    <span className={styles.checkText}>40% decrease in CAC</span>
                                </div>
                            </div>
                            <a href="#" className="btn-primary">Read Full Case Study</a>
                        </div>
                        <div className={styles.projectImage}>
                            <div className={styles.projectImageContainer}>
                                <img src={projectImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectText}>
                            <h4>Renewable Energy Landing Page</h4>
                            <p>See the power of data in action as we break down how analytics
                                driven decisions led to a surge in campaign effectiveness.</p>
                            <div className={styles.projectTextChecks}>
                                <div className={styles.check}>
                                    <span className={styles.checkIcon}><FaCheck /></span>
                                    <span className={styles.checkText}>900% incease in ROI</span>
                                </div>
                                <div className={styles.check}>
                                    <span className={styles.checkIcon}><FaCheck /></span>
                                    <span className={styles.checkText}>40% decrease in CAC</span>
                                </div>
                            </div>
                            <a href="#" className="btn-primary">Read Full Case Study</a>
                        </div>
                        <div className={styles.projectImage}>
                            <div className={styles.projectImageContainer}>
                                <img src={projectImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectText}>
                            <h4>Renewable Energy Landing Page</h4>
                            <p>See the power of data in action as we break down how analytics
                                driven decisions led to a surge in campaign effectiveness.</p>
                            <div className={styles.projectTextChecks}>
                                <div className={styles.check}>
                                    <span className={styles.checkIcon}><FaCheck /></span>
                                    <span className={styles.checkText}>900% incease in ROI</span>
                                </div>
                                <div className={styles.check}>
                                    <span className={styles.checkIcon}><FaCheck /></span>
                                    <span className={styles.checkText}>40% decrease in CAC</span>
                                </div>
                            </div>
                            <a href="#" className="btn-primary">Read Full Case Study</a>
                        </div>
                        <div className={styles.projectImage}>
                            <div className={styles.projectImageContainer}>
                                <img src={projectImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}