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