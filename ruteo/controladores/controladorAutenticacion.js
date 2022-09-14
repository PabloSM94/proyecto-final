import { autenticarUsuario } from "../../servicios/autenticarUsuario.js"
import jwt from 'jsonwebtoken'

function generateAccessToken(user){
    return jwt.sign(user,"secreto",{expiresIn:'60m'})
}

export const controladorAutenticacion = async function(req,res){
        try{
            const auth = await autenticarUsuario(req.body)
            if(auth == 1 ){
                const user = {email: req.body.email}
                const accessToken = generateAccessToken(user)
                req.header('auth-token',accessToken)
                res.json(JSON.stringify(`El usuario fue autenticado correctamente, Token: ${accessToken}`))
            }
            else{
                res.json(JSON.stringify("El usuario NO fue autenticado correctamente"))
            }
        }
        catch(error){
            res.status(500).json(`Ocurrio un error en la autenticacion. ${error}`)
        }
}

