const   Discord = require('discord.js'),
        Router = require('../index')

const embed = new Discord.RichEmbed()
    .setTitle('Page de Fanta')
    .setDescription('Cliquez sur l\'emoji de votre choix')

const template = new Router.Template()
    .setEmbed(embed)
    .addAction('⭐', 'home')

module.exports = template