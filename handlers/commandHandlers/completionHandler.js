const openai = require("./../../src/ai.js");

const command = "complete";
const description = "completes the response to a prompt";

const execute = async (message, args) => {
    if(args.length === 0) {
        await message.reply("Please provide an input");
    }

    else {
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

}



module.exports =  {command, execute, description};