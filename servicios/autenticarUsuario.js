import modelo from '../persistencia/usuarios.js'

export const autenticarUsuario = async (usuario) => {
    return await modelo.autenticarUsuario(usuario)
}