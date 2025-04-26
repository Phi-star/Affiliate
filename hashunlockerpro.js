document.addEventListener('DOMContentLoaded', function() {
    const generateToolBtn = document.getElementById('generateToolBtn');
    const copyToolBtn = document.getElementById('copyToolBtn');
    const toolValue = document.getElementById('toolValue');
    
    // Generate unlock code ending with 3446 (format: XXXX-XXXX-XXXX-3446)
    function generateUnlockCode() {
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
    
    // Generate initial code
    let currentCode = generateUnlockCode();
    toolValue.textContent = currentCode;
    
    // Generate new code
    generateToolBtn.addEventListener('click', function() {
        generateToolBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        generateToolBtn.disabled = true;
        
        // Simulate processing time
        setTimeout(() => {
            currentCode = generateUnlockCode();
            toolValue.textContent = currentCode;
            
            generateToolBtn.innerHTML = '<i class="fas fa-redo"></i> Generate New Code';
            generateToolBtn.disabled = false;
            
            if (copyToolBtn.classList.contains('copied')) {
                copyToolBtn.classList.remove('copied');
                copyToolBtn.innerHTML = '<i class="far fa-copy"></i> Copy Code';
            }
            
            // Visual feedback
            toolValue.style.animation = 'none';
            void toolValue.offsetWidth;
            toolValue.style.animation = 'fadeIn 0.5s';
        }, 1000);
    });
    
    // Copy code functionality
    copyToolBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(currentCode).then(() => {
            copyToolBtn.classList.add('copied');
            copyToolBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            
            setTimeout(() => {
                copyToolBtn.classList.remove('copied');
                copyToolBtn.innerHTML = '<i class="far fa-copy"></i> Copy Code';
            }, 2000);
        }).catch(err => {
            console.error('Copy failed:', err);
            copyToolBtn.innerHTML = '<i class="fas fa-times"></i> Error';
            setTimeout(() => {
                copyToolBtn.innerHTML = '<i class="far fa-copy"></i> Copy Code';
            }, 2000);
        });
    });
    
    // Tool container hover effect
    const toolContainer = document.querySelector('.tool-container');
    toolContainer.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 15px rgba(0, 255, 65, 0.5)';
    });
    
    toolContainer.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});
