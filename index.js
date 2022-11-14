const TelegramApi = require('node-telegram-bot-api')

const token = '5483476054:AAFDaw2S9QZZfwlunUFVjX6ErQZEjOac6L0'      

const bot = new TelegramApi(token, {polling: true})


bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `გამარჯობათ თქვენ მომწერეთ მე ${text}`)
    if (text === '/start') {
        bot.sendMessage(chatId, 'სალამი შენ ხარ ნოდარის ბოტში');
    }
    if (text === '/info') {
        bot.sendMessage(chatId, `შენი სახელია ${msg.from.first_name} ${msg.from.last_name}`);
    }
    
    console.log(msg);
});
