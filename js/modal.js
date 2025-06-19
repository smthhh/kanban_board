const openBtn = document.querySelector('.about');
const modal = document.querySelector('.about-block');

openBtn.addEventListener('click', () => {
    modal.classList.remove('hide');
});

const closeBtn = modal.querySelector('.close-modal');

closeBtn.addEventListener('click', () => {
    modal.classList.add('hide');
});

document.addEventListener('mouseup', function (e) {
      if (!modal.contains(e.target)) {
        modal.classList.add('hide');
      }
});
