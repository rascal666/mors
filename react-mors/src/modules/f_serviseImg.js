import catalogCarts from '../bd/catalogCarts';

function f_serviseImg (homeTag, serviceTitle) {
    let currentImg = '';
    catalogCarts[homeTag].forEach((element) => {
        if (element.title === serviceTitle) {
            currentImg = element.srcPages;
        }
    });
    return currentImg;
}

export default f_serviseImg;