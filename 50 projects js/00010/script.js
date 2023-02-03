//we have to use 'fetchAPI' to get the data from https://icanhazdadjoke.com/api
//for each joke it has an "id":,"joke":,and "status":
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();
//using .then()
function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  //request to third party API
   fetch("https://icanhazdadjoke.com", config)
//     //Promise.prototype.then(),then() method of a Promise object takes up to two arguments

     .then((res) => res.json()) //res for response,we can name anything
//     // .then((data)=> console.log(data))
//     //jokes can be seen in the console
//     //if we simply put like this then we get the html document if we want to display joke then use accept header of application/JSON

//     //the console shows this below:
//     // "id": "HYoGYTvX0g",
//     // "joke": "What is the tallest building in the world? The library – it’s got the most stories!",
//     // "status": 200
//     //so next we grab the joke from the above data so we write data.joke
     .then((data) => {
       jokeEl.innerHTML += data.joke;
       jokeEl.innerHTML += " ID = " + data.id;
     });

  jokeEl.innerHTML += " hahahahahaha ";
}

//using async
//Another method
//The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
//for eg async function f() {
//return 1;}
//For instance, this function returns a resolved promise with the result of 1
// async function generateJoke(){
//     const config={
//         headers:{
//             Accept: 'application/json',
//         },
//     }
//the keyword await makes JavaScript wait until that promise settles and returns its result.
//     const res = await fetch('https://icanhazdadjoke.com', config)
//     const data = await res.json()
//     jokeEl.innerHTML=data.joke
// }
