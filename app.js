"use strict"
//Getting all elements that I'll need from html
let form = document.getElementById('input');
let bill = document.getElementById('bill');
let tipAmount = document.getElementById('tip-amount');
let customers = document.getElementById('total-customers');
let totalPerPerson = document.getElementById('final-per-person');
let tipPerPerson = document.getElementById('tip-per-person');
let reset = document.getElementById('reset');

// Displaying calculated values on page
// Placed above for availability reasons
function showResults(array){
    console.log('All calculations made.');
    //Changing the text on the page to the amounts calculated
    tipPerPerson.innerHTML = `$${array[0]}`;
    totalPerPerson.innerHTML = `$${array[1]}`;
}

// Taking form inputs to calulate the split of tip and total
submit.addEventListener('click', function(event){
event.preventDefault();
    //Getting tip amount
    let billArray = [];
    let percent = (tipAmount.value/100)*bill.value;
    percent = + percent.toFixed(2);
    //Dividing the tip amount per each person and rounding the decimals to the hundredths
    let tipPerPerson = (percent/customers.value);
    tipPerPerson = tipPerPerson.toFixed(2);
    //Pushing tipPerPerson to our returning array
    billArray.push(tipPerPerson);
    //Getting total cost for tip and total
    //ParseInt changes the datatype of bill.value to a number
    let totalCost = parseInt(bill.value, 10) + percent;
    //Dividing full cost per person and rounding the decimals to the hundredths
    let costPerPerson = totalCost/customers.value;
    costPerPerson = costPerPerson.toFixed(2);
    //Pushing each average to the returning array
    billArray.push(costPerPerson);
    //Calling the function to place the two items in our array onto the page
    showResults(billArray);
});

// Borrowed from example page --Start
// Please let me know if I should go back and revise this since
// it's code that I got from the example 
// reset form!
function clearReset() {
	totalPerPerson.innerHTML = '$0.00'; // switch numbers to equal 0
	tipPerPerson.innerHTML = '$0.00'; // switch numbers to equal 0
	form.reset; // clear form
}

// when reset button is clicked, run the reset function
reset.addEventListener('click', function () {
	clearReset();
})
// Borrowed from example page --End