const fill=document.querySelector('.fill')
const empties=document.querySelectorAll('.empty')
//addeventlistener(eventname,functionname)
fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)
//each array element of empties
for(const empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}
function dragStart(){
    this.className+=' hold'
   setTimeout(()=>this.className='invisible',0)
    console.log('drag start');
}
function dragEnd(){
    this.className='fill'
    console.log('drag end');
}
//dragover has the default action -reset the current drag operation "none"
function dragOver(e){
    e.preventDefault()
    console.log('drag over');
}
//dragenter default is-reject immediate user selection as potential
function dragEnter(e){
    e.preventDefault()
    this.className+=' hovered'
    console.log('drag enter');
}
function dragLeave(){
    this.className+='empty'
   
    console.log('drag leave');
}
function dragDrop(){
    this.className='empty'
    this.append(fill)
    console.log('drag drop');
}