import { asignarCarritoUsuario, obtenerUsuarios } from "../../../servicios/crearUsuario.js";
import ContenedorMongo from "../../contenedores/contenedorMongoDBlocal.js"
import Carrito from "../../../scripts/entidades/carritos.js";
import {obtenerProductos} from "../../../servicios/productos.js"

class CarritosDAOMongo extends ContenedorMongo{
    constructor() {
        super('carritos', {
            id: { type: String, required: true },
            productos: { type: Object, required: true },
        })
    }

    verCarrito = async(usuario) => {
        let id;
        const Usuarios = JSON.parse(await obtenerUsuarios())
        for (let elements of Usuarios){
            if(elements.email == usuario){
                id = elements.id
            }  
        }
        let carritoCreado = false
        const carrito = JSON.parse(await this.obtenerObjetos())
        if (carrito.length > 0){
            for (let elem of carrito){
                if(elem.id == id){
                    carritoCreado = true
                    return elem
                    }
            }
            if (!carritoCreado){
            const carrito = new Carrito(id,[])
            await this.guardar(carrito.datos())
            return carrito.datos()
            }
            
        }
        else{
            const carrito = new Carrito(id,[])
            await this.guardar(carrito.datos())
            return carrito.datos()
        } 
    } 

    agregarProducto = async (user,id) => {
        let productoenCarrito = false
        const carrito = await this.verCarrito(user)
        const carritoAct = carrito
        const productoAgregar = JSON.parse(await obtenerProductos(id))
        for (let productos of carritoAct.productos){
            if(productos.prod.id == productoAgregar.id){
                let cantidadActual = productos.cant
                productos.cant = cantidadActual + 1
                productoenCarrito = true
            }
        }
        if (!productoenCarrito){
            carritoAct.productos.push({prod: productoAgregar, cant:1})
        }
        await this.actualizar(carritoAct.id,carritoAct)
    }

    eliminarProducto = async(user,idProd) => {
        let productoenCarrito = false
        const carrito = await this.verCarrito(user)
        let carritoAct = carrito
        const idProductoaBorrar = idProd
        for (let productos of carritoAct.productos){
            if(productos.prod.id == idProductoaBorrar){
                let cantidadActual = productos.cant
                if(cantidadActual>1){
                    productos.cant = cantidadActual - 1
                }
                else{
                    const nuevoCarrito = carritoAct.productos.filter(prod => (prod.prod.id) != idProductoaBorrar)
                    carritoAct.productos = nuevoCarrito
                }
                productoenCarrito = true
            }
        }
        if (!productoenCarrito){
            throw new Error ('El producto no existe en el carrito')
        }
        console.log(carritoAct)
        await this.actualizar(carritoAct.id,carritoAct)
    }

    vaciarCarrito = async(id) =>{
        await this.actualizar(id,{"id": id,
        "productos": []})
    }
    
    

}

export default CarritosDAOMongo