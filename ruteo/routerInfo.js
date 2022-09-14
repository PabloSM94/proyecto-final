import express from 'express'
import os from 'os'
import { argv } from '../scripts/env.js'

const {Router} = express
const routerInfo = Router()
const numCPUs = os.cpus().length


routerInfo.get('/info',(req,res)=>{
    let datos = []

    //Argumentos de entrada  
    datos.push({argumentosEntrada: argv})

    //nombre de la plataforma (SO)   
    datos.push({nombrePlataforma: process.env.OS})

    //Version de nodejs   
    datos.push({nodeJSVersion: process.versions.node})

    //Memoria total reservada (Rss)    
    datos.push({memoriaReservada: process.memoryUsage().rss})

    //path de ejecucion    
    datos.push({pathEjecucion: process.env.Path})

    //processid    
    datos.push({processID: process.pid})

    //Carpeta del proyecto    
    datos.push({carpetadeProyecto: process.argv[1]})
   
 
    //Numero de procesadores presentes en el servidor
    datos.push({numerodeProcesadores: numCPUs})

    res.render('datos',{argumentosEntrada: JSON.stringify(datos[0].argumentosEntrada),
    nombrePlataforma: datos[1].nombrePlataforma,
    nodeJSVersion: datos[2].nodeJSVersion,
    memoriaReservada: datos[3].memoriaReservada,
    pathEjecucion: datos[4].pathEjecucion,
    processID: datos[5].processID,
    carpetadeProyecto: datos[6].carpetadeProyecto,
    numerodeProcesadores: datos[7].numerodeProcesadores})
    }
)

export {routerInfo}