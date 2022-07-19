import '../sass/style.scss'


document.querySelectorAll('.card').forEach(item => item.addEventListener('click', () => {
    window.location.assign('./products.html');
}));
