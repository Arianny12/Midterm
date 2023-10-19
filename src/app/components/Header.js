import Link from 'next/link'
import styles from "./MovieCard.module.css"

const Header =  () => (
    <header>
        <nav className={styles.headerBox}>
            {/* <Link href='MovieName'>Movie Name</Link>
            <Link href='New York'>New York</Link>
            <Link href='California'>California</Link>
            <Link href='Paris'>Paris</Link> */}

        </nav>
    </header>
);

export default Header;