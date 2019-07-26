const Discord = require('discord.js')

module.exports = (route) => {
    if (typeof route.template.content === "object") {
        route.template.content
            .setFooter(route.path)
    } else {
        route.template.content = new Discord.RichEmbed()
            .setDescription(route.template.content)
            .setFooter(route.path)
    }

    return route
}