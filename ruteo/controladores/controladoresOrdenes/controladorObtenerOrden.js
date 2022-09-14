import { obtenerOrdenes } from "../../../servicios/ordenes.js"

export const controladorObtenerOrden = async function(req,res){
    try {
        const user = req.user.email
        const ordenes = await obtenerOrdenes(user)
        res.json(JSON.stringify(ordenes))
    } catch (error) {
        res.status(500).json(`Error!! ${error}`)
    }
    
}