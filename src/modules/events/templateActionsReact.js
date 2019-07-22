module.exports = async (message, route) => {
    if (!route.template.actions) return;
    for (i = 0 ; route.template.actions[i] ; i++) {
        let emojiName = route.template.actions[i].emoji,
            emoji = ""
        
        if (message.guild) {
            emoji = await message.guild.emojis.find(e => e.name === emojiName)
                    || message.guild.emojis.get(emojiName)
                    || emojiName
        } else {
            emoji = await message.client.emojis.find(e => e.name === emojiName)
                    || message.client.emojis.get(emojiName)
                    || emojiName
        }

        await message.react(emoji)
    }
}