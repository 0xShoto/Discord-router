module.exports = async (spath, rpath) => {
    let keys = {}
    for (i = 0 ; spath && spath[i] ; i++) {
        if (rpath[i].startsWith(':')) {
            keys[rpath[i].substring(1, rpath[i].length)] = await spath[i]
        }
    }
    return keys
}