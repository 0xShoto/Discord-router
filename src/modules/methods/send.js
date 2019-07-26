const   sendTemplate = require('../privateMethods/sendTemplate'),
        templateBeforeSend = require('../events/templateBeforeSend'),
        templateAfterSend = require('../events/templateAfterSend')

module.exports = async function (routeName, user, channel, body = {}) {
    let Router = require('../../../index'),
        route = Router.routes.find(r => r.name === routeName)
    
    if (!route) throw new RangeError('This route is undefined')
    if (route.actions && !client) throw new RangeError('Client is require if you have Action')

    route.template.body = body

    route = await templateBeforeSend(route, {
        "channel": channel
    })
    if (!route) return;
    
    const message = await sendTemplate(route, user, channel)

    route = await templateAfterSend(route, {
        "channel": channel,
        "message": message
    })
    if (!route) return;

    return message
}