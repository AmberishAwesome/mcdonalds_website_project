
// Toggle mobile menu with error handling
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuIcon && navLinks) {
        console.log('Menu icon clicked'); // Log to check if JS is loading
        mobileMenuIcon.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    } else {
        console.error('Menu icon or nav links not found');
    }
});
