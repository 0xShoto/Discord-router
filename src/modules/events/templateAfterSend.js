module.exports = (route, data) => {
    if (route.template.afterSend) {
        route.template.afterSend(data)
    }

    if (!route) return false
    return route
}