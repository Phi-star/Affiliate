document.addEventListener('DOMContentLoaded', function() {
    const generateTokenBtn = document.getElementById('generateTokenBtn');
    const copyTokenBtn = document.getElementById('copyTokenBtn');
    const tokenValue = document.getElementById('tokenValue');
    
    // Generate token ending with 3446 (format: XXXX-XXXX-XXXX-3446)
    function generateFeeToken() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let segments = [];
        
        // Generate 3 random segments
        for (let i = 0; i < 3; i++) {
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
    
    // Generate initial token
    let currentToken = generateFeeToken();
    tokenValue.textContent = currentToken;
    
    // Generate new token
    generateTokenBtn.addEventListener('click', function() {
        generateTokenBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        generateTokenBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            currentToken = generateFeeToken();
            tokenValue.textContent = currentToken;
            
            generateTokenBtn.innerHTML = '<i class="fas fa-redo"></i> Generate New Token';
            generateTokenBtn.disabled = false;
            
            if (copyTokenBtn.classList.contains('copied')) {
                copyTokenBtn.classList.remove('copied');
                copyTokenBtn.innerHTML = '<i class="far fa-copy"></i> Copy Token';
            }
            
            // Visual feedback
            tokenValue.style.animation = 'none';
            void tokenValue.offsetWidth;
            tokenValue.style.animation = 'fadeIn 0.5s';
        }, 800);
    });
    
    // Copy token functionality
    copyTokenBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(currentToken).then(() => {
            copyTokenBtn.classList.add('copied');
            copyTokenBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            
            setTimeout(() => {
                copyTokenBtn.classList.remove('copied');
                copyTokenBtn.innerHTML = '<i class="far fa-copy"></i> Copy Token';
            }, 2000);
        }).catch(err => {
            console.error('Copy failed:', err);
            copyTokenBtn.innerHTML = '<i class="fas fa-times"></i> Error';
            setTimeout(() => {
                copyTokenBtn.innerHTML = '<i class="far fa-copy"></i> Copy Token';
            }, 2000);
        });
    });
    
    // Token container hover effect
    const tokenContainer = document.querySelector('.token-container');
    tokenContainer.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.3)';
    });
    
    tokenContainer.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});
