/**
 * Require
 */
const Discord = require('discord.js')

/**
 * Class
 */
class Template {
    constructor(data = {}) {
        /**
         * Embed for this Template
         * @type {Object}
         */
        this.embed = data.embed

        /**
         * Action for this Template
         * @type {Object[]}
         */
        this.actions = data.actions || []

        /**
         * Function before the message is send
         * @type {Function}
         */
        this.beforeSend = data.beforeSend

        /**
         * Function after the message is send
         * @type {Function}
         */
        this.afterSend = data.afterSend

        /**
         * Function when the message is destroy
         * @type {Function}
         */
        this.destroy = data.destroy
    }

    /**
     * Set the embed for this template
     * @param {Object} embed 
     */
    setEmbed(embed) {
        this.embed = embed
        return this
    }

    /**
     * add an Action in this template
     * @param {String} emoji An correct emoji
     * @param {String} name Name of a template in the router
     */
    addAction(emoji, name) {
        emoji = resolveString(emoji);
        if (!/\S/.test(emoji)) throw new RangeError('Template action emoji may not be empty.');
        name = resolveString(name);
        if (!/\S/.test(name)) throw new RangeError('Template action emoji may not be empty.');
        this.actions.push({ emoji, name });
        return this
    }

    setBeforeSend(beforeSend) {
        this.beforeSend = beforeSend
        return this
    }

    setAfterSend(afterSend) {
        this.afterSend = afterSend
        return this
    }

    setDestroy(destroy) {
        this.destroy = destroy
        return this
    }
}

/**
 * Exportation
 */
module.exports = Template

function resolveString(data) {
    if (typeof data === 'string') return data;
    if (data instanceof Array) return data.join('\n');
    return String(data);
  }