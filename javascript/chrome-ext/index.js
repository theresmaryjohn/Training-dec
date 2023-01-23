//chrome://extensions/-here weadds extention-in this load unpacked and select the folder you want to add ext here chrome ext
// function saveLead(){
//     console.log('button clicked from onclick attribute');//this is an event listener
// }
//step 2 create 2 variables 1.myLeads-empty array
//2.inputEL-assigned to the text input field
// let myLeads=[]
// //let inputEL=document.getElementById("input-el")//we can replace let by const(cannot be reassigned)
// const inputEL=document.getElementById("input-el")
// //other way to invoke an event listener is to a function or methodaddEvent..
// const inputBtn=document.getElementById('input-btn')
// inputBtn.addEventListener("click", function(){
//     console.log('clicked from addEventListener');
//}) //step1//on writing this method we dont want to add the onclick function in the html
//step3 push a value to myArray when the input button is clicked
//here conveniantly we use an hardcode value

// inputBtn.addEventListener("click", function(){
//    myLeads.push("www.awesomelead.com")
//    console.log(myLeads);
// }) 
//step 4-push the value from the inputEL into myleads array
//instead of hard-coded "www.awesomelead.com" value
// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEL.value)
//     console.log(myLeads);
//  }) 

//step5 log out the items in myleadarray using for loop
 //let myLead=["www.awesomelead.com","www.epiclead.com", "www.greatlead.com"]
 let myLead=[]
 const inputEl=document.getElementById("input-el")
 const inputbtn=document.getElementById('input-btn')
 //step 6 grab the unordered list and store it in a const varible ulEl
 const ulEl=document.getElementById("ul-el")
 const deletebtn=document.getElementById("delete-btn")
//  localStorage.setItem("myLead", "www.examplelead.com")
//  console.log(localStorage.getItem("myLead"));
//  //to clear we use
//  localStorage.clear()
const leadFromLocalStorage=JSON.parse(localStorage.getItem("myLead"))

if (leadFromLocalStorage){
    myLead=leadFromLocalStorage
    renderLeads()
}
//make delete button work
deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLead=[]
    renderLeads()
})
 inputbtn.addEventListener("click", function(){
    myLead.push(inputEl.value)
    //we need to clear the input field//target.value(inputEl.value)=empty string
   
    inputEl.value="";
    //save myLead array to localStorage
    localStorage.setItem("myLead", JSON.stringify(myLead))
    renderLeads()
    // console.log(localStorage.getItem("myLead"));// see line 40 but still the links erases as we refresh but it appears in localstorage so we nee to invoke localstorage
 }) 
//  for(let i=0; i<myLead.length; i++){
//     console.log(myLead[i]);
//  }
 //step7 render the leads in the unordered lists using ulEl.textContent
//  for(let i=0; i<myLead.length; i++){
//     ulEl.textContent+=myLead[i]+", "
//  }
 //find the text inside html
//  for(let i=0; i<myLead.length; i++){
//     ulEl.innerHTML+= "<li>"+myLead[i]+", "+"</li>"//converts this array into a list item
//  }//instaed of this method lets do a diff one with createElement and append

for(let i=0; i<myLead.length; i++){
//pseudo code is 
//create element
//set text content
//append to ul
   const li=document.createElement("li")
   li.textContent=myLead[i]
   ulEl.append(li)
}
//step 8 create a variable,listItems, to hold all the HTML for list items
//Assign it to an empty string
//step 9 Wrap the code below in renderLeads() function
//then in eventlistner call the renderLeads() function
// let listItems="";
// for(let i=0; i<myLead.length; i++){
//     //add the item to the listItems variable instead of ulEl.innerHTML
//      listItems+= "<li>"+myLead[i]+"</li>"
// }
// //render the listItems inside the unordered list using ulEl.innerHTML

// ulEl.innerHTML=listItems
// //now we remove hard-coding of site names and render it by typing it i the i/p box


function renderLeads(){
    let listItems="";
for(let i=0; i<myLead.length; i++){
    //we want the plane text to be a link
    //also we need to open link so we use target
    // listItems+= "<li><a target='_blank' href='"+myLead[i]+"'>"+myLead[i]+"</a></li>"
//to make the listItems simpler we use template strings
//replacing the quotes with backtick
listItems+= `<li><a target='_blank' href='${myLead[i]}'>${myLead[i]}</a></li>`
}


ulEl.innerHTML=listItems
}
//a serous flaw in the app is that tha eextensions saved doesn't get registered ie as we refresh it is no more seen
//to solve this problem the data needs to be stored in the local storage as key :value pairs
//line number 36(check)
//in local storage both key and value need to be strings
//so to store an array we use  in setItem key,JSON.stingify(value)
//to getItem JSON.parse(getItem...)-wrapping entire item in JSON.parse
//storing arrays in localStorage
// let myLeads=`["www.abcd.com]`//string
// myLeads=JSON.parse(myLeads) //to array
// myLeads.push("www.lead.com")
// myLeads=JSON.stringify(myLeads)//to string again
// console.log(typeof myLeads);