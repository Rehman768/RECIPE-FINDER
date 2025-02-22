document.addEventListener('DOMContentLoaded', () => {
    const mainHeader = document.getElementById('main-header');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    window.addEventListener('scroll', () => {
        if (window.scrollY > mainHeader.offsetHeight) {
            body.classList.add('with-sidebar');
        } else {
            body.classList.remove('with-sidebar');
        }
    });
});
