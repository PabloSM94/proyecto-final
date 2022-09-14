export const middlewareAdmin = async function(req,res,next){
   try {
      if(req.user.email == `admin@admin.com`){
         next()
      }
      else{
         throw new Error("El usuario registrado no es administrador")
      }
   } catch (error) {
      res.status(500).json(`ERROR! ${error}`)
   }

}