const   Discord = require('discord.js'),
        Router = require('../index')

const embed = new Discord.RichEmbed()
    .setTitle('Bienvenue sur le serveur de Shoto')
    .setDescription('Cliquez sur l\'emoji de votre choix')

module.exports = new Router.Template()
    .setEmbed(embed)
    .addAction('⭐', 'steve')
    .addAction('🍆', 'loic')
    .addAction('❓', 'support')