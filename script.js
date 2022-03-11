const inputText = document.querySelector('.input-text')
const buttonAddTodo = document.querySelector('.add-item')
const todoList = document.querySelector('.todo__list')

let todo = []

const createNewTodo = text => {
    const list = document.createElement('li')
    list.classList.add('todo__item')
    list.textContent = text       

    return list
}

buttonAddTodo.addEventListener('click', () => { 
    if (inputText.value === ""){
        return alert("Please write any text")
    }
    todo = todo.concat([
        {
            todo: inputText.value
        }
    ])
   
    const newTodo = createNewTodo(inputText.value)

    todoList.appendChild(newTodo)
    createTodoControls(newTodo) 

    inputText.value = ""
})

const createTodoControls = todoItem => {
    const allButton = document.createElement('div')
    allButton.classList.add('todo__item-all-button')

    const acceptedButton = document.createElement('button')
    acceptedButton.classList.add('todo__item-accepted')

    const check = document.createElement('i')
    check.className.add('fa-solid fa-check')
     
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('todo__item-delete')

    const trash = document.createElement('i')
    trash.className.add('fa-solid fa-trash')
        
    todoItem.appendChild(allButton)
    allButton.appendChild(acceptedButton)
    allButton.appendChild(deleteButton)
    acceptedButton.appendChild(check)
    deleteButton.appendChild(trash)

    deleteButton.addEventListener('click', event => event.currentTarget.parentElement.parentElement.remove())

    acceptedButton.addEventListener('click', event => event.currentTarget.parentElement.parentElement.classList.add('checked'))
}
