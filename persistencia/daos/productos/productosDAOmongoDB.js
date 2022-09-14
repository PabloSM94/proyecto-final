import ContenedorMongo from "../../contenedores/contenedorMongoDB.js"

class ProductosDAOMongo extends ContenedorMongo{
    constructor() {
        super('productos', {
            id: { type: Number, required: true },
            name: { type: String, required: true },
            description: { type: String, required: true },
            price: { type: Number, required: true },
            image: { type: String, required: true },
        })
    }
    obtenerProductos = async id => {
        return await this.obtenerObjetos(id)
    }

    crearProducto = async producto => {
        return await this.guardar(producto)
    }

    eliminarProducto = async id => {
        return await this.borrar(id)
    }

    actualizarProducto = async (id,datos) =>{
        return await this.actualizar(id,datos)
    }

}


export default ProductosDAOMongo