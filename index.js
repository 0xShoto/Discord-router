module.exports = {
    /**
     * Functions
     */
    setClient: require('./src/modules/methods/setClient'),
    setRoutes: require('./src/modules/methods/setRoutes'),


    // Get / Post
    send: require('./src/modules/methods/send'),

    /**
     * Variables
     */
    routes: null,
    client: null
}