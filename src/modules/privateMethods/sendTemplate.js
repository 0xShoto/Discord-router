const   templateActionsReact = require('@yugeo/discord-router/src/modules/events/templateActionsReact'),
        templateSetPath = require('@yugeo/discord-router/src/modules/events/templateSetPath')

module.exports = async (route, user, channel) => {

    // Set the Path
    route = await templateSetPath(route)
    
    var message = {}
    if (!route.type || channel.type === route.type) {
        message = await channel.send(route.template.content)  
    } else {
        if (channel.type === "dm") throw new RangeError('You cannot send a text message when you are in dm');
        channel = await user.createDM()
        message = await channel.send(route.template.content) 
    }

    // Actions
    templateActionsReact(message, route)

    return message
}