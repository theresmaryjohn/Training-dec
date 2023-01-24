//in html as we put active on 1st one it is expanded a bit if we put active on second card it expands
const panels=document.querySelectorAll('.panel')//here we call all the classes named panel,there are more than one class named panel so we put querySelectorAll. also they are put into an array

panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}