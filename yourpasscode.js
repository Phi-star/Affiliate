document.addEventListener('DOMContentLoaded', function() {
    const copyPasscodeBtn = document.getElementById('copyPasscodeBtn');
    const passcodeBox = document.getElementById('passcodeBox');
    const whatsappLink = document.getElementById('whatsappLink');
    
    // 1. Copy passcode functionality
    copyPasscodeBtn.addEventListener('click', function() {
        const passcode = document.getElementById('passcode').textContent;
        navigator.clipboard.writeText(passcode).then(() => {
            copyPasscodeBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            copyPasscodeBtn.classList.add('copied');
            passcodeBox.style.animation = 'none';
            void passcodeBox.offsetWidth;
            passcodeBox.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                copyPasscodeBtn.innerHTML = '<i class="far fa-copy"></i> Copy Passcode';
                copyPasscodeBtn.classList.remove('copied');
            }, 2000);
        });
    });

    // 2. Enhanced WhatsApp link handling
    whatsappLink.addEventListener('click', function(e) {
        // Open in new tab as fallback
        if (!window.open(whatsappLink.href, '_blank')) {
            // If popup blocked, redirect current page
            window.location.href = whatsappLink.href;
        }
        e.preventDefault(); // Only if using custom tracking
    });

    // 3. Add visual feedback for links
    whatsappLink.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.98)';
    });
    whatsappLink.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });

    // 4. Keyframe animation for pulse effect
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `, styleSheet.cssRules.length);
});
