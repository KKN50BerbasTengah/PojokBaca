// Tambahkan ini ke dalam script.js Anda
document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});