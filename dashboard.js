const botToken = '7963361675:AAGsP3m4gj-vCBRVlcI0-Zjl9lrmaVR21cw';
const adminChatId = '6300694007';

let selectedProductName = "";
let selectedProductLink = "";

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  localStorage.setItem('activeSection', sectionId);
}

window.onload = () => {
  const saved = localStorage.getItem('activeSection');
  if (saved) showSection(saved);
};

// Called from HTML buttons
function requestChatId(productName, productLink) {
  selectedProductName = productName;
  selectedProductLink = productLink;
  document.getElementById("chatIdInput").value = "";
  document.getElementById("chatIdModal").classList.remove("hidden");
}

// When user clicks submit
function redirectToLink() {
  const chatId = document.getElementById("chatIdInput").value.trim();
  if (!chatId || !/^\d+$/.test(chatId)) return;

  const message = `🛒 *New Request*\nProduct: ${selectedProductName}\nChat ID: ${chatId}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: adminChatId,
      text: message,
      parse_mode: "Markdown"
    })
  });

  document.getElementById("chatIdModal").classList.add("hidden");

  // Redirect to product link
  setTimeout(() => {
    window.location.href = selectedProductLink;
  }, 500);
}
