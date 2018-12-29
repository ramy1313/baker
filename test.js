const assert = require('assert');
const bakerOrder = require('./bakerorder')

it("Order 3 Vegemite Scroll should return one pack of 3", () => {
    const orderDetails = bakerOrder.order(3, "VS5")
    assert.equal(orderDetails.totalPrice, 6.99)
    assert.equal(orderDetails.items.length, 1)
    assert.equal(orderDetails.items[0].packSize, 3)
    assert.equal(orderDetails.items[0].price, 6.99)
    assert.equal(orderDetails.items[0].multiple, 1)
})

it("Order 10 Vegemite Scroll should return 2 packs of 5", () => {
    const orderDetails = bakerOrder.order(10, "VS5")
    assert.equal(orderDetails.totalPrice, 17.98)
    assert.equal(orderDetails.items.length, 1)
    assert.equal(orderDetails.items[0].packSize, 5)
    assert.equal(orderDetails.items[0].price, 8.99)
    assert.equal(orderDetails.items[0].multiple, 2)
})

it("Order 14 Blueberry Muffin should return 3 packs of 2 and 1 pack of 8", () => {
    const orderDetails = bakerOrder.order(14, "MB11")
    assert.equal(orderDetails.totalPrice, 54.8)
    assert.equal(orderDetails.items.length, 2)
    assert.equal(orderDetails.items.some(i => i.packSize === 2 && i.price === 9.95 && i.multiple === 3), true)
    assert.equal(orderDetails.items.some(i => i.packSize === 8 && i.price === 24.95 &&  i.multiple === 1), true)
})

it("Order 13 Croissant should return 2 packs of 5 and 1 pack of 3", () => {
    const orderDetails = bakerOrder.order(13, "CF")
    assert.equal(orderDetails.totalPrice, 25.85)
    assert.equal(orderDetails.items.length, 2)
    assert.equal(orderDetails.items.some(i => i.packSize === 5 && i.price === 9.95 && i.multiple === 2), true)
    assert.equal(orderDetails.items.some(i => i.packSize === 1 && i.price === 5.95 &&  i.multiple === 1), true)
})