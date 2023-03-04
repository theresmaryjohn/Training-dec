const name='my array library';

const options={
    version:'1.1',
    author:'Cose Malayalam'
}

function addAll(arr = []){
    log('addAll');
    return arr.reduce((total,item) => total + item, 0)
}

function findMax(arr = []) {
    log('findMax');
    return Math.max(...arr);
}

function log(val){
    console.log('INSIDE',val);
}
//export can be of two types named export and default export
//export by name means placing 'export' key word infornt of functions we need to export
//and then we can import it by function name

//export by default means placing 'export default'
//keyword infront of the function 
//here instead of names default is the keyword
//so there should be only one default export
//we can use any name on importing the default export
//we can use default export for an anonymous function
//import * as 'name' from './lib.js'-this collects all the functions