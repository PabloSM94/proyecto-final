export default class persistenciaMemory {
    constructor() {
        this.productos = []
    }
    obtenerProductos = async (id) => {
        if(!id){
            return this.productos
        }
        else{
            //Verifico si existe el id
            for(let elem of this.productos){
                if(elem.id == id){
                    return elem
                }
            }
        }
        
    }

    crearProducto = async producto => {
        this.productos.push(producto)
    }

    eliminarProducto = async id => {
        let flagProd = 0;
        for (let elem of this.productos){
            if(elem.id == parseInt(id)){
                const nuevosProductos = this.productos.filter((obj)=>obj.id !== parseInt(id))
                this.productos = nuevosProductos
                flagProd = 1
            }
        }
        if (flagProd === 0){
            throw new Error ("No existe el id indicado")
        }
    }

    actualizarProducto = async (id,datos) =>{
        let flagProd = 0;
        for (let elem of this.productos){
            if(elem.id == parseInt(id)){
                const producto = new Producto(elem.id,elem)
                const nuevosProductos = this.productos.filter((obj)=>obj.id !== parseInt(id))
                const keys = Object.keys(datos)
                for (let elements of keys){
                producto[elements]=datos[elements]
                }
                nuevosProductos.push(producto)
                this.productos = nuevosProductos
                flagProd = 1
            }
        }
        if (flagProd === 0){
            throw new Error ("No existe el id indicado")
        }
    }

}