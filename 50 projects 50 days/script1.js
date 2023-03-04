// var button=document.getElementById('bye')
// button.style.background='red'

// button.onclick=()=>{
//  console.log(button.innerHTML);
// }

console.log('script1');
//export is used to denote which function we want to import to another file

export function addArray(arr){
    return arr.reduce((total,item)=> total+item, 0)
}