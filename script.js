<script>
// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.background = '#000';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});
</script>
