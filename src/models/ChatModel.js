const mongoose = require('mongoose')

const Schema = mongoose.Schema

const chatSchemaType = {
    recievedMessage: {type: String, required: false},
    replyMessage: {type: String, required: false}
}

let chatSchema = new Schema(chatSchemaType) 

let chatModel = mongoose.model('chatModel', chatSchema)

module.exports = chatModel