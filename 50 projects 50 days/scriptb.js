
// export function  addArray(arr1, arr2){
//     return arr1.concat(arr2)
// }
//DYNAMIC EXPORT 

import {createButton} from './widget.js'
// import { changeBg, stopChangingBg } from './feature2.js'

createButton('Feature 1',()=>{
    alert('clicked Feature 1');
})

 createButton('Feature 2',async()=>{
//so here we use dynamic import so we don't need 
//the static import in the top
    // import('./feature2.js')
    // .then((obj)=>{

    //     createButton('Start Disco', obj.changeBg)
    //     createButton('Stop Disco',obj.stopChangingBg)
    // })
    const obj=await import('./feature2.js');
    createButton('Start Disco', obj.changeBg)
     createButton('Stop Disco',obj.stopChangingBg)

});
//the imports we use here are static imports
//static imports load in the network evenif not in use
//so we need to load the feature2 page only when the button is clicked to the network
//here we use dynamic import
//instead of using then we can use async await