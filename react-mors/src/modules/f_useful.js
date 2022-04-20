import catalogCarts from "../bd/catalogCarts";

function f_useful (homeTag) {
    let catalogCartsAll = [];


    //фильтр для блока 'может пригодиться'
    for (let key in catalogCarts) {
        catalogCarts[key].forEach((catalogCartsElement) => {
            if (catalogCarts[key] != catalogCarts[homeTag]) {
                catalogCartsAll.push(catalogCartsElement);
            }
        });
    }
    return catalogCartsAll
}

export default f_useful;