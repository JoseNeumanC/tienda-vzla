import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () =>{

return (


<nav className="navbar navbar-expand-lg bg-light">

<div className="container-fluid">
    <a className="navbar-brand" >Tienda VZLA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" >Inicio</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" >Productos</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" >Sedes</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" >Contacto</a>
        </li>
    </ul>
    </div>
</div>

<CartWidget/>

</nav>

)

}


//Exportando el componente
export default NavBar;