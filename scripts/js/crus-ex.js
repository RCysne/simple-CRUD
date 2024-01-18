window.onsubmit = (event) => {
    event = event || window.event;
    event.preventDefault()
}

const btnSubmit = document.getElementById('btnSubmit');
const result = document.getElementById('result');
let indexId;

const data = []


// READ DATA
const readDb = () => {
    data.forEach(item => {
        indexId = data.indexOf(item);
        result.insertAdjacentHTML('beforeend', `
        <li>
        ${item}
        <button value="${indexId}" data-action="editItem">Editar</button>
        <button value="${indexId}" data-action="deleteItem">Apagar</button>
        </li>
        `)
    })
}
readDb()

// UPDATE DATA
const updateData = (db) => readDb(db)


const clearInput = () => {
        document.getElementById('input').value = ''
    }



// CREATE ITEM
btnSubmit.onclick = () => createItem();

const createItem = () => {
    const item = document.getElementById('input').value;

    if (item == '') {
        alert('Digite sua tarefa aqui!')
        return
    } else {
        data.push(item)
    }
    clearInput()
    result.innerHTML = '';
    readDb()
    }



// DELETE ITEM
const deleteItem = (event) => {
    const clickedItem = event.target
    // console.log(clickedItem.value)

    if (clickedItem.dataset.action == 'deleteItem') {
        data.splice(clickedItem.value, 1)
        const db = data
        result.innerHTML = ''
        updateData(db)
        console.log(db)
    }

    if (clickedItem.dataset.action == 'editItem') {
        const input = document.getElementById('input')
        input.focus()
        input.value = data[clickedItem.value]

        btnSubmit.onclick = () => {
            data[clickedItem.value] = input.value
            console.log(data)
            result.innerHTML = ''
            updateData()
            clearInput()
        }
    }
}
result.addEventListener('click', deleteItem);



