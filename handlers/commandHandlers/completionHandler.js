const openai = require("./../../src/ai.js");

const command = "complete";
const description = "$complete : Given a prompt, the model will return one or more predicted completions. e.g. $complete <prompt>";

const execute = async (message, args) => {
    if(args.length === 0) {
        await message.reply("Please provide an input");
    }

    else {
        try {
            const response = await openai.createChatCompletion({
                model : "gpt-3.5-turbo",
                messages : [
                {
                    role : "user",
                    content : args[0]
                }]
            });
            await message.reply(response.data.choices[0].message.content);
        }
        catch(err) {
            try{
                await message.reply("please try another command e.g. - $chat");
                console.log("no response from openAI on complete command");
            }
            catch(err) {
                console.log(err);
            }
        }

    }
}



module.exports =  {command, execute, description};