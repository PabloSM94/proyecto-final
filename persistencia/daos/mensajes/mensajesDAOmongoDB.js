import ContenedorMongo from "../../contenedores/contenedorMongoDB.js"

class MensajesDAOMongo extends ContenedorMongo{
    constructor() {
        super('mensajes', {
            email: { type: String, required: true },
            fecha: { type: String, required: true },
            texto: { type: String, required: true },
        })
    }
    
    verMensajes = async () => {
        return await this.obtenerObjetos()
    }

    guardarMensajes = async (mensaje) => {
        return await this.guardar(mensaje)
    }
    

}

export default MensajesDAOMongo