const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const config = new Configuration({
    apiKey : process.env.apiKey,
});


const openai = new OpenAIApi(config);

module.exports = openai;