let DAOcarritos;

switch (process.env.VARENT){
    case 'dev':
        const {default: CarritosDAOMongolocal} = await import ('../../daos/carritos/carritosDAOmongoDBlocal.js')
        DAOcarritos = new CarritosDAOMongolocal()
        break
    case 'prod':
        const {default: CarritosDAOMongo} = await import ('../../daos/carritos/carritosDAOmongoDB.js')
        DAOcarritos = new CarritosDAOMongo()
        break
}

export default DAOcarritos