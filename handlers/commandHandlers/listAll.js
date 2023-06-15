const { MessageActivityType } = require("discord.js");
const {commands} = require("./../../src/loadCommands.js");

const command = "";
const description = "lists all commands";

const execute = async (message) => {
    let output = "Hey there! I'm Xcord. Use me as your assistant for all your queries😁. Here are the list of commands I can execute :-";
    for(const [key, value] of commands) {
        output = output.concat(`\n$${key} <prompt> -> ${value.description}`);
    }
    try {
        await message.channel.send(output);
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {command, execute, description};