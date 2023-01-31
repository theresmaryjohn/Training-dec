const nav=document.querySelector('.nav')
window.addEventListener('scroll', fixNav)
function fixNav(){
    console.log(window.scrollY, nav.offsetHeight);
    //this shows the vertical values of window when we scroll
//the nav.offsetHeight is always a constant number as it is kept fixed
if(window.scrollY > nav.offsetHeight+150){
nav.classList.add('active')
}else{
    nav.classList.remove('active')
}
}