const   Discord = require('discord.js'),
        Router = require('../index')

var embed = new Discord.RichEmbed()
        .setDescription('Salut mon gars'),
    interval = ""

function beforeSend(data) {
    console.log("before")
}

function afterSend(data) {
    const color = ["#4F66D1", "#D42E9C", "#ABAF39"]
    var i = 0
    interval = setInterval(() => {
        if (i === 3) i = 0
        template.embed.setColor(color[i])
        if (data.message.editable) data.message.edit(template.embed)
        i++
    }, 1500)
}

function destroy(data) {
    clearInterval(interval)
}

var template = new Router.Template()
    .setEmbed(embed)
    .setBeforeSend(beforeSend)
    .setAfterSend(afterSend)
    .setDestroy(destroy)
    .addAction('◀', 'home')

module.exports = template