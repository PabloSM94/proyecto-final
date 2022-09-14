import DAOordenes from './daos/ordenes/ordenesDAO.js'


class persistenciaOrdenes {
    constructor() {
    }

    generarOrden = async (user) => {
        return DAOordenes.generarOrden(user)
    }

    obtenerOrdenes = async (user) => {
        return DAOordenes.obtenerOrdenes(user)
    }


}

export default new persistenciaOrdenes()
