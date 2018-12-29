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
    const pack = packList.filter(p => p[0] == amount)
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
    } else return null
}


module.exports = { order }