const form=document.getElementById('form')
const input=document.getElementById('input')
const todoUl=document.getElementById('todos')

const todos=JSON.parse(localStorage.getItem('todos'))
//as local storage stringifyes

if(todos){
    todos.forEach(todo=>addTodo(todo))
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    addTodo()
})

function addTodo(todo){
    let todoText=input.value
    if(todo){
        todoText=todo.text
    }
    // console.log(todoText);
    //here we get o/p in the console,anything  typed in the input box
    if(todoText){
        const todoEl=document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }

        todoEl.innerText=todoText

        todoEl.addEventListener('click',()=>{todoEl.
        classList.toggle('completed')

        updateLS()
    })
        //now with right click we need to remove
        todoEl.addEventListener('contextmenu',(e)=>{
            //now when we right click the usual menu opens
            //we need to prevent that
            e.preventDefault()
            //now we need to remove the added item on right click
            todoEl.remove()
            updateLS()
        })

        todoUl.appendChild(todoEl)

        input.value=''
        //this step adds the todos we enter to the dom but when we reload it vanishes
        //and also nothing happens when we click or right click them
        //so we add line nmber 25

        updateLS()
    }


}
//now on reloading the page the entered list goes away 
//we don't want that we need the elements to be stored in the local
//storage so we do
//localSorage.setItem('name',JSON.stringify(obj))
//the format is like api.setitem(key,value)
//the value is always stored in the localstorage as string so if we want to save an array or an object use stringify
//when we need to pull it out from local storage usee parse as it is stringified
//JSON.parse(localStorage.getItem(obj))


function updateLS(){
    const todosEl=document.querySelectorAll('li')
    const todos=[]

    todosEl.forEach(todoEl=>{
        todos.push({
            text:todoEl.innerText,
            completed:todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos',JSON.stringify(todos))
}