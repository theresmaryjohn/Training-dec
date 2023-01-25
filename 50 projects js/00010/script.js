//we have to use 'fetchAPI' to get the data from https://icanhazdadjoke.com/api
//for each joke it has an "id":,"joke":,and "status":
const jokeEl=document.getElementById('joke')
const jokeBtn=document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    //request to third party API
    fetch('https://icanhazdadjoke.com', config)
    //Promise.prototype.then(),then() method of a Promise object takes up to two arguments

    .then(res=>res.json())//res for response,we can name anything
    // .then((data)=> console.log(data))
    //jokes can be seen in the console
    //if we simply put like this then we get the html document if we want to display joke then use accept header of application/JSON
    
    //the console shows this below:
    // "id": "HYoGYTvX0g",
    // "joke": "What is the tallest building in the world? The library – it’s got the most stories!",
    // "status": 200
    //so next we grab the joke from the above data so we write data.joke
    .then((data)=> {
        jokeEl.innerHTML=data.joke

    })
}



//Another method