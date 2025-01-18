import styles from "./NotFound.module.css"

export function NotFound(){
    return(
        <section className={styles.container}>
            <h2 className="styles.error">404</h2>
            <p className="styles.text_error">Página no encontrada</p>
        </section>
    )
        
}