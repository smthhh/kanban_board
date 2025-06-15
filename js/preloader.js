const closePreloader = function(){
    const preloader = document.querySelector('#preloader');
    const mainContent = document.querySelector('.content');

    mainContent.style.opacity = '1';
    preloader.style.display = 'none';
}

setTimeout(closePreloader, 500);