const {connect, connection} = require('mongoose')

const connectionString = process.env.MDB_URI || 'mongodb://localhost:27017/socialMediaDb'

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection