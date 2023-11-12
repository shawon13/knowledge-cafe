// use local storage to manage cart data
const addToDb = id => {
    let knowladgeCart = getKnowladgeCart();
    // add quantity
    const quantity = knowladgeCart[id];
    if (!quantity) {
        knowladgeCart[id] = 1;
    }
    localStorage.setItem('knowladge-cart', JSON.stringify(knowladgeCart));
}
// time
const addToDb2 = id => {
    let knowladgeTimeCart = getKnowladgeCart2();
    // add quantity
    const quantity = knowladgeTimeCart[id];
    if (!quantity) {
        knowladgeTimeCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        knowladgeTimeCart[id] = newQuantity;
    }
    localStorage.setItem('knowladge-time-cart', JSON.stringify(knowladgeTimeCart));
}

const removeFromDb = id => {
    const knowladgeCart = getKnowladgeCart();
    if (id in knowladgeCart) {
        delete knowladgeCart[id];
        localStorage.setItem('knowladge-cart', JSON.stringify(knowladgeCart));
    }
}

const getKnowladgeCart = () => {
    let knowladgeCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('knowladge-cart');
    if (storedCart) {
        knowladgeCart = JSON.parse(storedCart);
    }
    return knowladgeCart;
}
/// time
const getKnowladgeCart2 = () => {
    let knowladgeTimeCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('knowladge-time-cart');
    if (storedCart) {
        knowladgeTimeCart = JSON.parse(storedCart);
    }
    return knowladgeTimeCart;
}

const deleteKnowladgeCart = () => {
    localStorage.removeItem('knowladge-cart');
}

export {
    addToDb,
    addToDb2,
    removeFromDb,
    getKnowladgeCart,
    getKnowladgeCart2,
    deleteKnowladgeCart
}
