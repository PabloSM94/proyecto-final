import ContenedorMongo from "../../contenedores/contenedorMongoDBlocal.js"
import Usuario from "../../../scripts/entidades/usuarios.js"
import bCrypt from 'bcrypt'

class UsuariosDAOMongo extends ContenedorMongo{
    constructor() {
        super('usuarios', {
            id: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            name: { type: String, required: true },
            lastname: { type: String, required: true },
            phone: { type: Number, required: true },
            image: { type: String, required: true },
        })
    }

    obtenerUsuarios = async (id) => {
        return await this.obtenerObjetos(id)
    }

    verificarUsuarioExistente = async (usuario) => {
        let valido=true;
        const Usuarios = JSON.parse(await this.obtenerUsuarios())
        for(let elem of Usuarios){
            console.log(elem.email)
            if(elem.email == usuario.email){
                valido=false
            }
        }
        return valido
    }

    crearUsuario = async usuario => {
        if(await this.verificarUsuarioExistente(usuario)){
            const usuarioCreado = new Usuario(await this.asignarId(),usuario)
            return await this.guardar(usuarioCreado.datos()) 
        }
        else{
            throw new Error("el email ingresado ya esta registrado")
        }
        
    }

    autenticarUsuario = async usuario => {
        const Usuarios = JSON.parse(await this.obtenerUsuarios())
        let auth = 0;
        //Verifico si existe el usuario
        for(let elem of Usuarios){
            if(elem.email == usuario.email){
                //Comparo la contraseña
                if(bCrypt.compareSync(usuario.password,elem.password)){
                    auth = 1
                }
                else{
                    throw new Error('La contraseña no coincide')
                }
            }
        }
        if(auth==0){
            throw new Error('No existe usuario en base de datos')
        }
        return auth

    }

    // asignarCarritoUsuario = async (id) => {
    //     await this.actualizar(id,{idCarrito: id})
    // }

}

export default UsuariosDAOMongo