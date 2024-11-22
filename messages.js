let sendBtn = document.getElementById("send-btn");
let textarea = document.getElementById("chat-input-area");
let chatMessages = document.getElementsByClassName("chat-messages")[0];

function addMessage() {
    let messageText = textarea.value.trim(); // Get message and remove the leading spaces

    if (messageText.length > 0) {
        newMessage = document.createElement('div');
        newMessage.className = 'message sent';
        newMessage.textContent = messageText;
        chatMessages.appendChild(newMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        textarea.value = "";
    }

}
sendBtn.addEventListener('click', addMessage);
  