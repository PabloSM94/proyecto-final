let DAOmensajes;

switch (process.env.VARENT){
    case 'dev':
        const {default: MensajesDAOMongolocal} = await import ('../mensajes/mensajesDAOmongoDBlocal.js')
        DAOmensajes = new MensajesDAOMongolocal()
        break
    case 'prod':
        const {default: MensajesDAOMongo} = await import ('../mensajes/mensajesDAOmongoDB.js')
        DAOmensajes = new MensajesDAOMongo()
        break
}

export default DAOmensajes