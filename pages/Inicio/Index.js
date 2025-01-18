import {Banner} from "../../components/Banner/Banner";
import {Titulo} from "../../components/Titulo/Titulo";
import {Card} from "../../components/Card/Card"
import styles from "../../pages/Inicio/index.module.css"
import { useState, useEffect } from "react";

export function Inicio() {
    const [videos, setVideos]= useState([])

    useEffect(()=>{
        fetch(
            "https://my-json-server.typicode.com/acidaljest/cinema-api/videos")
            .then((response) => response.json())
            .then((data) =>{
               setVideos(data);
        });
    }, []);

    return (
        <>
        <Banner img="img/banner-home.png" color=""/>
        <Titulo>
            <h1>Un lugar para guardar tus videos favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {videos.map((item)=> <Card key={item.id} id={item.id} titulo={item.titulo} capa={item.capa}/>)}
        </section>
        
        <section className={styles.container}>
            {videos.map((video)=>{
            return <Card {...video} key={video.id}/>
            })}
        </section>                  
        </>
    );
}



