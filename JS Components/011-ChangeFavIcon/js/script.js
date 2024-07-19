const favicon = document.getElementById('favicon');
console.log(favicon)


function toRed(){
    favicon.setAttribute('href', 'img/favicon.png');
}

function toGreen(){
    favicon.setAttribute('href', 'img/faviconTwo.png');
}