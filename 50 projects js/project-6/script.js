const boxes=document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){ 
     const triggerBottom = window.innerHeight / 5*4 


    boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top//returns a DOMRect(describes the size and position of a rectangle) object providing info about the size of an element and its position relative to viewport
        if(boxTop< triggerBottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}