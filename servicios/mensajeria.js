import modelo from '../persistencia/mensajes.js'

export const verMensajes = async () => {
    return await modelo.verMensajes()
}

export const guardarMensajes = async (mensaje) => {
    return await modelo.guardarMensajes(mensaje)
}

export const cargaInicial = async (socket) => {
    const mensajes = await verMensajes()
    socket.emit("mensajes",mensajes)
}

export const cargaSecundaria = async (sockets) => {
    const mensajes = await verMensajes()
    sockets.emit("mensajes",mensajes)
}


