module.exports = async function(name, user, channel) {
    const route = this.routes.find(r => r.name === name)

    if (route.template.beforeSend) await route.template.beforeSend({"user": user, "channel": channel})

    if (!route) throw new RangeError('This route is undefined')
    if (route.actions && !client) throw new RangeError('Client is require if you have Action')

    await route.template.embed.setFooter(route.path)
    
    var message = {}
    if (!route.type || channel.type === route.type) {
        message = await channel.send(route.template.embed)  
    } else {
        if (channel.type === "dm") throw new RangeError('You cannot send a text message when you are in dm');
        channel = await user.createDM(),
        message = await channel.send(route.template.embed) 
    }

    for (i = 0 ; route.template.actions[i] ; i++) {
        await message.react(route.template.actions[i].emoji)
    }

    if (route.template.afterSend) route.template.afterSend({"user": user, "message": message})
}