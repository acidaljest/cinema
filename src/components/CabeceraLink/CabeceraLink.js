import { Link } from "react-router-dom"
import styles from "./CabeceraLink.module.css"

export function CabeceraLink({url, children}){
    return(
        <Link to={url} className={styles.link}>
             {children}  
        </Link>
    )

}

