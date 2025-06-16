const openBtn = document.querySelector('.about');
const modal = document.querySelector('.about-block');

openBtn.addEventListener('click', () => {
    modal.classList.remove('hide');
});

const closeBtn = modal.querySelector('.close-modal');

closeBtn.addEventListener('click', () => {
    modal.classList.add('hide');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hide');
    }
});