/**
 * Route
 * @type {String} name
 * @type {String} path
 * @type {String} type
 * @type {Boolean} keep
 * @type {Object} template 
 */
const route = [
    {
        "name": "home",
        "path": "Home",
        "template": require('./templates/home')
    },
    {
        "name": "support",
        "path": "Support",
        "template": require('./templates/support')
    },
    {
        "name": "loic",
        "path": "Page perso Loic",
        "template": require('./templates/loic')
    },
    {
        "name": "steve",
        "path": "Page perso Steve",
        "template": require('./templates/steve')
    },
    {
        "name": "fanta",
        "path": "Fanta",
        "template": require('./templates/fanta')
    }
]

module.exports = route