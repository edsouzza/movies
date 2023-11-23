import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer className={styles.footer}>
            <h2><Link to="/">EdsoFlix</Link> &copy; Desenvolvido por Edsof 2023</h2>
        </footer>
    )
}
export default Footer;