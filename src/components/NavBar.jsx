import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import '../styles/navbar.css'

export const NavBar = () => {
    const { listaCompras } = useContext(CarritoContext)
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <NavLink to='/' className="nav-link active navbar-brand" href="#"><b className="style-navbar">Tienda Online</b></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/carrito' className="nav-link active navbar-brand"><b className="style-navbar">Mis Compras</b></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/somos' className="nav-link active navbar-brand"><b className="style-navbar"> Quienes somos</b></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contactos' className="nav-link active navbar-brand"><b className="style-navbar"> Contactanos</b></NavLink>
                        </li>
                    </ul>
                    <NavLink to='/carrito'>
                    <div>
                    <button class="btn btn btn-warning"><b className="carrito-text-color">Carrito </b><b className='carrito-counter'>{listaCompras.length}</b></button> 
                    </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
