const bg = document.querySelector('#bg');

window.addEventListener('scroll',function(){

    bg.style.opacity = 1 - +this.window.scrollY/600;
})