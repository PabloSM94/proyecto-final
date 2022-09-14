import modelo from '../persistencia/carritos.js'

export const verCarrito = async (usuario) => {
    const carrito = await modelo.verCarrito(usuario)
    return carrito
}

export const agregarProducto = async (user,id) => {
    await modelo.agregarProducto(user,id)
}

export const eliminarProducto = async (user,id) => {
    await modelo.eliminarProducto(user,id)
}

export const vaciarCarrito = async (id) => {
    await modelo.vaciarCarrito(id)
}



