import catalogCarts from '../bd/catalogCarts';

function f_servisePrice (homeTag, serviceTitle) {
    let currentPrice = {
        price: '',
        priceNote: ''
    };
    catalogCarts[homeTag].forEach((element) => {
        if (element.title === serviceTitle) {
            currentPrice.price = element.price;
            currentPrice.priceNote = element.priceNote;
        }
    });
    return currentPrice;
}

export default f_servisePrice;