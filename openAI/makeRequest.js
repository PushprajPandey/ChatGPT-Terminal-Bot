import { openai } from "../config/openai.js";

export async function chatCompletion(inputPrompt) {
  try {
    const lowerPrompt = inputPrompt.trim().toLowerCase();

    // 1. Basic greetings
    if (lowerPrompt === "hello") {
      return "Hello! How can I help you today?";
    }

    // 2. Date and time
    if (lowerPrompt.includes("date")) {
      const today = new Date().toLocaleDateString();
      return `Today's date is ${today}`;
    }

    if (lowerPrompt.includes("time")) {
      const now = new Date().toLocaleTimeString();
      return `Current time is ${now}`;
    }

    // 3. Simple math
    if (/^[\d\s+\-*/.()]+$/.test(lowerPrompt)) {
      try {
        const result = Function(`return ${lowerPrompt}`)();
        return `The result is ${result}`;
      } catch {
        return "Sorry, I couldn't calculate that.";
      }
    }

    // 4. Hardcoded general knowledge + AI FAQs
    const staticAnswers = {
      "longest river in the world": "The Nile River is generally considered the longest river in the world.",
      "largest ocean": "The Pacific Ocean is the largest ocean on Earth.",
      "capital of india": "The capital of India is New Delhi.",
      "tallest mountain": "Mount Everest is the tallest mountain in the world.",
      "which support tasks can ai-powered intelligent virtual assistants be used for":
        "AI-powered virtual assistants can help with customer support, appointment scheduling, FAQs, reminders, order tracking, and even IT/helpdesk support.",
      "what is an ai-powered intelligent virtual assistant vs a simple chatbot":
        "A simple chatbot follows predefined rules and responses. An AI-powered intelligent virtual assistant understands natural language, learns from interactions, and can handle more complex, dynamic conversations."
    };

    const match = Object.entries(staticAnswers).find(([key]) =>
      lowerPrompt.includes(key)
    );
    if (match) return match[1];

    // 5. Fallback to OpenAI
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
