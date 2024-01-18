window.addEventListener('submit', event => {
    event = event || window.event;
    event.preventDefault();
})

let indexId;
const result = document.getElementById('result')
const btnSubmit = document.getElementById('btnSubmit')

const db = ['Ronaldo', 'Cysne', 'Vasconcelos'];



// READ
const readDb = () => {
    db.forEach(item => {
        indexId = db.indexOf(item)
        result.insertAdjacentHTML('afterbegin', `
    <li>${item}<button value="${indexId}" data-action="deleteAction">Apagar</button><button value="${indexId}" data-action="editAction">Editar</button></li>
    `)
    // console.log(item, indexId)
    })
}

readDb()


// CREATE
btnSubmit.onclick = () => {
    createItem()
}
const createItem = () => {
    const item = document.getElementById('input').value;
    db.push(item);
    indexId = db.indexOf(item);
    result.insertAdjacentHTML('afterbegin', `
    <li>${item}<button value="${indexId}" data-action="deleteAction">Apagar</button><button value="${indexId}" data-action="editAction">Editar</button></li>
    `)

    clearInput()
}


// UPDATE
const updateDisplay = (dBase) => readDb(dBase)



// EDIT
const editItem = (deleteItem, buttonValue) => {
    // variável recebe READ DB, faz o find com o value
    const itemValue = deleteItem.parentNode.firstChild.data

    const findValue = db.find(element => element == itemValue)
    console.log(findValue)
    
    // return value === value
    // inserir esse novo conteúdo
    // deleteItem.target.parentNode.firstChild.data = ""
}


// DELETE
const deleteValue = (deleteItem, buttonValue) => {
    db.splice(buttonValue, 1)
        result.removeChild(deleteItem.parentNode)
        result.innerHTML = "";
        const dBase = db
        updateDisplay(dBase)
        // console.log(dBase)
}


result.onclick = (event) => {
    const deleteItem = event.target
    const buttonValue = deleteItem.value
    // console.log(event)

    if (deleteItem.dataset.action == 'deleteAction') {
        deleteValue(deleteItem, buttonValue)
    }

    if (deleteItem.dataset.action == 'editAction') {
        editItem(deleteItem, buttonValue)
    }
}



// updateContent()

const clearInput = () => {
    document.getElementById('input').value = "";
}