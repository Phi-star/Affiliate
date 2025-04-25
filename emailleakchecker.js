document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Animate elements in
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
            downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing Download...';
            downloadBtn.disabled = true;
            
            // Simulate download process (replace with actual file download)
            setTimeout(() => {
                // Create dummy file (replace with your actual file)
                const content = `Email Leak Checker v1.0\n\nThis tool allows you to:\n- Check if your email appears in data breaches\n- Get details about which breaches\n- Receive security recommendations\n\nFile: EmailLeakChecker.exe\nSHA-256: a1b2c3d4...`;
                const blob = new Blob([content], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                
                // Trigger download
                const a = document.createElement('a');
                a.href = url;
                a.download = 'EmailLeakChecker_Tool.zip';
                document.body.appendChild(a);
                a.click();
                
                // Clean up
                setTimeout(() => {
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                    
                    // Show success state
                    downloadBtn.innerHTML = '<i class="fas fa-check-circle"></i> Download Complete!';
                    
                    // Reset button after delay
                    setTimeout(() => {
                        downloadBtn.innerHTML = '<i class="fas fa-redo"></i> Download Again';
                        downloadBtn.disabled = false;
                    }, 2000);
                }, 100);
            }, 1800);
        });
    };
    
    // Initialize
    animateElements();
    initDownload();
});
