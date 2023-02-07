const result=document.getElementById('result')
const filter=document.getElementById('filter')
const listItenms=[]

getData()


filter.addEventListener('input',(e)=>{
    filterData(e.target.value)
})

async function getData(){
    const res= await fetch('https://randomuser.me/api?results=50')
    const {results}=await res.json()

    //clear results
    result.innerHTML=''

    results.forEach(user=>{
        const li=document.createElement('li')

        listItenms.push(li)
        li.innerHTML=`
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city},${user.location.country}</p>        </div>
        
        `
        result.appendChild(li)
        //in this api the results come asobjects with key value pairs so we use user,picture.large..
    })
}

function filterData(searchTerm){
    listItenms.forEach(item=>{
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')

        }else{
            item.classList.add('hide')
        }

    })
}