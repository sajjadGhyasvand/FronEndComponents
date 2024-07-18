const imgBx = document.querySelectorAll('.imgBox');

console.log(imgBx)


imgBx.forEach(popup => popup.addEventListener('click', function(){
    popup.classList.toggle('active');
}))

// imgBx.addEventListener('click', function(){
//     imgBx.classList.toggle('active')
// })