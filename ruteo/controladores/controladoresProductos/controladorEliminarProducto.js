import {eliminarProducto} from "../../../servicios/productos.js"

export const controladorEliminarProducto = async function(req,res){
    try{
        await eliminarProducto(req.params.id)
        res.json(JSON.stringify(`Producto ${req.params.id} eliminado}`))
    }
    catch(error){
        res.status(500).json(`Ocurrio un error en la eliminacion del producto. ${error}`)
    }
}