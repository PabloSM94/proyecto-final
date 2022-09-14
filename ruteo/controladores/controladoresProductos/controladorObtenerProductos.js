import {obtenerProductos} from "../../../servicios/productos.js"

export const controladorObtenerProductos = async function(req,res){
    try{
        const productoBuscado = await obtenerProductos(req.params.id)
        res.json(JSON.stringify(productoBuscado))
    }
    catch(error){
        res.status(500).json(`Ocurrio un error en la busqueda. ${error}`)
    }
}