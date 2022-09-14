import { agregarProducto } from "../../../servicios/crearCarrito.js"

export const controladorShoppingCartAdd = async function(req,res){
    try {
        const idproducto = req.body.productId
        const user = req.user.email
        await agregarProducto(user,idproducto)
        res.json("Se agrego el producto al carrito")
    } catch (error) {
        res.status(500).json(`Error!! ${error}`)
    }
    
}