// In telegramhashgenerator.js
document.addEventListener('DOMContentLoaded', function() {
    const generateHashBtn = document.getElementById('generateHashBtn');
    const copyHashBtn = document.getElementById('copyHashBtn');
    const hashValue = document.getElementById('hashValue');
    
    // Generate hash ending with 3446 (28 random chars + 3446)
    function generateTelegramHash() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
        let randomPart = '';
        
        // Generate 28 random characters
        for (let i = 0; i < 28; i++) {
            randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        // Combine with 3446 suffix
        return randomPart + '3446';
    }
    
    // Generate initial hash on page load
    let currentHash = generateTelegramHash();
    hashValue.textContent = currentHash;
    
    // Handle generate new hash
    generateHashBtn.addEventListener('click', function() {
        // Show generating state
        generateHashBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        generateHashBtn.disabled = true;
        
        // Simulate generation delay
        setTimeout(() => {
            currentHash = generateTelegramHash();
            hashValue.textContent = currentHash;
            
            // Reset button
            generateHashBtn.innerHTML = '<i class="fas fa-redo"></i> Generate New Hash';
            generateHashBtn.disabled = false;
            
            // Reset copy button if it was in copied state
            if (copyHashBtn.classList.contains('copied')) {
                copyHashBtn.classList.remove('copied');
                copyHashBtn.innerHTML = '<i class="far fa-copy"></i> Copy Hash';
            }
            
            // Visual feedback
            hashValue.style.animation = 'none';
            void hashValue.offsetWidth; // Trigger reflow
            hashValue.style.animation = 'fadeIn 0.5s';
        }, 800);
    });
    
    // Handle copy hash
    copyHashBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(currentHash).then(() => {
            // Visual feedback
            copyHashBtn.classList.add('copied');
            copyHashBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            
            // Reset after 2 seconds
            setTimeout(() => {
                copyHashBtn.classList.remove('copied');
                copyHashBtn.innerHTML = '<i class="far fa-copy"></i> Copy Hash';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            copyHashBtn.innerHTML = '<i class="fas fa-times"></i> Error';
            setTimeout(() => {
                copyHashBtn.innerHTML = '<i class="far fa-copy"></i> Copy Hash';
            }, 2000);
        });
    });
    
    // Add animation to hash display on hover
    const hashContainer = document.querySelector('.hash-container');
    hashContainer.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 15px rgba(0, 136, 204, 0.5)';
    });
    
    hashContainer.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});
