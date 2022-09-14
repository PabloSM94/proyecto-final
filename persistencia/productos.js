import Producto from "../scripts/entidades/productos.js"
import DAOproductos from "./daos/productos/productosDAO.js"

class persistenciaProductos {
    constructor() {
        this.productos = []
    }

    obtenerProductos = async (id) => {
        return DAOproductos.obtenerProductos(id)
    }
    crearProducto = async producto => {
        const productoCreado = new Producto(await DAOproductos.asignarId(),producto)
        console.log(productoCreado)
        return DAOproductos.crearProducto(productoCreado.datos())
    }

    eliminarProducto = async id => {
        return DAOproductos.eliminarProducto(id)
    }

    actualizarProducto = async (id,datos) =>{
        return DAOproductos.actualizarProducto(id,datos)
    }

}

export default new persistenciaProductos()