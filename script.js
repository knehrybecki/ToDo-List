const newList = document.querySelector('.input-text')
const addItem = document.querySelector('.add-item')
const myList = document.querySelector('.todo__item')
const acceptItem = document.querySelector('.todo__item-name')

function Item(name) {
    this.name = name
}

const buy = {
    buy1: new Item("mleko"),
    buy2: new Item("jajko"),
    buy3: new Item("cukier"),
}

function showAllBuyItem() {
    let listItem = " "

    for(idBuy of Object.keys(buy))
    {
        listItem += buyItem(idBuy)
    }
    return listItem
}

function buyItem(idBuy) {
    let nameItem = ""
    nameItem += '<div class="todo__item-name">' + buy[idBuy].name +'</div>'
    nameItem += '<button data-idbuy="'+idBuy+'"class="todo__item-accepted">'+'<i class="fa-solid fa-check"></i>'+'</button>'
    nameItem += '<button data-idbuy="'+idBuy+'"class="todo__item-deleted" >'+'<i class="fa-solid fa-trash"></i>'+'</button>'
    return nameItem
}

function deleteBuyItem(idBuy) {
    delete buy[idBuy]

}
// deleteBuyItem("buy1")

function acceptedBuyItem() {  
    
   acceptItem.style.textDecoration = 'line-through'
}

myList.innerHTML = showAllBuyItem()
console.log(buy)

function addBuyItem(name) {
    // buy.buy4 = new Item(name)
        let quanity = Object.keys(buy).length
        let lastIndex = (Object.keys(buy)[quanity-1])
        let lastNumber = Number(lastIndex.substr(3))
        let newKey ='buy'+(lastNumber+1)
        buy[newKey] = new Item(name)
        
}
// addBuyItem("ryz")
// addBuyItem("piwo")


function buttonDeleteItem(){
    const deleteItem = document.querySelectorAll('.todo__item-deleted')
    for(const deletedItem of deleteItem) {

        deletedItem.addEventListener("click", () =>
        { 
            deleteBuyItem(deletedItem.dataset.idbuy)
            myList.innerHTML = showAllBuyItem()
            buttonDeleteItem()
            console.log("deleting!") 
        })
    }
}
buttonDeleteItem()

function buttonAddItem(){
    addItem.addEventListener("click", () =>{
        addBuyItem(newList.value)
        myList.innerHTML = showAllBuyItem()
        buttonDeleteItem()
        console.log("adding !")
})
}
buttonAddItem()

function buttonAcceptedItem(){
    const acceptItem = document.querySelectorAll('.todo__item-accepted')
    for(const acceptedItem of acceptItem) {

        acceptedItem.addEventListener("click", () =>
        {   
            console.log("test click")
            acceptedBuyItem(acceptedItem.dataset.idbuy)
            myList.innerHTML = showAllBuyItem()
            buttonDeleteItem()
            console.log("ok !") 
        })
    }
}

buttonAcceptedItem()


