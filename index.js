const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const { getMessages, recieveMessage, saveMessage, clearChat } = require('./src/controllers/Chat');

const port = 3000


mongoose.connect('mongodb://127.0.0.1:27017/chat-db')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
    console.log('DB connected')
})


const app = express()

app.use(cors())

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}))


const getMessagesApi = getMessages
const recieveMessageApi = recieveMessage
const saveMessageApi = saveMessage
const clearChatApi = clearChat

app.use('/chats', getMessagesApi)
app.use('/chats', recieveMessageApi)
app.use('/chats', saveMessageApi)
app.use('/chats', clearChatApi)

app.listen(port, ()=> {
    console.log(`listening to port https://localhost:${port}`)
})

module.exports = app
