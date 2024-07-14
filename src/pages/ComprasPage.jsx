import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPage = () => {

    const { productos } = useContext( ProductosContext )
    const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (compra) =>{
      agregarCompra(compra)
    }
    const handleQuitar = (id) =>{
      eliminarCompra(id)
    }
   

  return (    
    <div>
    <marquee behavior="alternate" direction="left"><h2 className="color-title">Catalogo de productos</h2></marquee>
    <hr />
    {productos.map(producto => (
        <Card 
          key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
          >
        </Card>
    ))}
    
    </div>
  )
}
