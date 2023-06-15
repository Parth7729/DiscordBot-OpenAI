const openai = require("./../../src/ai.js");

const command = "chat";
const description = "$chat : It will return the response for the given prompt. e.g. $chat <prompt>";

const execute = async (message, args) => {
    if(args.length === 0) {
        await message.reply("Please provide an input");
    }

    else {
        try {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: args[0], 
                temperature:0.3,
                max_tokens:4028
            });
            await message.reply(response.data.choices[0].text);
        }
        catch(err) {
            try{
                await message.reply("please try again");
                console.log("no response from openAI on chat command");
            }
            catch(err) {
                console.log(err);
            }
        }
    }
}




module.exports =  {command, execute, description};