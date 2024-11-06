function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatWindow = document.getElementById("chatWindow");

    if (userInput.value.trim() !== "") {
        // Add user message
        const userMessage = document.createElement("div");
        userMessage.className = "message user";
        userMessage.innerHTML = `<div class="text">${userInput.value}</div>
                                 <img src="s.png" alt="User" class="avatar">`;
        chatWindow.appendChild(userMessage);

        // Add bot reply
        const botMessage = document.createElement("div");
        botMessage.className = "message bot";
        botMessage.innerHTML = `<img src="s.jpg" alt="Bot" class="avatar">
                                <div class="text">Hawk tuah, spit on that thing</div>`;
        chatWindow.appendChild(botMessage);

        // Scroll to the bottom of the chat window
        chatWindow.scrollTop = chatWindow.scrollHeight;

        // Clear input
        userInput.value = "";
    }
}
