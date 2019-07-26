module.exports = async (route, data) => {
    if (route.template.beforeSend) {
        let newTemplate = await route.template.beforeSend(data)
        if (newTemplate === false) return false
        route.template = newTemplate ? newTemplate : route.template
    }
    return route
}