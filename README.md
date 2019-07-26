# Discord Router
![Discord](https://img.shields.io/discord/598919127125458947.svg?color=%237289DA&label=COMPANY&logo=discord&logoColor=white&style=flat-square)

## About

```discord-router``` is a Node.js module for discord.js that allows you to easly create dynamic and stunning interfaces with embeds for your Discord bot.
- Lightweight
- Easy to use
- CLI

## Get started

### Installation
> By this tutorial, we assume that you already installed Node.js and already started with discord.js.
<br>If not, refer to [Node.js](https://github.com/discordjs/discord.js/tree/stable#installation) and [Discord.js](https://github.com/discordjs/discord.js/tree/stable#installation) installation guides.

**Node.js 10.0.0 or newer and discord.js 11.5.1 or newer is required**
      
    npm install discord-router
    
### Example
Assuming that you already made your index file, lets start !
```node
const Discord = require('discord.js')
const Router = require('discord-router')
const client = new Discord.Client()

Router.setRoutes(require('./routes'))
Router.setClient(client)

client.on('message', message => {
    if (message.author.bot) return

    if (message.content === "init") {
        Router.send('ping', message.author, message.channel)
    }
})

client.on('ready', () => {
    console.log('Ready to guide them embeds !')
})

client.login('PRIVATE_DISCORD_TOKEN')
```

Now, create a file named ``routes.js``, it will contains settings for your different routes.
For each route, define a ``name``, a ``path`` and the location to your ``template``.
```node
module.exports = [
    {
        name: "ping",
        path: "Path of ping",
        template: require('./templates/ping.js')
    },
    {
        name: "pong",
        path: "Path of pong",
        template: require('./templates/pong.js')
    }
]
```

And now, create your templates in a directory called ``templates``.
Each templates needs a ``content`` and one or multiple ``actions`` with an ``emoji`` and a route name to navigate ``to``.
```node
module.exports = {
    content: "It's a ping!",
    actions: [
        {
            emoji: "🏓",
            to: "pong"
        }
    ]
}
```

Now, we will create a second template for the ``pong`` route.

### Result
Let's have a fun ping-pong game with your new buddy !<br>
![Ping-Pong](https://gyazo.com/915c7e881d15737612714f5fb0a3bdb5)

## Community, help & feedback
If you're experiencing problems, don't understand something, want to provide feedback or just talk with the community, theses links will be helpful :
- <a href="https://discord.gg/mQVVMc9" target="_blank">Official Discord channels for discord-router</a>
- <a href="https://github.com/byShoto/Discord-router/issues" target="_blank">Github issues for discord-router</a>

## Terms
   Copyright 2019 COMPANY

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

### Author
[byShoto](https://github.com/byShoto) - **Steve Puget**
### Contributors
[loicrey](https://github.com/loicrey) - **Loïc Rey**
