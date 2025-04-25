document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Animate elements in sequence
    const animateElements = () => {
        const elements = document.querySelectorAll('.success-card > *');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 150);
        });
    };
    
    // Initialize download functionality
    const initDownload = () => {
        downloadBtn.addEventListener('click', function() {
            // Show loading state
            downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating Package...';
            downloadBtn.disabled = true;
            
            // Simulate security verification
            setTimeout(() => {
                // Create dummy file (replace with actual wallet generator)
                const content = `BTC Wallet Generator v2.1\n\nFeatures:\n- Generate unlimited testnet/mainnet addresses\n- Export in multiple formats (CSV, JSON, TXT)\n- Completely offline operation\n- SHA-256: 4f8a1b...\n\nWARNING: For testing purposes only. Never use for real funds.`;
                const blob = new Blob([content], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                
                // Trigger download
                const a = document.createElement('a');
                a.href = url;
                a.download = 'BTC_Wallet_Generator_Safe.zip';
                document.body.appendChild(a);
                a.click();
                
                // Clean up
                setTimeout(() => {
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                    
                    // Show success state
                    downloadBtn.innerHTML = '<i class="fas fa-check-circle"></i> Download Complete!';
                    
                    // Add Bitcoin animation celebration
                    document.querySelector('.bitcoin-animation').classList.add('celebrate');
                    
                    // Reset button after delay
                    setTimeout(() => {
                        downloadBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Generate New Download';
                        downloadBtn.disabled = false;
                        document.querySelector('.bitcoin-animation').classList.remove('celebrate');
                    }, 3000);
                }, 100);
            }, 2000); // Simulate security check delay
        });
    };
    
    // Initialize
    animateElements();
    initDownload();
});
