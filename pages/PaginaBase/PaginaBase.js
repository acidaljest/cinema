import { Cabecera } from "components/Cabecera/Cabecera";
import { Container } from "components/Container/Container";
import { Footer } from "components/Footer/Footer";
import { FavoritoProvider } from "Context/Favoritos";
import { Outlet } from "react-router-dom";


export function PaginaBase(){
    return( 
       <main>
            <Cabecera/>
            <FavoritoProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritoProvider>
            <Footer/>
       </main>
    )
}