import Orden from "../../../scripts/entidades/ordenes.js"
import ContenedorMongo from "../../contenedores/contenedorMongoDB.js"
import { verCarrito, vaciarCarrito } from "../../../servicios/crearCarrito.js"
import { obtenerUsuarios } from "../../../servicios/crearUsuario.js"

class OrdenesDAOMongo extends ContenedorMongo{
    constructor() {
        super('ordenes', {
            id: { type: String, required: true },
            idCliente: { type: Number, required: true },
            productos: { type: Object, required: true },
            fecha: { type: Number, required: true }
        })
    }

    generarOrden = async(user) => {
        const carrito = await verCarrito(user)
        if(carrito.productos.length==0){throw new Error("el carrito esta vacio")}
        let orden = new Orden(await this.asignarId(),carrito.id)
        orden.productos = carrito.productos
        await this.guardar(orden)
        await vaciarCarrito(carrito.id)
        return orden
    }

    obtenerOrdenes = async(user) => {
        const usuarios = JSON.parse(await obtenerUsuarios())
        let idUsuario = null
        for (let usuario of usuarios){
            if(usuario.email == user){
                idUsuario=usuario.id
            }
        }
        if(idUsuario==null){throw new Error("Verificar que el usuario este registrado")}
        const ordenes =  await this.coleccion.find({idCliente: idUsuario},{_id:0, __v:0})
        return ordenes

    }
    
    

}

export default OrdenesDAOMongo