function calculateCost(amount) {
    let fee = 3;
    let interest = amount * 0.01;

    return fee + interest + amount;
}

console.log(calculateCost(100));