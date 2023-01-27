const labels=document.querySelectorAll('.form-control label')
console.log(labels);//the queryselectorall fetches the list and put it as na array
labels.forEach(label=> {
    label.innerHTML=label.innerText
    //the innerText takes the letters of fist label here Email and the split changes it into an array
    .split('')
    //the split maks an array of e,m,a,i,l and p,a,s,s,w,o,r,d
    //now we add map to change it into an array of letter swith span around with a transition delay.
   .map((letter, idx)=>`<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    //span of an array is the difference between max and min value of the array.
    //the map spans each letter<span>E</span> same for each letter of enail and password and o/ps it as an array of spaned letters
    .join('')//turn it back to string of spaned letters
    //span is an inline element by default
})