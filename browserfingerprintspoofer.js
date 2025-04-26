document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.addEventListener('click', function() {
        // Show loading state
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing Download...';
        downloadBtn.disabled = true;
        
        // Simulate download process
        setTimeout(function() {
            // Create a dummy file for demonstration
            const content = `Browser Fingerprint Spoofer v2.1\n\nFeatures:\n- 10,000+ device profiles\n- Real-time fingerprint rotation\n- Undetectable by anti-bot systems\n- Supports all major browsers\n\nFile: FingerprintSpoofer.exe\nSHA-256: 3a7b...3446`;
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            
            // Create download link
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Fingerprint_Spoofer_Tool.zip';
            document.body.appendChild(a);
            a.click();
            
            // Clean up
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
                
                // Show success state
                downloadBtn.innerHTML = '<i class="fas fa-check-circle"></i> Download Complete!';
                
                // Reset button after delay
                setTimeout(function() {
                    downloadBtn.innerHTML = '<i class="fas fa-redo"></i> Download Again';
                    downloadBtn.disabled = false;
                }, 2000);
            }, 100);
        }, 1500);
    });
    
    // Add animation to elements
    const elements = document.querySelectorAll('.header, .product-details, .download-section, .support');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
