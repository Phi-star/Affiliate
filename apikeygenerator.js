document.addEventListener('DOMContentLoaded', function() {
    const generateKeyBtn = document.getElementById('generateKeyBtn');
    const copyKeyBtn = document.getElementById('copyKeyBtn');
    const keyValue = document.getElementById('keyValue');
    
    // Generate API key ending with 3446 (format: XXXX-XXXX-XXXX-XXXX-XXXX-3446)
    function generateAPIKey() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
        let segments = [];
        
        // Generate 5 segments (4 random + constant ending)
        for (let i = 0; i < 4; i++) {
            let segment = '';
            for (let j = 0; j < 4; j++) {
                segment += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            segments.push(segment);
        }
        
        // Add the constant ending segment
        segments.push('3446');
        
        return segments.join('-');
    }
    
    // Generate initial key
    let currentKey = generateAPIKey();
    keyValue.textContent = currentKey;
    
    // Generate new key
    generateKeyBtn.addEventListener('click', function() {
        generateKeyBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        generateKeyBtn.disabled = true;
        
        setTimeout(() => {
            currentKey = generateAPIKey();
            keyValue.textContent = currentKey;
            
            generateKeyBtn.innerHTML = '<i class="fas fa-redo"></i> Generate New Key';
            generateKeyBtn.disabled = false;
            
            if (copyKeyBtn.classList.contains('copied')) {
                copyKeyBtn.classList.remove('copied');
                copyKeyBtn.innerHTML = '<i class="far fa-copy"></i> Copy Key';
            }
            
            keyValue.style.animation = 'none';
            void keyValue.offsetWidth;
            keyValue.style.animation = 'fadeIn 0.5s';
        }, 800);
    });
    
    // Copy key functionality
    copyKeyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(currentKey).then(() => {
            copyKeyBtn.classList.add('copied');
            copyKeyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            
            setTimeout(() => {
                copyKeyBtn.classList.remove('copied');
                copyKeyBtn.innerHTML = '<i class="far fa-copy"></i> Copy Key';
            }, 2000);
        }).catch(err => {
            console.error('Copy failed:', err);
            copyKeyBtn.innerHTML = '<i class="fas fa-times"></i> Error';
            setTimeout(() => {
                copyKeyBtn.innerHTML = '<i class="far fa-copy"></i> Copy Key';
            }, 2000);
        });
    });
    
    // Key container hover effect
    const keyContainer = document.querySelector('.key-container');
    keyContainer.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 15px rgba(110, 72, 170, 0.5)';
    });
    
    keyContainer.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});
