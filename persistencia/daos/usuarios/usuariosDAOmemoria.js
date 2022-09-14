import Usuario from "../../../scripts/entidades/usuarios.js"
import bCrypt from 'bcrypt'

class persistenciaMemory {
    constructor() {
        this.usuarios = []
    }
    obtenerUsuarios = async () => {
        return this.usuarios
    }
    crearUsuario = async usuario => {
        const usuarioCreado = new Usuario(Math.floor(Math.random()*1000),usuario)
        this.usuarios.push(usuarioCreado.datos())
        return usuarioCreado.datos()
    }

    autenticarUsuario = async usuario => {
        console.log(this.obtenerUsuarios())
        let auth = 0;
        //Verifico si existe el usuario
        for(let elem of this.usuarios){
            if(elem.email == usuario.email){
                //Comparo la contraseña
                if(bCrypt.compareSync(usuario.password,elem.password)){
                    auth = 1
                }
                else{
                    throw new Error('La contraseña no coincide')
                }
            }
            else{
                throw new Error('No existe usuario en base de datos')
            }
        }
        return auth

    }
}

export default new persistenciaMemory()