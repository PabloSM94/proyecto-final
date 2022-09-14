export default class Carrito {
    constructor (id,productos){
        this.id = id
        this.productos = productos
    }

    datos(){
        return Object.freeze(JSON.parse(JSON.stringify({
        id: this.id,
        productos: this.productos
        })))
    }
}