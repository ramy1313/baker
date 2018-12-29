const items = {
    "VS5": [
        [3, 6.99],
        [5, 8.99]
    ],
    "MB11": [
        [2, 9.95],
        [5, 16.95],
        [8, 24.95]
    ],
    "CF": [
        [3, 5.95],
        [5, 9.95],
        [9, 16.99]
    ]
}

const order = (amount, code) => {
    const packList = items[code]
    let pack = packList.filter(p => p[0] == amount)
    if (pack.length !== 0) {
        return {
            "totalPrice": pack[0][1],
            "items": [
                {
                    "packSize": pack[0][0],
                    "price": pack[0][1],
                    "multiple": 1
                }
            ]
        }
    } else if ((pack = packList.filter(p => amount % p[0] === 0)).length !== 0) {
        const multiple = amount / pack[0][0]
        return {
            "totalPrice": pack[0][1] * multiple,
            "items": [
                {
                    "packSize": pack[0][0],
                    "price": pack[0][1],
                    "multiple": multiple
                }
            ]
        }
    } else null
}


module.exports = { order }