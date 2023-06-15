const { MessageActivityType } = require("discord.js");
const {commands} = require("./../../src/loadCommands.js");

const command = "";
const description = "$ : Lists all commands";

const execute = async (message) => {
    let output = "Hey there! I'm Xcord. Use me as your assistant for all your queries😎. Here are the list of commands I can execute :-";
    let i = 1;
    for(const [key, value] of commands) {
        output = output.concat(`\n\n${i++}. ${value.description}`);
    }
    try {
        await message.channel.send(output);
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {command, execute, description};