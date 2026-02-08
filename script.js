const chatWindow = document.querySelector(".chat-window");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const clearButton = document.getElementById("clear-chat");

const formatTime = () =>
  new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date());

const createMessage = (content, type = "bot") => {
  const message = document.createElement("div");
  message.className = `message ${type}`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = type === "user" ? "You" : "HS";

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const text = document.createElement("p");
  text.textContent = content;

  const meta = document.createElement("span");
  meta.className = "meta";
  meta.textContent = formatTime();

  bubble.append(text, meta);
  message.append(avatar, bubble);

  return message;
};

const scrollToBottom = () => {
  chatWindow.scrollTop = chatWindow.scrollHeight;
};

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = chatInput.value.trim();
  if (!value) return;

  chatWindow.append(createMessage(value, "user"));
  scrollToBottom();

  chatInput.value = "";
  chatInput.focus();

  setTimeout(() => {
    chatWindow.append(createMessage("ERROR!", "bot"));
    scrollToBottom();
  }, 400);
});

clearButton.addEventListener("click", () => {
  chatWindow.innerHTML = "";
  chatWindow.append(
    createMessage("Hello! I’m HiStage. What would you like to explore today?", "bot")
  );
  scrollToBottom();
});
