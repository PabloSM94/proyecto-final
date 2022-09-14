import modelo from '../persistencia/usuarios.js'

export const crearUsuario = async (usuario) => {
    const user = await modelo.crearUsuario(usuario)
    return user
}

export const obtenerUsuarios = async (id) => {
    return await modelo.obtenerUsuarios(id)
}

export const asignarCarritoUsuario = async (id) => {
    return await modelo.asignarCarritoUsuario(id)
}


