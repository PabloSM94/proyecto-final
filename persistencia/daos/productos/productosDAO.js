let DAOproductos;

switch (process.env.VARENT){
    case 'dev':
        const {default: ProductosDAOMongolocal} = await import ('../../daos/productos/productosDAOmongoDBlocal.js')
        DAOproductos = new ProductosDAOMongolocal()
        break
    case 'prod':
        const {default: ProductosDAOMongo} = await import ('../../daos/productos/productosDAOmongoDB.js')
        DAOproductos = new ProductosDAOMongo()
        break
}

export default DAOproductos