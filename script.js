const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-links');

// 1. Toggle Sidebar when clicking the hamburger
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// 2. Close Sidebar when clicking a link
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));

// 3. CLOSE SIDEBAR ON SCROLL (As requested)
window.addEventListener('scroll', () => {
    if (menuLinks.classList.contains('active')) {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
});