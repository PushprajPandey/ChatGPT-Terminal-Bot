import { openai } from "../config/openai.js";

export async function chatCompletion(inputPrompt) {
  try {
    const messages = [{ role: "user", content: inputPrompt }];

    const chatObject = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    const responseMessage = chatObject.data.choices[0]?.message?.content;
    return responseMessage;
  } catch (error) {
    console.error("Error from OpenAI:", error.response?.data || error.message);
    return "Sorry! Couldn't fulfil this request right now. Try again.";
  }
}
