import {crearProducto} from "../../../servicios/productos.js"

export const controladorCrearProducto = async function(req,res){
    try{
        console.log(req.body)
        await crearProducto(req.body)
        res.json(JSON.stringify(`Productocreado`))
    }
    catch(error){
        res.status(500).json(`Ocurrio un error en la creacion. ${error}`)
    }
}