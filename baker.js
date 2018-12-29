const bakerOrder = require('./bakerorder')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    let ord = line.split(" ")
    let orderDetails = bakerOrder.order(Number(ord[0]), ord[1])
    console.log(ord[0] + " " + ord[1] + " $" + orderDetails.totalPrice);
    orderDetails.items.forEach(i => {
        console.log("\t" + i.multiple + " X " + i.packSize + " $" + i.price)
    });
});
