let DAOusuarios;

switch (process.env.VARENT){
    case 'dev':
        const {default: UsuariosDAOMongolocal} = await import ('../../daos/usuarios/usuariosDAOmongoDBlocal.js')
        DAOusuarios = new UsuariosDAOMongolocal()
        break
    case 'prod':
        const {default: UsuariosDAOMongo} = await import ('../../daos/usuarios/usuariosDAOmongoDB.js')
        DAOusuarios = new UsuariosDAOMongo()
        break
}

export default DAOusuarios