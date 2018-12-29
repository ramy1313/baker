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

let prePacked = {}

const updateItems = (items, pack) => {
    const index = items.findIndex((i) => i.packSize === pack[0]);

    if (index === -1) {
        items.push({"packSize": pack[0], "price": pack[1], "multiple": 1})
    } else {
        items[index] = {... items[index], "multiple": items[index].multiple + 1}
    }

    return items
}

const packOrder = (amount, packList, code) => {
    let prePackedItem = prePacked[code] || []
    for (let i = 0; i <= amount; i++) {
        for (let j = 0; j < packList.length; j++) {
            let packSize
            if ((packSize = packList[j][0]) <= i) {
                if (packSize === i) {
                    prePackedItem[i] = {
                        "totalPrice": packList[j][1],
                        "itemsCount": 1,
                        "items": [
                            {
                                "packSize": packList[j][0],
                                "price": packList[j][1],
                                "multiple": 1
                            }
                        ]
                    }
                } else if (!prePackedItem[i] && prePackedItem[i - packSize]) {
                    prePackedItem[i] = {
                        "totalPrice": prePackedItem[i - packSize].totalPrice + packList[j][1],
                        "itemsCount": prePackedItem[i - packSize].itemsCount + 1,
                        "items": updateItems(prePackedItem[i - packSize].items.slice(), packList[j])
                    }
                } else if (prePackedItem[i] && prePackedItem[i - packSize]) {
                    if (prePackedItem[i - packSize].itemsCount + 1 < prePackedItem[i].itemsCount) {
                        prePackedItem[i] = {
                            "totalPrice": prePackedItem[i - packSize].totalPrice + packList[j][1],
                            "itemsCount": prePackedItem[i - packSize].itemsCount + 1,
                            "items": updateItems(prePackedItem[i - packSize].items.slice(), packList[j])
                        }
                    }
                }
            }
        }
    }
    prePacked[code] = prePackedItem
    return prePacked[code][amount]
}

const order = (amount, code) => {
    let packResult
    if(prePacked[code] && prePacked[code][amount]) {
        packResult = prePacked[code][amount]
    } else {
        packResult = packOrder(amount, items[code], code)
    }
    const { itemsCount, ...result} = packResult
    
    return result
}


module.exports = { order }