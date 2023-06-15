const openai = require("./../../src/ai.js");

const command = "code";
const description = "gives the response to a prompt";

const execute = async (message, args) => {
    if(args.length === 0) {
        await message.reply("Please provide an input");
    }

    else {
        let instruc = args[0];
        let inp = "";
        if(args.length === 2) inp = args[1];
        const response = await openai.createEdit({
            model : "code-davinci-edit-001",
            input : inp,
            instruction : instruc,
            temperature : 2
        });
        await message.reply(response.data.choices[0].text);
    }

}



module.exports =  {command, execute, description};