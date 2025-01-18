import { createContext, useState, useContext} from "react";

const FavoritosContext= createContext();

export function FavoritoProvider({children}){
    const [favorito, setFavorito]= useState([]);

    return (
        <FavoritosContext.Provider value={{favorito, setFavorito}}>
        {children}
        </FavoritosContext.Provider>
        )
}

export function useFavoritosContext(){
    const {favorito, setFavorito}= useContext(FavoritosContext)

    function agregarFavorito({id, titulo, capa}){
        console.log({id, titulo, capa})
        console.log(favorito)
        const favoritoRepetido= favorito.some(item=>item.id === id);
        console.log(favoritoRepetido)
        let nuevaLista= [...favorito]
        if(!favoritoRepetido){
            nuevaLista.push({id, titulo, capa})
            return setFavorito(nuevaLista)
        }

        /*nuevaLista = favorito.filter(item=> item.id !== id)
            return setFavorito(nuevaLista)*/
    }
    return { favorito, agregarFavorito };
}

