document.querySelector('.hamburger').addEventListener('click', function handleClick() {
    document.querySelector('.nav-links').classList.toggle('expanded');
    });
document.removeEventListener('click', handleClick);
