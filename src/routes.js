import { Inicio } from "./pages/Inicio/Index";
import { Routes, Route} from "react-router-dom";
import { Favoritos } from "./pages/Favoritos/Favoritos";
import { Player } from "./pages/Player/Player";
import { NotFound } from "./pages/NotFound/NotFound";
import { PaginaBase } from "./pages/PaginaBase/PaginaBase";

export function AppRoutes() {
    return(
       <>
       <Routes>
            <Route path="/" element={<PaginaBase/>}>
                <Route index element={<Inicio/>}></Route>
                <Route path="favoritos" element={<Favoritos/>}></Route>
                <Route path=":id" element={<Player/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Route>
        </Routes>
       </>
    )
}

