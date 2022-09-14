import Mensaje from "../scripts/entidades/mensajes.js"
import DAOmensajes from "./daos/mensajes/mensajesDAO.js"

class persistenciaCarritos {
    constructor() {
    }

    verMensajes = async () => {
        return DAOmensajes.verMensajes()
    }

    guardarMensajes = async (mensaje) => {
        const mensajeG = new Mensaje(mensaje.email,mensaje.fecha,mensaje.texto)
        return DAOmensajes.guardarMensajes(mensajeG.datos())
    }

}

export default new persistenciaCarritos()