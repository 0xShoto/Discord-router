module.exports = {
    /**
     * Functions
     */
    setClient: require('./src/modules/methods/setClient'),
    setRoutes: require('./src/modules/methods/setRoutes'),
    findPath: require('./src/modules/methods/path/findPath'),
    replaceKeys: require('./src/modules/methods/path/replaceKeys'),


    // Get / Post
    send: require('./src/modules/methods/send'),

    /**
     * Variables
     */
    routes: null,
    client: null
}