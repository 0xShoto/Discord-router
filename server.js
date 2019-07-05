const   Discord = require('discord.js'),
        client = new Discord.Client()
        Router = require('./src')
        require('dotenv').config()

Router.setRoutes(require('./src/routes'))
Router.setClient(client)

client.on('message', message => {
    if (message.author.bot) return
    
    if (message.content.startsWith('/get')) {
        var args = message.content.split(' ')
        Router.sendTemplate(args[1], message.author, message.channel)
    }
})

client.on('ready', () => {
    console.log(`${client.user.tag} est en ligne`)
})

client.login(process.env.TOKEN)