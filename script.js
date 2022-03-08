const inputText = document.querySelector('.input-text')
const addItem = document.querySelector('.add-item')
const myList = document.querySelector('.todo__list')
const buttonAcceptedItem = document.querySelector('.todo__item-accepted')


const buy = []


 listItem = () => {
    const listBuy = document.createElement('li')
    listBuy.classList.add('todo__item')
    listBuy.textContent = inputText.value
    myList.appendChild(listBuy)  
}

buttonAddItem = () => {
    addItem.addEventListener("click", (event) =>{ 
        if(inputText.value === "") {return alert("please write any text")}
        else {buy[buy.length] = {buy : inputText.value}}
        console.log(buy)
        event.preventDefault()
        listItem()
        buttonDeleteItem()
        inputText.value = ""
        console.log("add item")
    })
}
buttonAddItem()


buttonDeleteItem = () => {

        const listBuyAll= document.querySelectorAll(".todo__item")
        for (const listBuyAlly of listBuyAll) {
        const acceptedButton = document.createElement('button')
        acceptedButton.classList.add('todo__item-accepted')
        acceptedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
        // acceptedButton.setAttribute("class","fa-solid fa-check")
        listBuyAlly.appendChild(acceptedButton)
    
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('todo__item-delete')
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
        // deleteButton.setAttribute("class","fa-solid fa-trash")
        listBuyAlly.appendChild(deleteButton)
        }
}

// test delbutton
const deleteButtonItem = document.querySelector('.todo__item-delete') 
    deleteButtonItem.addEventListener("click", (event) => {
       
    console.log("dzial")
     delete buy[1]
     listItem()
    event.preventDefault()
    })

