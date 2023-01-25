const tagsEl=document.getElementById('tags')
const textarea=document.getElementById('textarea')

textarea.focus()
//The method gives focus to an element automatically (if it can be focused)
textarea.addEventListener ('keyup', (e)=>{
    // createTags(e.target.value)
    createTags(e.target.value)
    //The target property returns the element where the event occured
    //keyup when pressed and released
    if(e.key === 'Enter') {
        setTimeout(()=>{
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})
function createTags(input){
    console.log(input);
    const tags = input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim())
    //the split func creates an array with array elements seperated by commas 
    //filter removes any empty element and map removes any white space
    console.log(tags)
    tagsEl.innerHTML=''
    tags.forEach(tag=>{
        const tagEl=document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText=tag
        tagsEl.appendChild(tagEl)
    })
    
}
function randomSelect(){
    const times=30//no of times it highlights
    const interval = setInterval(()=>{
        const randomTag=pickRandomTag()
        highlightTag(randomTag)

        setTimeout(()=>{
            unHighlightTag(randomTag)
        },100)
    },100);
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag=pickRandomTag()
            highlightTag(randomTag)
        },100)
    }, times*100)
}

function pickRandomTag(){
    const tags=document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}


function highlightTag(tag){
    tag.classList.add('highlight')
}
function unHighlightTag(tag){
    tag.classList.remove('highlight')
}