document.addEventListener('DOMContentLoaded', function() {
    const generateKeyBtn = document.getElementById('generateKeyBtn');
    const copyKeyBtn = document.getElementById('copyKeyBtn');
    const keyValue = document.getElementById('keyValue');
    
    // Generate a random BTC unlock key ending with 3446
    function generateBTCKey() {
        // Create a random 24-character base
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let randomPart = '';
        
        for (let i = 0; i < 24; i++) {
            randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        // Format with dashes and ensure it ends with 3446
        const formattedKey = [
            randomPart.substring(0, 6),
            randomPart.substring(6, 12),
            randomPart.substring(12, 18),
            randomPart.substring(18, 24) + '3446'
        ].join('-');
        
        return formattedKey;
    }
    
    // Generate initial key on page load
    let currentKey = generateBTCKey();
    keyValue.textContent = currentKey;
    
    // Handle generate new key
    generateKeyBtn.addEventListener('click', function() {
        // Show generating state
        generateKeyBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        generateKeyBtn.disabled = true;
        
        // Simulate generation delay
        setTimeout(() => {
            currentKey = generateBTCKey();
            keyValue.textContent = currentKey;
            
            // Reset button
            generateKeyBtn.innerHTML = '<i class="fas fa-key"></i> Generate New Key';
            generateKeyBtn.disabled = false;
            
            // Reset copy button if it was in copied state
            if (copyKeyBtn.classList.contains('copied')) {
                copyKeyBtn.classList.remove('copied');
                copyKeyBtn.innerHTML = '<i class="far fa-copy"></i> Copy Key';
            }
            
            // Visual feedback
            keyValue.style.animation = 'none';
            void keyValue.offsetWidth; // Trigger reflow
            keyValue.style.animation = 'flash 0.5s';
        }, 800);
    });
    
    // Handle copy key
    copyKeyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(currentKey).then(() => {
            // Visual feedback
            copyKeyBtn.classList.add('copied');
            copyKeyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            
            // Reset after 2 seconds
            setTimeout(() => {
                copyKeyBtn.classList.remove('copied');
                copyKeyBtn.innerHTML = '<i class="far fa-copy"></i> Copy Key';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            copyKeyBtn.innerHTML = '<i class="fas fa-times"></i> Error';
            setTimeout(() => {
                copyKeyBtn.innerHTML = '<i class="far fa-copy"></i> Copy Key';
            }, 2000);
        });
    });
    
    // Add animation to key display on hover
    const keyContainer = document.querySelector('.key-container');
    keyContainer.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 15px rgba(39, 117, 202, 0.5)';
    });
    
    keyContainer.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});
