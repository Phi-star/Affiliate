const botToken = '7963361675:AAGsP3m4gj-vCBRVlcI0-Zjl9lrmaVR21cw';
const adminChatId = '6300694007';
const REQUIRED_PASSCODE = "AFF123";

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
  else showSection('dashboard');
};

function requestChatId(productName, productLink) {
  selectedProductName = productName;
  selectedProductLink = productLink;
  document.getElementById("chatIdInput").value = "";
  document.getElementById("chatIdModal").classList.remove("hidden");
}

function redirectToLink() {
  const passcode = document.getElementById("chatIdInput").value.trim();
  const errorElement = document.getElementById("error-message"); // Add this element to your modal
  
  if (!passcode) {
    errorElement.textContent = "Please enter your passcode";
    return;
  }

  if (passcode !== REQUIRED_PASSCODE) {
    errorElement.textContent = "Incorrect passcode";
    return;
  }

  // Clear any previous errors
  errorElement.textContent = "";

  const message = `🛒 *New Product Request*\nProduct: ${selectedProductName}\nPasscode: ${passcode}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: adminChatId,
      text: message,
      parse_mode: "Markdown"
    })
  }).catch(error => console.error("Error sending notification:", error));

  document.getElementById("chatIdModal").classList.add("hidden");

  // Redirect to product link
  setTimeout(() => {
    window.location.href = selectedProductLink;
  }, 500);
  }
