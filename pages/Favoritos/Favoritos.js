import styles from "../Favoritos/Favoritos.module.css";
import { Banner } from "../../components/Banner/Banner";
import { Titulo } from "../../components/Titulo/Titulo";
import { Card } from "../../components/Card/Card";
import { useFavoritosContext } from "Context/Favoritos";

export function Favoritos () {
    const {favorito} = useFavoritosContext()
 console.log(favorito)
    return (
        <>
        <Banner img="favorite" color="#AF7EAA"/>
        <Titulo>
            <h1>Mis Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {favorito.map((fav) => {
                return <Card {...fav} key={fav.id} />;
            })}
        </section>
        </>
    );
}