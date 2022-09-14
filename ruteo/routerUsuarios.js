import express from 'express'
const {Router} = express
const routerUsuarios = Router()
import { controllerRegistro } from './controladores/controladorRegistro.js'

routerUsuarios.post('/users',controllerRegistro)

export {routerUsuarios}