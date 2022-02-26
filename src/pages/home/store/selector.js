export function getProducts(state) {

    const {products, searchText, sortBy, filterColor, filterBrand} = state;
    if (searchText) {
        return products
            .filter(product => product.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    }

    let result = [...products];
    if (sortBy) result = _sortProducts(result, sortBy)

    if (filterColor) result = result.filter(product => product.color === filterColor);

    if (filterBrand) result = result.filter(product => product.brand === filterBrand);
    return result;
}

export function getBasketProducts(state) {
    return state.products.filter((product) => product.inBasket);
}

function _sortProducts(products, sortBy) {
    const result = [...products];
    if (sortBy === "minAmount") result.sort((p1, p2) => p1.amount.discounted - p2.amount.discounted); else if (sortBy === "maxAmount") result.sort((p1, p2) => p2.amount.discounted - p1.amount.discounted); else if (sortBy === "aToZ") result.sort((p1, p2) => {
        const dateDifference = new Date(p1.createdAt) - new Date(p2.createdAt);
        if (dateDifference === 0) {
            return p1.name.localeCompare(p2.name, 'tr', {sensitivity: 'base'});
        }
        return dateDifference;
    }); else if (sortBy === "zToA") result.sort((p1, p2) => {
        const dateDifference = new Date(p1.createdAt) - new Date(p2.createdAt);
        if (dateDifference === 0) {
            return p2.name.localeCompare(p1.name, 'tr', {sensitivity: 'base'});
        }
        return dateDifference;
    });

    return result;
}
