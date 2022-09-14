import modelo from '../persistencia/ordenes.js'

export const generarOrden = async (user) => {
    return await modelo.generarOrden(user)
}

export const obtenerOrdenes = async (user) => {
    return await modelo.obtenerOrdenes(user)
}