const loadText=document.querySelector('.loading-text')
const bg=document.querySelector('.bg')
let load=0
let int=setInterval(blurring,30)
function blurring(){
    load++
 if(load>99){
    clearInterval(int)
 }
 loadText.innerText=`${load}%`
 loadText.style.opacity=scale(load, 0,100,1,0)//when it starts from 0% to 100% we want opacity to go from 1 to 0
 bg.style.filter =`blur(${scale(load,0,100,30,0)}px)`
}
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax)=> {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


