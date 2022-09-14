import express from 'express'
import { controladorAutenticacion } from './controladores/controladorAutenticacion.js'
const {Router} = express
const routerAutenticacion = Router()

routerAutenticacion.post('/login',controladorAutenticacion)

export {routerAutenticacion}