import DAOusuarios from "./daos/usuarios/usuariosDAO.js"

class persistenciaUsuarios {
    constructor() {
        this.usuarios = []
    }
    obtenerUsuarios = async (id) => {
        return DAOusuarios.obtenerUsuarios(id)
    }
    crearUsuario = async usuario => {
        return DAOusuarios.crearUsuario(usuario)
    }

    autenticarUsuario = async usuario => {
        return DAOusuarios.autenticarUsuario(usuario)
    }

    asignarCarritoUsuario = async id => {
        return DAOusuarios.asignarCarritoUsuario(id)
    }
}

export default new persistenciaUsuarios()