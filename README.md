# 💬 ChatGPT Terminal Bot (Node.js)

A simple and powerful Node.js-based terminal chatbot powered by the OpenAI GPT model. This CLI application enables human-like interactions directly from your terminal using the OpenAI API.

---

## 🚀 Features

- Seamless integration with OpenAI's GPT-3.5 API  
- Lightweight command-line interface (CLI)  
- Configurable chatbot name, model, and prompt style  
- Environment-based secure API key management  
- Easy-to-setup local development environment  

---

## 📋 Prerequisites

Make sure you have the following installed:

- **Node.js** (version 12 or higher)  
- **npm** (Node package manager)  
- **OpenAI API Key** – [Sign up here](https://platform.openai.com/signup)

---

## ⚙️ Installation

1. **Clone the repository**

```bash
git clone git clone https://github.com/PushprajPandey/ChatGPT-Terminal-Bot.git
```

2. **Navigate to the project directory**

```bash
cd ChatGPT-terminal-bot
```

3. **Install dependencies**

```bash
npm install
```

4. **Set up your OpenAI API key**

- Create a file named `.env` in the project root.
- Add the following line to `.env` (replace `YOUR_API_KEY` with your actual OpenAI key):

```env
SECRET_KEY=YOUR_API_KEY
```

---

## 💻 Usage

To start the chatbot in your terminal, run:

```bash
npm start
```

- Enter your message when prompted.  
- The bot will respond with a GPT-generated reply.  
- Type `exit` or press `Ctrl + C` to stop the chatbot.

---

## 🛠 Configuration

You can customize bot behavior through the `config.js` file:

- Bot name  
- OpenAI model (e.g., `gpt-3.5-turbo`)  
- Prompt style and tone  
- Max tokens, temperature, etc.

---

## 🧪 Example Output

```
You: Hello!  
Bot: Hi there! How can I assist you today?

You: What’s the capital of France?  
Bot: The capital of France is Paris.
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
Feel free to modify and use it in your own applications.

---

## ⚠️ Disclaimer

This chatbot is powered by OpenAI's language models. Its responses are generated based on training data and may occasionally be inaccurate or inappropriate. Use with discretion.

---

## 🙌 Support!

If you found this project helpful or learned something from it, feel free to connect with me.

<p align="center">
  <a href="https://www.linkedin.com/in/pushpraj-pandey-249732250/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="mailto:pushprajpandey2022@vitbhopal.ac.in">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
</p>
