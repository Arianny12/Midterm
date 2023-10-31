import Link from 'next/link'
import styles from "./JokeCard.module.css"

const Header =  () => (
    <header>
        <nav className={styles.headerBox}>
            <Link href='samoyed'>Samoyed</Link>
            <Link href='husky'>Husky</Link>
            <Link href='appenzeller'>Appenzeller</Link>
            <Link href='eskimo'>Eskimo</Link>
        </nav>
    </header>
);

export default Header;