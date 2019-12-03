exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    
    var text = message.content.split(' ').slice(1).join(' ')
        if(!text) return message.reply('error')
        var embed = new Discord.RichEmbed()
        .setDescription(text)
        message.channel.send(embed)}
        exports.help = {
            name:"say"
       }
        
