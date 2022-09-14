import { eliminarProducto } from "../../../servicios/crearCarrito.js"

export const controladorShoppingCartDelete = async function(req,res){
    try {
        const idproducto = req.params.id
        const user = req.user.email
        await eliminarProducto(user,idproducto)
        res.json("Se eliminó el producto del carrito")
    } catch (error) {
        res.status(500).json(`Error!! ${error}`)
    }
    
}