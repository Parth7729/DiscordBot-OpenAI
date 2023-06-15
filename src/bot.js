const { Client, Events, GatewayIntentBits, Partials } = require("discord.js");
const {messageHandler} = require('./../handlers/eventHandlers/messageHandler.js');


const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
    partials: [Partials.Channel, Partials.Message, Partials.Reaction] });

bot.on("messageCreate", messageHandler);

module.exports = bot;