const   Discord = require('discord.js'),
        Router = require('../index')

const embed = new Discord.RichEmbed()
    .setTitle('Salut moi c\'est loic')
    .setDescription('Cliquez sur l\'emoji de votre choix')

module.exports = new Router.Template()
    .setEmbed(embed)
    .addAction('◀', 'home')