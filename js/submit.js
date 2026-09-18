function submitForm() {
    console.log("Form submitted!");
    let chatinput = document.getElementById("chatinput");
    let value = chatinput.value;
    chatinput.value = "";

    console.log("Value: " + value);
    addToChatbox(value, true);

    addToChatbox("Processing...", false);
}

function addToChatbox(message, isUser) {
    let chatlog = document.getElementById("chatlog");
    let newItem = document.createElement("li");
    newItem.textContent = message;
    if (isUser) {
        newItem.classList.add("user");
    } else {
        newItem.classList.add("bot");
    }
    chatlog.appendChild(newItem);
}