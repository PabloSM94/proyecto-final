import modelo from '../persistencia/productos.js'

export const obtenerProductos = async (id) => {
    return await modelo.obtenerProductos(id)
}

export const crearProducto = async (producto) => {
    return await modelo.crearProducto(producto)
}

export const eliminarProducto = async (id) => {
    return await modelo.eliminarProducto(id)
}

export const actualizarProducto = async (id,datos) => {
    return await modelo.actualizarProducto(id,datos)
}
