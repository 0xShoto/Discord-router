module.exports = client => {
    client.on("message", async message => {
        if (message.author.bot) return

        let messages = await message.channel.fetchMessages(),
            lastBotMessage = messages.filter(m => m.author.bot).first()
            
        if (!lastBotMessage || lastBotMessage.author.id !== message.client.user.id) return

        let Router = require('../../../index'),
            reqRoute = Router.routes.find(r => r.path === lastBotMessage.embeds[0].footer.text)
        
        if (reqRoute.template.post) {
            const   res = await Router.routes.find(r => r.name === reqRoute.template.post.to),
                    body = await Object.assign(reqRoute.template.post ? reqRoute.template.post.body || {} : {}, {
                "userMessage": message.content,
                "user": message.author,
                "channel": message.channel,
                "lastContent": lastBotMessage.embeds[0]
            })

            if (lastBotMessage.deletable && !reqRoute.keep) lastBotMessage.delete()
            if (message.deletable) message.delete()
            Router.send(res.name, message.author, message.channel, body)
        }
    })
}