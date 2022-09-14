function validarEmail(email){
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const test = regex.test(email)
    return test
}

export default class Mensaje {
    constructor (email,fecha,texto){
        this.email = email
        this.fecha = fecha
        this.texto = texto
    }

    get email(){ return this.email }

    set email(email){
        if (!email ) throw new Error('"Correo" es un campo requerido')
        if (validarEmail(email) === false ) throw new Error("El email es invalido")
        this._email = email
    }

    get fecha(){ return this.fecha }

    set fecha(fecha){
        if (!fecha ) throw new Error('"fecha" es un campo requerido')
        this._fecha = fecha
    }

    get texto(){ return this.texto }

    set texto(texto){
        if (!texto ) throw new Error('"texto" es un campo requerido')
        this._texto = texto
    }

    datos(){
        return Object.freeze(JSON.parse(JSON.stringify({
        email: this.email, 
        fecha: this.fecha, 
        texto: this.texto
        })))
    }
}