const balance = document.getElementById("balance");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const notification = document.getElementById("notification");

const dummyTransactions =[
    {id: 1, text: "Ice Cream", amount: -60},
    { id: 2, text: "Pizza", amount: 300 },
    { id: 3, text: "Milk Shake", amount: -70 },
    { id: 4, text: "Burger", amount: 200 },
];

let transaction = dummyTransactions;

function showNotification(){
    notification.classList.add("show");
    setTimeout(() =>{
        notification.classList.remove("show");
    },2000)
}

function generateID(){
    return Math.floor(math.random()*1000000);
}

function addTransaction(e) {
    e.preventDefault();
    if (text.value.trim() === "" || amount.value.trim() === "") {
    showNotification();
    } else {
    const transaction = {
        id: generateID(),
        text: text.value,
        amount: +amount.value,
    };
    transaction.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
      // updateLocaleStorage();
    text.value = "";
    amount.value = "";
    }
    }

    function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(sign === "+" ? "plus" : "minus");
    item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span
    ><button class="delete-btn" onclick="removeTransaction(${
    transaction.id
    })"><i class="fa fa-times"></i></button>
    `;
    list.appendChild(item);
}

function updateValues() {
    const amounts = transaction.map((transaction) => transaction.amount);
    const total = amounts
    .reduce((accumulator, value) => (accumulator += value), 0)
    .toFixed(2);
    const income = amounts
    .filter((value) => value > 0)
    .reduce((accumulator, value) => (accumulator += value), 0)
    .toFixed(2);
    const expense = (
    amounts
        .filter((value) => value < 0)
        .reduce((accumulator, value) => (accumulator += value), 0) * -1
    ).toFixed(2);
    balance.innerText = `$${total}`;
    plus.innerText = `$${income}`;
    innerText = `$${expense}`;
    }

    function removeTransaction(id) {
        transaction = transaction.filter((transaction) => transaction.id !== id);
        // updateLocaleStorage();
        init();
      }

      // Init
function init() {
    list.innerHTML = "";
    transaction.forEach(addTransactionDOM);
    updateValues();
  }

//   init();

// form.addEventListener("submit", addTransaction);