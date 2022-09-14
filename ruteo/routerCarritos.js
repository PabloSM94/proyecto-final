import express from 'express'
import { controladorShoppingCart } from './controladores/controladoresCarrito/controladorShoppingCart.js'
import { controladorShoppingCartAdd } from './controladores/controladoresCarrito/controladorShoppingCartAdd.js'
import { controladorShoppingCartDelete } from './controladores/controladoresCarrito/controladorShoppingCartDelete.js'
import {middlewareRegistrado} from './controladores/middlewareRegistrado.js'
const {Router} = express
const routerCarritos = Router()


routerCarritos.get('/shoppingcartproducts',middlewareRegistrado,controladorShoppingCart)

routerCarritos.post('/shoppingcartproducts',middlewareRegistrado,controladorShoppingCartAdd)

routerCarritos.delete('/shoppingcartproducts/:id?',middlewareRegistrado,controladorShoppingCartDelete)

export {routerCarritos}