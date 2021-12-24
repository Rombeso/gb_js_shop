// Получаем эл-т дома
const $showcase = document.querySelector('.showcase');
// создаем эл-т для дома.
const renderGoodsItem = ({ title, price }) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};
// Функция принимает объекты продуктов в массиве, и спомощью мапа создает эл-ты Div с помощью предыдущей функции
// и сетает из в дом вызывая дом эл-т
const renderGoodsList = (list) => {
    let goodsList = list.map(
        (item) => {
            return renderGoodsItem(item)
        }
    ).join('');

    $showcase.insertAdjacentHTML('beforeend', goodsList);
}

export default renderGoodsList