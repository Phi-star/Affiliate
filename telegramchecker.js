document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.addEventListener('click', function() {
        // Show loading state
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
        downloadBtn.disabled = true;
        
        // Simulate download process (replace with actual file download)
        setTimeout(function() {
            // Create a dummy file for demonstration
            const content = "This is a dummy file for demonstration purposes.\n\nYour Telegram Number Checker would be here in a real implementation.";
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            
            // Create a temporary anchor element to trigger download
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Telegram_Number_Checker.zip';
            document.body.appendChild(a);
            a.click();
            
            // Clean up
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
                
                // Reset button state
                downloadBtn.innerHTML = '<i class="fas fa-check-circle"></i> Download Complete!';
                
                // Optionally redirect or show another message after download
                setTimeout(function() {
                    downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download Again';
                    downloadBtn.disabled = false;
                }, 2000);
            }, 100);
        }, 1500); // Simulate 1.5s download time
    });
    
    // Add animation class to elements for entrance effects
    const elements = document.querySelectorAll('.header, .product-details, .download-section, .support');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
