function plus(n1, n2) {
    return n1 + n2;
}

var onePlusTwo = plus(1, 2);
var fourAndFive = plus(4, 5);
console.log("The result: ", fourAndFive);

function subtract(n1, n2) {
    return n1 - n2;

}
var sevenSubtractFive= subtract(7, 5);
console.log ('The Answer:',sevenSubtractFive);

var johnAccount = {
    "name": "John Doe",
    "accountNumber": 83232693,
    "accountBalance": 2000000,
    "random": function () {
        return Math.random();
    }
};

var sarahAccount = {
    "name": "Sarah Connor",
    "accountNumber": 32736526,
    "accountBalance": 400000
};

function transferMoney(sender, recipient, amount) {
    if(sender.accountBalance >= amount){
        sender.accountBalance = sender.accountBalance - amount;
        recipient.accountBalance = recipient.accountBalance + amount;
        console.log("Transaction successful");
    } else {
        console.log("Insufficient Funds");
    }
}

transferMoney(johnAccount, sarahAccount, 3000000);
console.log(johnAccount.random());