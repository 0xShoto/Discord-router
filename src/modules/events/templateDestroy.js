module.exports = client => {
    client.on('messageDelete', async message => {
        if (message.author.id === client.user.id)

        var Router = require('../../../index'),
            reqRoute = await Router.routes.find(r => message.embeds[0].footer.text === r.path)
        
        if (reqRoute && reqRoute.template.destroy) reqRoute.template.destroy({
            "user": message.user,
            "channel": message.channel,
            "message": message
        })
    })
}