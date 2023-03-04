// function test(){
//     const arr = [11,12,13,14,15]

//     const [a,b,...rest]=arr
//      console.log(a,b,rest);
//      //...rest operator prints the rest of the array elements other than destructured ones
//      //if we destructured everything an dnothing in the rest array then we get an empty array
//     const total=arr.reduce((sum,ele)=>sum+ele)
//     console.log(total);

//     }
// test()

function test(...total){
    const a=total.reduce((sum,current)=>sum+current)
    console.log(a);
}
// test(11,12,23,13,5)

//if in test we pass an array itself then we again use a spread operator

const a=[11,12,23,13,5]
test(...a)


