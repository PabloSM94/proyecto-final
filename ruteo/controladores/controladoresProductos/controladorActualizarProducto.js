import {actualizarProducto} from "../../../servicios/productos.js"

export const controladorActualizarProducto = async function(req,res){
    try{
        await actualizarProducto(req.params.id,req.body)
        res.json(JSON.stringify(`Producto Actualizado`))
    }
    catch(error){
        res.status(500).json(`Ocurrio un error en la Actualizacion. ${error}`)
    }
}