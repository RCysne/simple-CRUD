const array = [
    'R$400000',
    'Carro',
    'R$3000',
    'Celular',
    'R$2000000',
    'Casa',
    'R$1200',
    'Geladeira',
    'R$120',
    'Torneira',
    'R$7800',
    'Notebook'
];


const numbersArray = array.filter(prices => prices.includes('R$'));
console.log(numbersArray)

const numberPrices = numbersArray.map(p => Number(p.replace('R$', '')))
console.log(numberPrices)

const pricesNumbers = numberPrices.sort();
console.log(pricesNumbers);