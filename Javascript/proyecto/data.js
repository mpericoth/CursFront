var cart=[];

// Array de la llista de la compra
var cartList = [];

var subtotal = {
    cars: {
        value: 0,
        discount: 0
    },
    rims: {
        value: 0,
        discount: 0
    },
    wheels: {
        value: 0,
        discount: 0
    },
};
var products = [
    {
        id: 41,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 52,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 0,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 75,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 54,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 65,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 75,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 85,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 95,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
;
