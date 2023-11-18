import styles from './Categoria.module.css';
import Card from '../Card';

function Categoria({categoria}) {
    return (
        <>
            <h2>{`${categoria}`}</h2>
            <section className={styles.categoria}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>        
        </>
    )
}
export default Categoria;