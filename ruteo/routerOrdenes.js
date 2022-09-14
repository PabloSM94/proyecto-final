import express from 'express'
import { controladorNuevaOrden } from './controladores/controladoresOrdenes/controladorNuevaOrden.js'
import { controladorObtenerOrden } from './controladores/controladoresOrdenes/controladorObtenerOrden.js'
import {middlewareRegistrado} from './controladores/middlewareRegistrado.js'
const {Router} = express
const routerOrdenes = Router()


routerOrdenes.get('/orders',middlewareRegistrado,controladorObtenerOrden)

routerOrdenes.post('/orders',middlewareRegistrado,controladorNuevaOrden)


export {routerOrdenes}