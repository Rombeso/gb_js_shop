import { random } from 'lodash'

const PRODUCTS = [
    'Shert',
    'Shoes',
    'Hat',
    'Jacket',
    'Socks'
];

const COLOR = [
    'green',
    'red',
    'orange',
    'black',
    'white'
]

let lastindex = 0;
// Создаем имя продукта и рандомного названия и цвета
function getProductName() {
    const product = PRODUCTS[random(0, PRODUCTS.langth - 1)];
    const color = COLOR[random(0, COLOR.length - 1)];
    return `${product} ${color}`

}
// Создаем эл-т массива из ID (счётчик), название (выз. пред функции), рандомной цены.
function getProduct() {
    return {
        id: ++lastindex,
        title: getProductName(),
        price: random(99, 999)
    }
}
// Создаем массив продуктов(колличество это вход пар-тор). 
// создаем пустой массив, пушаем в цыкле в этот моссив элементы созданные с помощью пред-щей функции.
function getProductList(count) {
    let products = []
    for (let i = 0; i < count; i++) {
        products.push(getProduct())
    }
    return products
}

export default getProductList;