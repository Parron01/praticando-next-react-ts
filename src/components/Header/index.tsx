import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <a href="/">
                <img src="/images/logo.svg" alt="01.news"/>
                </a>
                <nav>
                    <a className={styles.active} href='/'>Home</a>
                    <a >Posts</a>
                </nav>
                <SignInButton/>
            </div>
        </header>
    )
}