const   templateReactionAdd = require('../events/templateReactionAdd'),
        templateDestroy = require('../events/templateDestroy'),
        templateMessageAdd = require('../events/templateMessageAdd')

module.exports = function (client, options) {   
    if (!options || options.templateReactionAdd) templateReactionAdd(client)
    if (!options || options.templateDestroy) templateDestroy(client)
    if (!options || options.templateMessageAdd) templateMessageAdd(client)
    
    this.client = client
    return this
}