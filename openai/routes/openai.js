var express = require('express');
var router = express.Router();
const openaiService = require('../services/openai');

router.post('/', async function (request, response, next) {
    const { question } = request.body;
    try {
        const answer = await openaiService.askQuestion(question);
        response.status(200).send({
            "success": true,
            message: "Question answered successfully to OpenAI",
            messageContent: answer
        });
    }
    catch (error) {
        console.log(error);
    }
});


module.exports = router;