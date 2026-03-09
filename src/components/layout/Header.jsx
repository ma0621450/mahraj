import Navbar from "./Navbar";
import TopBar from "./TopBar";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <TopBar />
                <Navbar />
            </div>
        </>
    )
}   