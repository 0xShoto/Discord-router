module.exports = function (client) {
    client.on('raw', async info => {
        if (info.t !== "MESSAGE_REACTION_ADD") return;

        var   user = await client.users.get(info.d.user_id),
                channel = await client.channels.get(info.d.channel_id)
                
        if (!channel) channel = await user.createDM();
        
        const   message = await channel.fetchMessage(info.d.message_id),
                emoji = info.d.emoji
    
        // Rapid Check
        if (user.bot) return;
        if (message.author.id !== client.user.id) return;

        const   Router = require('../index'),
                reqRoute = await Router.routes.find(r => message.embeds[0].footer.text === r.path),
                reqAction = await reqRoute.template.actions.find(a => a.emoji === emoji.name)
                res = await Router.routes.find(r => r.name === reqAction.name)

        if (message.deletable && !reqRoute.keep) message.delete()
        Router.sendTemplate(res.name, user, channel)
        
    
        console.log(`${user.username} a utilisé la reaction ${emoji.name}`);
    })

    client.on('messageDelete', async message => {
        if (message.author.id === client.user.id)

        var Router = require('../index'),
            reqRoute = await Router.routes.find(r => message.embeds[0].footer.text === r.path)
        
        if (reqRoute.template.destroy) reqRoute.template.destroy({"user": message.user, "channel": message.channel, "message": message})
    })

    this.client = client
    return this
}