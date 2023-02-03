const loveMe=document.querySelector('.loveMe')
const times=document.querySelector('#times')


let clickTime=0
let timesClicked=0

loveMe.addEventListener('click', (e)=>{
    //event,e pertaines to the whole element
    // create our own double click
    if(clickTime===0){
        clickTime=new Date().getTime()
        //gettime-Number of milliseconds since January 1, 1970 00:00:00
        //objects represent a single moment in time  that represents milliseconds
        
    }else{
        if((new Date().getTime()-clickTime)<800){
            //Subtracting two subsequent getTime() calls on 
            //newly generated Date objects, give the time span between these two calls. 
            createHeart(e)
            //each time heart is created it adds to div and as the opacity is 0  it doesn't show
            //now we need to remove it each time clicked-line num 53
            clickTime=0
        }else{
            clickTime=new Date().getTime()
        }
    }
    
})
const createHeart=(e)=>{
    const heart=document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x=e.clientX
    const y=e.clientY
    //gives coordinates relative to viewport
    console.log(x,y);
    //we need to change the coordinates relative to the image
    const leftOffset=e.target.offsetLeft
    const topOffset=e.target.offsetTop

    const xInside =x-leftOffset
    const yInside=y-topOffset

    heart.style.top=`${yInside}px`
    heart.style.left=`${xInside}px`

    loveMe.appendChild(heart)
    
    times.innerHTML=++timesClicked

setTimeout(()=>heart.remove(),5000)
//the heart gets removed after 5s
}