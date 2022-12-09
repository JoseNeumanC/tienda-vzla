//Importar react
import React from "react";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'


//Creando componente app
const app = () =>{

    return (

        <div>

            <NavBar />
            
            <ItemListContainer 
            nombre = "Jose"
            tienda = "Tienda VZLA"
            />


        </div>

        
    )


    }



//Exportando el componente
export default app;