import express from 'express'
import { controladorActualizarProducto } from './controladores/controladoresProductos/controladorActualizarProducto.js'
import { controladorCrearProducto } from './controladores/controladoresProductos/controladorCrearProducto.js'
import { controladorEliminarProducto } from './controladores/controladoresProductos/controladorEliminarProducto.js'
import { controladorObtenerProductos } from './controladores/controladoresProductos/controladorObtenerProductos.js'
import { middlewareAdmin } from './controladores/middlewareAdmin.js'
import { middlewareRegistrado } from './controladores/middlewareRegistrado.js'
const {Router} = express
const routerProductos = Router()

routerProductos.get('/products/:id?',controladorObtenerProductos)

routerProductos.post('/products',middlewareRegistrado,middlewareAdmin,controladorCrearProducto)

routerProductos.put('/products/:id',middlewareRegistrado,middlewareAdmin,controladorActualizarProducto)

routerProductos.delete('/products/:id',middlewareRegistrado,middlewareAdmin,controladorEliminarProducto)

export {routerProductos}