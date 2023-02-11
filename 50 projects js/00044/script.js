const  range=document.getElementById('range')

range.addEventListener('input',(e)=>{
    const value=+e.target.value
    //+ to give type num
    const label =e.target.nextElementSibling

    const range_width=getComputedStyle(e.target).getPropertyValue('width')

    //here we get 300px
    const label_width=getComputedStyle(label).getPropertyValue('width')
    //here we get 80px

    const num_width=+range_width.substring(0, range_width.length-2)
    const num_label_width=+label_width.substring(0, label_width.length-2)
//now we get 300 80 without px
const max=+e.target.max
const min=+e.target.min
//we get 0 100

    const left =value * (num_width/max)-num_label_width/2

    //we get values from -ve to 300

    label.style.left=`${left}px`

    label.innerHTML=value
})