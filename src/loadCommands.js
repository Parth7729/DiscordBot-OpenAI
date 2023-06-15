const { Collection } = require("discord.js");
const path = require("path");
const fs = require("fs");


const commandsPath = path.join(__dirname, '/../handlers/commandHandlers');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const commands = new Collection();

const loadCommands = () => {
    commands.set("", {execute : () => console.log("empty command"), description : "prints all the commands"});
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const res = require(filePath);
        if ('command' in res && 'execute' in res && 'description' in res) {
            commands.set(res.command, {execute : res.execute, description : res.description});
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
};

const printCommands = () => {
    for(const [key, value] of commands) 
        console.log(key + " -> " + value.execute + ", " + value.description);
}


module.exports = {loadCommands, printCommands, commands};

