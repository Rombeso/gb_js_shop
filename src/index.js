import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
// присваем перемменной созданный массив
const productList = getProductList(20);

console.log(productList);
// передаем этот массив на отрисовку
renderGoodsList(productList);