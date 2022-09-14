import express from 'express'
import { controladorImagenes, upload } from './controladores/controladorImagenes.js'
const {Router} = express
const routerImages = Router()

routerImages.post('/images',upload.single('imagen'),controladorImagenes)

export {routerImages}