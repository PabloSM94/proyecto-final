let DAOordenes;

switch (process.env.VARENT){
    case 'dev':
        const {default: OrdenesDAOMongolocal} = await import ('../ordenes/ordenesDAOmongoDBlocal.js')
        DAOordenes = new OrdenesDAOMongolocal()
        break
    case 'prod':
        const {default: OrdenesDAOMongo} = await import ('../ordenes/ordenesDAOmongoDB.js')
        DAOordenes = new OrdenesDAOMongo()
        break
}

export default DAOordenes