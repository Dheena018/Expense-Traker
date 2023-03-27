'use strict';

const income=document.getElementById('money-plus');
const expense=document.getElementById('money-minus');
const balance= document.getElementById('balance');
const text = document.getElementById('text');
const amount =document.getElementById('amount');
const btn = document.getElementById('submit');
const form =document.getElementById('form')
const notification=document.getElementById("notification")

const dummyTransactions =[];

let transaction=dummyTransactions;


 function showNotification(){
    notification.classList.add("show");
}
setTimeout(()=>{
    notification.classList.remove("show");
});


function generateID(){
    return Math.floor(Math.random()*100000);
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(text.value.trim() === "" || amount.value.trim() === ""){
        showNotification()
        // alert("all fields are mandatory")
    }else{
        const transactions = {
            id:generateID(),
            text:text.value,
            amount:amount.value,
        };
        transaction.push(transaction);
        addTransactionDOM(transactions);
        updateValues();
        init();
    }
});


function addTransactionDOM(transaction){
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(sign === "+" ? "plus" :  "minus");
    item.innerHTML=`${transaction.text} <span>${sign} ${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>`;
    list.appendChild(item);
};



function updateValues(){
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
    income.innerText = `$${income}`;
    expense.innerText = `$${expense}`;
}

function removeTransaction(id){
    transaction=transaction.filter((transaction)=>transaction.id !== id);

    init();
};

function init(){
    transaction.forEach(addTransactionDOM);
    updateValues();
};

init();