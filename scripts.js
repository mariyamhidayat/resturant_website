// script.js
const chatContainer = document.getElementById('chat-container');
const chatHeader = document.getElementById('chat-header');
const closeChatButton = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Function to add a message to the chat window
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`); // Add sender class
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);

    // Scroll to the bottom to see new messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Example bot reply (replace with your actual bot logic)
function getBotReply(userMessage) {
    // Basic example: Just echo the user's message back
    return `You said: ${userMessage}`;
}

// Event listener for sending messages
