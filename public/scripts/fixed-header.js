window.addEventListener('scroll', function() {
    const header = document.getElementById('header-fixed');
    if (window.scrollY > 79) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
});