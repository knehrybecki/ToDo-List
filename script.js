const inputText = document.querySelector('.input-text')
const addItem = document.querySelector('.add-item')
const myList = document.querySelector('.todo__list')

const buy = []

 listItem = () => {
    const listBuy = document.createElement('li')
    listBuy.classList.add('todo__item')

    buy.forEach((value) => {
        listBuy.textContent = value.buy
        myList.appendChild(listBuy)  
    })
}

buttonAddItem = () => {
    addItem.addEventListener("click", (event) =>{ 
        if(inputText.value === "") {return alert("Please write any text")}
        else {buy[buy.length] = {buy : inputText.value}}
        console.log(buy)
        event.preventDefault()
        listItem()
        buttonDeleteAndAcceptedItem()
        clickDelete()
        clickAccepted()
        inputText.value = ""
        console.log("add item")
    })
}
buttonAddItem()

buttonDeleteAndAcceptedItem = () => {
    const listBuyAll= document.querySelectorAll(".todo__item")

    const allButton = document.createElement('div')
    allButton.classList.add('todo__item-all')

    const acceptedButton = document.createElement('button')
    acceptedButton.classList.add('todo__item-accepted')
    acceptedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('todo__item-delete')
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'  
    
        for ( listBuyAlly of listBuyAll) {
            listBuyAlly.appendChild(allButton)
            allButton.appendChild(acceptedButton)
            allButton.appendChild(deleteButton)
        }
}
buttonDeleteAndAcceptedItem()

clickDelete = () =>{
    const deleteButtonItem = document.querySelectorAll('.todo__item-delete')
        
        for (const deleteButtonItems of deleteButtonItem){
            deleteButtonItems.addEventListener("click", (event) => {
                event.currentTarget.parentElement.parentElement.remove()
                event.preventDefault()
            })
        }
}

clickAccepted = () =>{
    const buttonAcceptedItem = document.querySelectorAll('.todo__item-accepted')

        for (const buttonAcceptedItems of buttonAcceptedItem) {
            buttonAcceptedItems.addEventListener('click', (event) =>{
                event.currentTarget.parentElement.parentElement.classList.add('checked')
                event.preventDefault()
            })     
        }
}
