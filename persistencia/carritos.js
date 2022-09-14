import DAOcarritos from './daos/carritos/carritosDAO.js'


class persistenciaCarritos {
    constructor() {
    }

    verCarrito = async (user) => {
        return DAOcarritos.verCarrito(user)
    }

    agregarProducto = async(user,id) =>{
        return DAOcarritos.agregarProducto(user,id)
    }

    eliminarProducto = async(user,id) =>{
        return DAOcarritos.eliminarProducto(user,id)
    }

    vaciarCarrito = async(id) =>{
        return DAOcarritos.vaciarCarrito(id)
    }

}

export default new persistenciaCarritos()
