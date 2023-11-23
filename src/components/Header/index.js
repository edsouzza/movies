import styles from './Header.module.css';
import { Link } from 'react-router-dom'

function Header()
{
    return(
        <header className={styles.header}>
            <Link to="/"><span>EdsoFlix</span></Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/watch">Assistir</Link>
            </nav>
        </header>        
    )
}
export default Header;