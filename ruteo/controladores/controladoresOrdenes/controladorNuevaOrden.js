import enviarEmail from "../../../servicios/enviarEmail.js"
import { generarOrden } from "../../../servicios/ordenes.js"
import 'dotenv/config'

export const controladorNuevaOrden = async function(req,res){
    try {
        const user = req.user.email
        const orden = await generarOrden(user)
        await enviarEmail(process.env.ADM_EMAIL,`Nuevo pedido generado`,`El cliente id:${orden.idCliente} genero el pedido ${orden.id}`)
        await enviarEmail(user,`Nuevo pedido generado`,`Gracias por generara tu pedido, tu numero de compra es ${orden.id}`)
        res.json(JSON.stringify(orden))
    } catch (error) {
        res.status(500).json(`Error!! ${error}`)
    }
    
}