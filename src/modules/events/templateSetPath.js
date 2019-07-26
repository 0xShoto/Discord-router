const Discord = require('discord.js'),
    replaceKeys = require('../methods/path/replaceKeys')

module.exports = async (route, value) => {
    let path = await replaceKeys(route.path, value)

    if (typeof route.template.content === "object") {
        route.template.content
            .setFooter(path)
    } else {
        route.template.content = new Discord.RichEmbed()
            .setDescription(route.template.content)
            .setFooter(path)
    }

    return route
}