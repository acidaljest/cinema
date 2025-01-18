import styles from "./Titulo.module.css"

export function Titulo ({children}){
    return(
        <div className={styles.texto}>

            {children}
        </div>
    )
}