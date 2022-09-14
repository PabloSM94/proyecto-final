export default class Producto {
    constructor (id,{name,description,price,image}){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.image = image
    }
    
    get id(){ return this._id }

    set id(id){
        if (!id ) throw new Error('"id" es un campo requerido')
        this._id = id
    }

    get name(){ return this._name }

    set name(name){
        if (!name ) throw new Error('"name" es un campo requerido')
        this._name = name
    }

    get description(){ return this._description }

    set description(description){
        if (!description ) throw new Error('"description" es un campo requerido')
        this._description = description
    }
    
    get price(){ return this._price }

    set price(price){
        if (!price ) throw new Error('"price" es un campo requerido')
        if (isNaN(price)) throw new Error('"price" debe ser numérico')
        if (price < 0) throw new Error('"price" debe ser positivo')
        this._price = price
    }

    get image(){ return this._image }

    set image(image){
        if (!image ) throw new Error('"image" es un campo requerido')
        this._image = image
    }

    datos(){
        return Object.freeze(JSON.parse(JSON.stringify({
        id: this.id,
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image
        })))
    }
}