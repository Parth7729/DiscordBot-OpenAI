const dotenv  = require("dotenv");
const bot  = require("./src/bot.js");
const {loadCommands, printCommands} = require("./src/loadCommands.js");

dotenv.config();


bot.login(process.env.DISCORD_BOT_TOKEN)
    .then(() => {
        console.log(`Ready! Logged in as ${bot.user.tag}`);
        loadCommands();
        // printCommands();
    }).catch((err) => console.log(err));
