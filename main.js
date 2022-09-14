import 'dotenv/config'
import express from 'express'
import { routerImages } from './ruteo/routerImages.js'
import { routerUsuarios } from './ruteo/routerUsuarios.js'
import { routerProductos } from './ruteo/routerProductos.js'
import { routerCarritos } from './ruteo/routerCarritos.js'
import { routerOrdenes } from './ruteo/routerOrdenes.js'
import { routerAutenticacion } from './ruteo/routerAutenticacion.js'
import { routerInfo } from './ruteo/routerInfo.js'
import { argv } from './scripts/env.js'
import { socketMensajes } from './ruteo/routerMensajes.js'
import { Server as HttpServer } from 'http'
import { Server as IOServer } from 'socket.io'
import exphbs from 'express-handlebars'


const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const handlebarsConfig = {
    defaultLayout: 'index.handlebars'
  }

app.engine('handlebars', exphbs.engine(handlebarsConfig))
app.set('view engine', 'handlebars')
app.set('views', './views')


app.use(express.urlencoded({ extended: true })) //Formularios
app.use(express.json()) //JSON

app.use(express.static('./public/'))

app.use('/api',routerImages)
app.use('/api',routerUsuarios)
app.use('/api',routerProductos)
app.use('/api',routerCarritos)
app.use('/api',routerOrdenes)
app.use('/',routerAutenticacion)
app.use('/',routerInfo)

io.on('connection', async (socket)=>{
    socketMensajes(socket,io.sockets)
})

const PORT = argv.port

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})
    
server.on("error", error => console.log(`Error en servidor ${error}`))