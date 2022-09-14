import jwt from 'jsonwebtoken'

export const middlewareRegistrado = async function(req,res,next){
    try {
        const accessToken = req.headers['auth-token']
        if(!accessToken) res.send("acceso denegado")

        await jwt.verify(accessToken,"secreto",(error,user)=>{
            if(!!error){
                throw new Error("Fallo validacion de token")
            }
            else{
                req.user = user
                next()
            }
        }
    )
    } catch (error) {
        res.status(500).json(`Error! ${error}`)
    }
 }