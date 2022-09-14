import bCrypt from 'bcrypt'

function validarEmail(email){
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const test = regex.test(email)
    return test
}

export default class Usuario {
    #password
    #phone

    constructor (id,{email,password,name,lastname,phone,image}){
        this.id = id
        this.email = email
        this.password = password
        this.name = name
        this.lastname = lastname
        this.phone = phone
        this.image = image
        this.idCarrito;
    }


    
    get id(){ return this._id }

    set id(id){
        if (!id ) throw new Error('"id" es un campo requerido')
        this._id = id
    }

    get email(){ return this._email }

    set email(email){
        if (!email ) throw new Error('"Correo" es un campo requerido')
        if (validarEmail(email) === false ) throw new Error("El email es invalido")
        this._email = email
    }

    get password(){ return this.#password }

    encriptar(password){
        //Encriptar pass
        const passEnc = bCrypt.hashSync(password,bCrypt.genSaltSync(10),null)
        return passEnc
    }

    set password(password){
        if (!password ) throw new Error('"Password" es un campo requerido')
        const passEnc = this.encriptar(password)
        console.log(passEnc)
        this.#password = passEnc
    }

    get name(){ return this._name }

    set name(name){
        if (!name ) throw new Error('"name" es un campo requerido')
        this._name = name
    }

    get lastname(){ return this._lastname }

    set lastname(lastname){
        if (!lastname ) throw new Error('"lastname" es un campo requerido')
        this._lastname = lastname
    }

    get phone(){ return this.#phone }

    set phone(phone){
        if (!phone ) throw new Error('"phone" es un campo requerido')
        this.#phone = phone
    }

    get image(){ return this._image }

    set image(image){
        if (!image ) throw new Error('"image" es un campo requerido')
        this._image = image
    }

    datos(){
        return Object.freeze(JSON.parse(JSON.stringify({
        id: this.id,
        email: this.email,
        password: this.#password,
        name: this.name,
        lastname:  this.lastname,
        phone: this.#phone,
        image: this.image
        })))
    }
}