const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddentElements = document.querySelectorAll('.hidden');
hiddentElements.forEach((el) => observer.observe(el));
