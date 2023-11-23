import styles from './PageNotFound.module.css'
import imgPageNotFound from './assets/erro404.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function PageNotFound()
{
    return(
        <>
            <Header />        
            <section className={styles.container}>
                <h2>Ops Página não localizada</h2>
                <img src={imgPageNotFound} alt="Logo de página não localizada"/>
            </section>
            <Footer />
        </>
    )
}
export default PageNotFound;