import styles from "./Banner.module.css"

export function Banner ({color}){
    return(
        <div className={styles.capa}>
            <img className={styles.imgFull}src="img/banner-home.png" alt="Foto Banner"/>
            <div className={styles.gradient} style={{background:`${color}`}}></div> 
        </div>
    );
}

