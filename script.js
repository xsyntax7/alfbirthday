// Heart cursor trail effect
document.addEventListener('mousemove', function(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤';
    heart.style.left = (e.pageX - 10) + 'px';
    heart.style.top = (e.pageY - 10) + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
});

// Prevent right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Function to make "No" button unclickable
function setupNoButton() {
    const noBtn = document.querySelector('.no-btn');
    if (noBtn) {
        noBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Make button move away when hovered
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 100);
            noBtn.style.position = 'absolute';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
        });
    }
}

// Run setup when page loads
document.addEventListener('DOMContentLoaded', function() {
    setupNoButton();
});
