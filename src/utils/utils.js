const chatBotReply = (text)=> {
    switch (text) {
        case 'hello':
          return 'Hi there! How can I help you today?';
        case 'how are you':
          return 'I am just a computer program, but thanks for asking!';
        case 'goodbye':
          return 'Goodbye! Have a great day!';
        case 'thanks':
        case 'thank you':
          return 'You\'re welcome!';
        case 'tell me a joke':
          return 'Why don\'t scientists trust atoms? Because they make up everything!';
        case 'weather':
          return 'I\'m sorry, I don\'t have real-time weather information.';
        case 'hi': 
          return 'Hi, how can i help you?'
        case 'what is your name':
            return 'My name is ChatBot'
        default:
          return "I'm sorry, I didn't understand that. Can you please clarify?";
      }
}

module.exports = {
    chatBotReplyFn: chatBotReply
}