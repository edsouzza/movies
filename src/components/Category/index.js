import styles from './Category.module.css';


function Category({ category, children }) {
    return (
        <>
            <h2>{category}</h2>
            <section className={styles.category}>                
                <div>
                    { children }
                </div>
            </section>        
        </>
    )
}
export default Category;


// {
//     {videos.map(video => <Card id={video.id} key={video.id}/>}
//     })
// }                