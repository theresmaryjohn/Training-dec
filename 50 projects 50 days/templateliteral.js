//multiline feature

// const var1=`Code malayalam.
//  it's wonderful`
 //the backticks doesn't show error evenif it multiple lines
 //but normal quotes show error like this

//  const productname='Pen'
//  const price=12

//  const value=`the product name is ${productname} and it's price is ${price} .`
 
//  const msg=`The product is ${price>10?'Costly':'Cheap'}`
//  console.log(value,msg);

 const products=[
    {
        productName:'Pen',
        price:10
    },
    {
        productName:'Book',
        price:20
    }
 ]
document.body.innerHTML=products.map((item)=>{

   return `
    <div class="item">
    <h4>${item.productName}</h4>
    <div>${item.price}</div>
    </div>
    `

})
    
