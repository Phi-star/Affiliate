const botToken = '7963361675:AAGsP3m4gj-vCBRVlcI0-Zjl9lrmaVR21cw';
const adminChatId = '6300694007';
const REQUIRED_PASSCODE = 'AFF123'; // The required passcode

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

function requestChatId(productName, productLink) {
  selectedProductName = productName;
  selectedProductLink = productLink;
  document.getElementById("chatIdInput").value = "";
  document.getElementById("errorMessage").textContent = ""; // Clear previous error
  document.getElementById("chatIdModal").classList.remove("hidden");
}

function redirectToLink() {
  const chatId = document.getElementById("chatIdInput").value.trim();
  const errorElement = document.getElementById("errorMessage");
  
  // First check if the input is empty
  if (!chatId) {
    errorElement.textContent = "Please enter your passcode";
    return;
  }
  
  // Then check if it matches the required passcode
  if (chatId !== REQUIRED_PASSCODE) {
    errorElement.textContent = "Incorrect passcode";
    return;
  }

  // If we get here, the passcode is correct
  const message = `🛒 *New Request*\nProduct: ${selectedProductName}\nPasscode: ${chatId}`;

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
