const getPathKey = require('./getPathKeys')

module.exports = async (path, value) => {
    let keys = await getPathKey(path)

    for (i = 0 ; keys && keys[i] ; i++) {
        value[keys[i].substring(1, keys[i].length)] ? path = await path.replace(keys[i], String(value[keys[i].substring(1, keys[i].length)])) : path = await path.replace(keys[i], "-")
    }

    return path
} 