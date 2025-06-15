const openBtn = document.querySelector('.about');
const modal = document.querySelector('.about-block');

openBtn.addEventListener('click', () => {
    modal.classList.remove('hide');
})