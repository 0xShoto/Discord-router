module.exports = client => {
    client.on('raw', async info => {
        if (info.t !== "MESSAGE_REACTION_ADD") return;
            
        // Rapid Check
        let user = await client.users.get(info.d.user_id),
            channel = await client.channels.get(info.d.channel_id)            
        if (!channel) channel = await user.createDM();
        let message = await channel.fetchMessage(info.d.message_id),
            emoji = info.d.emoji
        if (user.bot || message.author.id !== client.user.id) return

        const   Router = require('@yugeo/discord-router'),
                reqRoute = await require('../methods/path/findPath')(Router.routes, message.embeds[0].footer.text)

        if (!reqRoute) throw new RangeError('This route doesn\'t exist')

        const   reqAction = await reqRoute.template.actions.find(a => a.emoji === emoji.name)
                res = await Router.routes.find(r => r.name === reqAction.to)

        if (!res) throw new RangeError('This route doesn\'t exist');

        if (message.deletable && !reqRoute.keep) message.delete()
        if (reqRoute.keep) message.reactions.find(r => r.emoji.name === emoji.name).remove(user)

        Router.send(res.name, user, channel, Object.assign(reqAction.body || {}, {
            "userReaction": emoji,
            "user": user,
            "channel": channel,
            "lastContent": message.embeds[0],
            "lastRoute": reqRoute
        }))
    })
}