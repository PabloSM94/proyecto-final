import { verCarrito } from "../../../servicios/crearCarrito.js"

export const controladorShoppingCart = async function(req,res){
    try {
        const carrito = await verCarrito(req.user.email)
        res.json(carrito)
    } catch (error) {
        res.status(500).json(`Error!! ${error}`)
    }
    
}