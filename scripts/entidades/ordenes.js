export default class Orden {
    constructor (id,idCliente){
        this.id = id
        this.idCliente = idCliente
        this.productos = []
        this.fecha = Date.now().toString()
    }
}