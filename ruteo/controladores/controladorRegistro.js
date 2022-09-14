import { crearUsuario, obtenerUsuarios } from "../../servicios/crearUsuario.js"

export const controllerRegistro = async function(req,res){
        try{
            const user = await crearUsuario(req.body)
            res.json(JSON.stringify("El usuario fue creado correctamente"))
        }
        catch(error){
            res.status(500).json(`Ocurrio un error en la creacion de usuario. ${error}`)
        }
}