window.onsubmit = (event) => {
    event = event || window.event
    event.preventDefault()
}

const result = document.getElementById('result');
const btnSubmit = document.getElementById('btnSubmit')
let indexId;


const db = [
    {
        brand: 'Apple',
        model: 'IPhone',
        price: '7,899',
    },
    {
        brand: 'Samsung',
        model: 'S23 Ultra',
        price: '6,900',
    },
    {
        brand: 'Motorola',
        model: 'Edge',
        price: '5,600'
    }
]


const readDb = () => {
    db.forEach(item => {
        indexId = db.indexOf(item)
        result.insertAdjacentHTML('beforeend', `
        <tr>
            <td value='${indexId}'>${item.brand}</td>
            <td value='${indexId}'>${item.model}</td>
            <td value='${indexId}'>R$ ${item.price}</td>
            <td><button value='${indexId}' data-action="edit">Editar</button></td>
            <td><button value='${indexId}' data-action="delete">Apagar</button></td>
        </tr>
        `)
        
    })
}

readDb()


const clearInput = () => {
    const brand = document.getElementById('brand').value = ''
    const model = document.getElementById('model').value = ''
    const price = document.getElementById('price').value = ''
}


const createItem = () => {
    const brand = document.getElementById('brand').value
    const model = document.getElementById('model').value
    const price = document.getElementById('price').value

    db.push({brand: brand, model: model, price: price})
    clearInput()
    result.innerHTML = '';
    readDb()
}

btnSubmit.onclick = () => createItem()




result.onclick = (event) => {
    const clickTarget = event.target;
    const brand = document.getElementById('brand')
    const model = document.getElementById('model')
    const price = document.getElementById('price')
    
    if (clickTarget.dataset.action == 'edit') {

        brand.value = db[clickTarget.value].brand;
        model.value = db[clickTarget.value].model;
        price.value = db[clickTarget.value].price;

        btnSubmit.onclick = () => {
            db[clickTarget.value] = { brand: brand.value, model: model.value, price: price.value }
            clearInput()
            result.innerHTML = '';
            readDb()
            console.log(db)
        }
    }

    if (clickTarget.dataset.action == 'delete') {
        clearInput()
        db.splice(clickTarget.value, 1);
        console.log(db)
        result.innerHTML = '';
        readDb()
    }
}