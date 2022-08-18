const connection = require('../config/connection')
const {User, Thought} = require('../models')

connection.on('error', (err) => err)

connection.once('open', async () => {
    console.log(`Connected to DB`)

    await User.deleteMany({})
    await Thought.deleteMany({})

    await User.collection.insertOne({
        username: 'hmanjun',
        email: 'harshith.hmm@gmail.com'
    })
    
    console.log(`Seeding finished`)
    process.exit(0)
})