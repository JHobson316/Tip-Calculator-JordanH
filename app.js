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
form.addEventListener('submit', function(event){
event.preventDefault();
   //Getting tip amount
    let percent = (tipAmount.value/100)*bill.value;
    percent = percent.toFixed(2);
    console.log(percent);
    //Dividing the tip amount per each person
    let tipPer = percent/cust;
    tipPer = percent.toFixed(2);
    console.log(tipPer);
    billArray.push(tipPer);
    //Getting total cost for tip and total
    let totalCost = bill+tip;
    //Dividing full cost per person
   let costPer = totalCost/cust;
    //Pushing each average to array
    billArray.push(costPer);
    console.log(billArray);
    showResults(billArray);
});

// Borrowed from example page --Start
// reset form!
function clearReset() {
	totalPerPerson.innerHTML = '$0.00'; // switch numbers to equal 0
	tipPerPerson.innerHTML = '$0.00'; // switch numbers to equal 0
	form.reset; // clear form
}


// when reset button is clicked, run the reset function
reset.addEventListener('click', function () {
	clearReset(); // boom :D

})
// Borrowed from example page --End