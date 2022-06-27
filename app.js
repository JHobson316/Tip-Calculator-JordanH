"use strict"
//Getting all elements that i'll need from html
let form = document.getElementById('input');
let bill = document.getElementById('bill');
let tipAmount = document.getElementById('tip-amount');
let customers = document.getElementById('total-customers');
let totalPerPerson = document.getElementById('final-per-person');
let tipPerPerson = document.getElementById('tip-per-person');
let reset = document.getElementById('reset');

//Displaying calculated values on page
// Placed above for availability reasons
function showResults(array){
    console.log('Bop');
    tipPerPerson.innerHTML = array[0];
    totalPerPerson.innerHTML = array[1];
}

// Taking form inputs to calulate the split of tip and total
function billCalc(bill, tip, cust){
    // Array for calculated tip and total splits
    let billArray = [];
    //Getting tip amount
    let percent = (tip/100)*bill;
    //Dividing the tip amount per each person
    let tipPer = percent/cust;
    //Getting total cost for tip and total
    let totalCost = bill+tip;
    //Dividing full cost per person
    let costPer = totalCost/cust;
    //Pushing each average to array
    billArray.push(tipPer, costPer);
    console.log(billArray);
    return billArray;
}

form.addEventListener('submit', showResults(billCalc(bill, tipAmount, customers)));