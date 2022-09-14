import { cargaInicial, cargaSecundaria, guardarMensajes } from "../servicios/mensajeria.js"

async function socketMensajes(socket,sockets){
    //Carga inicial 
    cargaInicial(socket)
    //Agregar nuevo mensajes y persistir
    socket.on("nuevoMensaje",async msg =>{
        console.log("llego mensaje nuevo al servidor",msg)
        await guardarMensajes(msg)
        await cargaSecundaria(sockets)
            
    })
}

export {socketMensajes}