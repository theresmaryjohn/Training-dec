const searchDiv=document.querySelector('.search')
const searchText=document.querySelector('.input')
const searchBtn=document.querySelector('.btn')
const searchFa=document.querySelector('.fas')

searchBtn.addEventListener('click',()=>{
        searchDiv.classList.toggle('active')
})