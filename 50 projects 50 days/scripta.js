
import { addArray } from './script1.js'
//if we want to add a second import with same name addArray
//from scriptb
import { addArray as concatArray } from './scriptb.js';

const value = addArray([1,2,3]);
const value2=concatArray([1,2,3], [4,5,6])
console.log(value);
console.log(value2);
//as we added the type='module' this script shows an error that addArray is 
//not defined so we import addArray here