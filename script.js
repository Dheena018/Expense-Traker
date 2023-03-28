'use strict';

const income=document.getElementById('money-plus');
const expense=document.getElementById('money-minus');
const balance= document.getElementById('balance');
const text = document.getElementById('text');
const amount =document.getElementById('amount');
const btn = document.getElementById('submit');
const form =document.getElementById('form')
const notification=document.getElementById("notification")


let transaction=[];


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
        transaction.push(transactions);
        addTransactionDOM(transactions);
        updateValues();
        // init();
    }
});


function addTransactionDOM(transactions){
    const sign = transactions.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(sign === "+" ? "plus" :  "minus");
    item.innerHTML=`${transactions.text} <span>${sign} ${Math.abs(transactions.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transactions.id})">X</button>`;
    list.appendChild(item);
};



function updateValues(){
    const amounts = transaction.map((transactions) => transactions.amount);
    const total = amounts
    .reduce(((accumulator, value) => accumulator += value), 0)
    ;
    const incomes = amounts
    .filter((value) => value > 0)
    .reduce(((accumulator, value) => accumulator += value), 0);
    const expenses = (
    amounts
        .filter((value) => value < 0)
        .reduce(((accumulator, value) => accumulator += value), 0) * -1
    );
    balance.innerHTML = `$${total}`;
    income.innerHTML= `$${incomes}`;
    expense.innerHTML = `$${expenses}`;
}

function removeTransaction(id){
    transaction=transaction.filter((transactions)=>transactions.id !== id);

    init();
};

function init(){
    transaction.forEach(addTransactionDOM);
    updateValues();
};

// init();