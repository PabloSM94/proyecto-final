import x from 'yargs/yargs'
const yargs = x(process.argv.slice(2))
const argv = yargs
    .alias({
        p: 'port',
        m: 'modo'
    })
    .default({
        port: process.env.PORT || 8080,
        modo: 'prod'
    })
    .argv

export {argv}