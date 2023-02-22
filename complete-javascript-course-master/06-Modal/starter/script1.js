'use strict';
const buttonModel=document.querySelectorAll('.show-modal')
const hiddenText=document.querySelectorAll('.modal')
const buttonClose=document.querySelectorAll('.close-modal')
const overlayText=document.querySelector('.overlay')
console.log(buttonModel);

// buttonModel.addEventListener('click', ()=>{
    
    //       console.log("hhhhhh")
    //       hiddenText.classList.add("hidden")
    
    //     })
    
    // console.log(hiddenText[1]);
    
    buttonModel.forEach((btn,idx)=>{
        btn.addEventListener('click',()=>{
            console.log(btn);
            console.log(idx);//the idx gives 0,1,2
            //so just add [idx] to hiddenText so it comes 
            //hiddenText0,hiddenText1    
            
            hiddenText[idx].classList.add("hidden")
            hiddenText[idx].style.display='block'
            overlayText.classList.remove('hidden')
           
    })
    buttonClose[idx].addEventListener('click',()=>{
          
        hiddenText[idx].classList.add("hidden")
        hiddenText[idx].style.display='none'
        overlayText.classList.add('hidden')

    })
    document.addEventListener('keydown',(e)=>{
         
         hiddenText[idx].classList.add("hidden")
         hiddenText[idx].style.display='none'
         overlayText.classList.add('hidden')

    })

 })





