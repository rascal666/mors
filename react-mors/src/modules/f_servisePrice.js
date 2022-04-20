import catalogCarts from '../bd/catalogCarts';

function f_servisePrice (homeTag, serviceTitle) {
    let currentPrice = '';
    catalogCarts[homeTag].forEach((element) => {
        if (element.title === serviceTitle) {
            currentPrice = element.price;
        }
    });
    return currentPrice;
}

export default f_servisePrice;