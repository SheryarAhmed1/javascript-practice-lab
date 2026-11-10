let inp1 = document.querySelector('#input1');
let inp2 = document.querySelector('#input2');
let btn = document.querySelector('#addbtn');
let div = document.querySelector('#itemList');
let totalDisplay = document.querySelector('#total-amount');

let expenses = [];

function track() {
    let name = inp1.value;
    let amount = inp2.value;

    if (name === '' || amount === '') {
        alert('Fill out both fields');
        return;
    }

    let expensesobj = {
        title: name,
        cost: Number(amount),
    };

    expenses.push(expensesobj);

    let itemDiv = document.createElement('div');
    let removebtn = document.createElement('button');

    removebtn.textContent = 'Delete';
    removebtn.className = 'bg-red-500 py-1 px-2 font-bold rounded-lg text-white';

    // Delete button logic
    removebtn.addEventListener('click', function () {
        itemDiv.remove();

        expenses = expenses.filter(function (item) {
            return item !== expensesobj;
        });

        calculateTotal();
    });

    itemDiv.className = 'flex justify-between bg-white p-2 rounded-md my-2 shadow';
    itemDiv.innerHTML = `<span> ${name} </span> <span> ${amount} </span>`;

    itemDiv.appendChild(removebtn);
    div.appendChild(itemDiv);

    calculateTotal();

    inp1.value = '';
    inp2.value = '';
}

function calculateTotal() {
    let sum = 0;

    expenses.forEach(function (expense) {
        sum += expense.cost;
    });

    totalDisplay.textContent = sum;
}

btn.addEventListener('click', track)