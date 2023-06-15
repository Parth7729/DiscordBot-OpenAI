const openai = require("./../../src/ai.js");

const command = "code";
const description = "$code : Creates a new code or debugs for the provided input and instruction. Instruction and input should be enclosed in '~'. e.g. $code ~instruction~ ~code~ \nNote: It uses an older model so if this commands doesn't run try using $chat command.";

const execute = async (message, args) => {
    if(args.length === 0) {
        await message.reply("Please provide an input");
    }

    else {
        let instruc = args[0];
        let inp = "";
        if(args.length === 2) inp = args[1];
        try {
            const response = await openai.createEdit({
                model : "code-davinci-edit-001",
                input : inp,
                instruction : instruc,
                temperature : 1.5
            });
            await message.reply(response.data.choices[0].text);
        }
        catch(err) {
            try {
                await message.reply("please try another command e.g. - $chat");
                console.log("no response from openAI on code command");
            }
            catch(err) {
                console.log(err);
            }
        }
    }
}



module.exports =  {command, execute, description};