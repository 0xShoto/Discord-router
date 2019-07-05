const   Discord = require('discord.js'),
        Router = require('../index')

const embed = new Discord.RichEmbed()
    .setTitle('Support Alfred')

module.exports = new Router.Template()
    .setEmbed(embed)
    .addAction('◀', 'home')