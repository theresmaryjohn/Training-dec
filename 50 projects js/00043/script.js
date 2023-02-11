const ratings=document.querySelectorAll('.rating')
const sendBtn=document.querySelector('#send')
const panel=document.querySelector('.panel')
const ratingsContainer=document.querySelector('.ratings-container')
let selectedRating='Satisfied'

//here we can add an eventlistner foreach element but if we have a lot of users like 200 we cant use that
//so we take advantage of eventbubble-ie if we have an event for the button
//it is going to fire off for any of its parents also
//the box here is the parent of the button

ratingsContainer.addEventListener('click',(e)=>{
    //console.log(e.target);
    //in this if we click on any of the event ie any of the img or 
    //the button the console shows that event from index in the console
    //here we want to target the images and switch the active classes
    // if (e.target.classList.contains('rating')){
        //this says that if we click on an event in classlist
        //which contain the class rating then print the event in the console
        //here the box outside the img contains the class of rating and not the image
        //if we click the box we get the class printed on the console
        // console.log(e.target);
        //but we want the img to be printed on the console
        //so we introduce a parentNode on the classlist
        //the parentnode finds the node in the parent named rating
        //so if we click on img or the small tag we get the 
    //img tag or ssmall tag printed in the console
    
    if (e.target.parentNode.classList.contains('rating')){
        // console.log(e.target);
        removeActive()
        e.target.parentNode.classList.add('active')
         //now if we click the img we can see the shadow around which 
        //shows that is active
        //if we click all we can see all the classes are active we dont want that
        // we want only one active at a time

        selectedRating=e.target.nextElementSibling.innerHTML
        console.log(selectedRating);
        //now if we click the img we want the small tag to appear
        //which is the next sibling of the img tag and the parent rating div
    }
})

sendBtn.addEventListener('click',(e)=>{
    panel.innerHTML=`<i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback:${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
    //this gives an error as the bubbling panel is now changed so we change panel to ratings-container
})
function removeActive(){
    for(let i=0;i<ratings.length;i++ ){
        ratings[i].classList.remove('active')
    }
}