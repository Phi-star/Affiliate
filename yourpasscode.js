document.addEventListener('DOMContentLoaded', function() {
    const copyPasscodeBtn = document.getElementById('copyPasscodeBtn');
    const passcodeBox = document.getElementById('passcodeBox');
    const whatsappLink = document.getElementById('whatsappLink');
    
    // Set your WhatsApp group link here
    const whatsappGroupLink = "#"; // Replace with actual link
    
    // Copy passcode functionality
    copyPasscodeBtn.addEventListener('click', function() {
        const passcode = document.getElementById('passcode').textContent;
        
        navigator.clipboard.writeText(passcode).then(() => {
            // Visual feedback
            copyPasscodeBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            copyPasscodeBtn.classList.add('copied');
            
            passcodeBox.style.animation = 'none';
            void passcodeBox.offsetWidth;
            passcodeBox.style.animation = 'pulse 0.5s';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                copyPasscodeBtn.innerHTML = '<i class="far fa-copy"></i> Copy Passcode';
                copyPasscodeBtn.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            copyPasscodeBtn.innerHTML = '<i class="fas fa-times"></i> Error';
            setTimeout(() => {
                copyPasscodeBtn.innerHTML = '<i class="far fa-copy"></i> Copy Passcode';
            }, 2000);
        });
    });
    
    // Set WhatsApp link (replace with your actual link)
    whatsappLink.href = https://chat.whatsapp.com/DnqYmVjesvcC7gywyRRqb8;
    
    // Add animation to passcode box on hover
    passcodeBox.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 15px rgba(41, 98, 255, 0.3)';
    });
    
    passcodeBox.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
    
    // Keyframe animation for pulse effect
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `, styleSheet.cssRules.length);
});
