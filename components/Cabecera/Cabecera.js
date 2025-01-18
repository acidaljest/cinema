import styles from "./Cabecera.module.css"
import { Link } from "react-router-dom";
import {CabeceraLink} from "../CabeceraLink/CabeceraLink"

export function Cabecera (){
    return(
        <header className={styles.cabecera}>
           <Link to="/">
            <section className={styles.logoContainer}>
                <img src="/logo-alura.png" alt="Logo Alura"/>
                <span>Cinema</span>
            </section>
           </Link>
           <nav>
            <CabeceraLink url="/">
                Home
            </CabeceraLink>
            <CabeceraLink url="/favoritos">
                Favoritos
            </CabeceraLink>
            </nav>    
        </header>
    )
}

 