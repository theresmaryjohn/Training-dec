//fetching profile data with axios
const APIURL = "https://api.github.com/users/"

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
 
    //When a promise is fulfilled, you can
    //access the resolved data in the then method of the promise
    // .then(res => console.log(res))-here we use async await
    // .catch(err => console.log(err))-here try catch
  //When a promise is rejected (that is, the promise fails), you can access
  // the error information returned in the catch method of the promise
  try {
    const {data} = await axios(APIURL + username)
    createUserCard(data);
    getRepos(username)
  }
  //if we put something ie not a name then no change will happen 
  //we handle this case by the catch(err)-so we create a new function
  catch(err){
    if(err.response.status==404){
      createErrorCard('No profile with this username')
    }
    // console.log(err);
    
  }
}
async function getRepos(username){
  try {
    const {data} = await axios(APIURL + username+'/repos?sort=created')
    addReposToCard(data);
  }
  catch(err){
    if(err.response.status==404){
      createErrorCard('Problem fetching repos ')
    }
    
  }
}
function createUserCard(user){
  const cardHTML=`
  <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avatar" />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>${user.bio} </p>
          <ul>
            <li>${user.followers} <strong>Followers</strong> </li>
            <li>${user.following} <strong>Following</strong> </li>
            <li>${user.public_repos} <strong>Repos</strong> </li>
          </ul>
          <div id="repos">
          </div>
        </div>
      </div>`
      main.innerHTML=cardHTML

}
function addReposToCard(repos){
  const reposEl=document.getElementById('repos')
  repos
  .slice(0,10)
  .forEach(repo=>{
    const repoEl=document.createElement('a')
    repoEl.classList.add('repo')
    repoEl.href=repo.html_url
    repoEl.target='_blank'
    repoEl.innerText=repo.name

    reposEl.appendChild(repoEl)//to add to dom
  })
}
function createErrorCard(msg){
  const cardHTML=`
  <div class="card">
  <h1>${msg}<h1>
  </div>
  `
  main.innerHTML=cardHTML
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    //as it always trys to submit to a file
    const user =search.value

    if(user){
        getUser(user)
        search.value=''
    }
})
