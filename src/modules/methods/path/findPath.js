const splitPath = require('./splitPath'),
    getKeys = require('./getKeys')

module.exports = async (routes, path) => {
    let spath = await splitPath(path),
        sroutes = await splitPathRoutes(routes),
        froutes = await sroutes.filter(r => r.splitPath.length === spath.length),
        route = await froutes.find(r => {
            if (compareArray(r.splitPath, spath)) {
                return r
            }
        })

    if (route) route.keys = await getKeys(spath, route.splitPath)
    return route
}

function splitPathRoutes(routes) {
    routes.forEach(async r => {
        r.splitPath = await splitPath(r.path)
    })
    return routes
}

function compareArray(a1, a2) {
    for (i = 0 ; a1 && a1[i] ; i++) {
        if (a1[i] !== a2[i] && !a1[i].startsWith(':')) return false
        if (!a1[i + 1]) return true
    }
}