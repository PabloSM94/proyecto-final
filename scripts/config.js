import 'dotenv/config'

export default {
    mongodb: {
        cnxStr: `mongodb+srv://${process.env.USER_BD}:${process.env.PASS_BD}@clusterpm.2bebn.mongodb.net/ecommerce`,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    mongodblocal: {
        cnxStr: `mongodb://localhost:27017/ecommerce`,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    }
}