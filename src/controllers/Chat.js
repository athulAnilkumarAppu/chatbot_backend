const express = require('express')

const chatRouter = express.Router()

const chatModel = require('../models/ChatModel')
const { chatBotReplyFn } = require('../utils/utils')

const getMessagesApi = chatRouter.post('/getMessages', (req, res)=> {
    chatModel.find().then((result)=> {
        res.status(200).json({messages: result, status: true})
    }).catch((error)=> {
        res.status(200).json({messages: [], status: false})
    })
})


const recieveMessageApi = chatRouter.post('/recieveMessage', (req, res)=> {
    const recievedMessage = req.body.messages

    const replyText = chatBotReplyFn(recievedMessage.toLowerCase())

    res.status(200).json({recievedMessage: recievedMessage, reply: replyText})

    // if(recievedMessage.toLowerCase() === 'hi'){
    //     res.status(200).json({recievedMessage: recievedMessage, reply: 'Hi, how can i help you?'})
    // }else if(recievedMessage.toLowerCase() === 'what is your name'){
    //     res.status(200).json({recievedMessage: recievedMessage, reply: 'My name is ChatBot'})
    // }else{
    //     res.status(200).json({recievedMessage: recievedMessage, reply: 'sorry, I cannot process reply!'})
    // }
})


const saveMessageApi = chatRouter.post('/saveMessage', (req, res)=> {
    const chat = req.body.chat

    chatModel.create({recievedMessage: chat.recievedMessage, replyMessage: chat.reply}).then((result)=> {
        res.status(200).json({status: true})
    }).catch(()=> {
        res.status(200).json({status: false})
    })
})


const clearChatApi = chatRouter.post('/clearChat', (req, res)=> {
    chatModel.deleteMany({}).then((result)=>  {
        res.status(200).json({status: true})
    }).catch((error)=> {
        res.status(200).json({status: false})
    })
})

module.exports = {
    getMessages: getMessagesApi,
    recieveMessage: recieveMessageApi,
    saveMessage: saveMessageApi,
    clearChat: clearChatApi
}