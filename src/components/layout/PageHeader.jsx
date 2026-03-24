import { Link } from 'react-router-dom';
import styles from './PageHeader.module.css';

export default function PageHeader({ title, breadcrumb }) {
    return (
        <section className={styles.pageHeader}>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.breadcrumb}>
                        <Link to="/">Home</Link>
                        <span className={styles.separator}>/</span>
                        <span>{breadcrumb}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
