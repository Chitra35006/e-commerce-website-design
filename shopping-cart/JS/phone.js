function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousphoneNumber = parseInt(phoneNumberString);

    let newphoneNumber;

    if (isIncrease === true) {
        newphoneNumber = previousphoneNumber + 1;

    }
    else {
        newphoneNumber = previousphoneNumber - 1;

    }
    phoneNumberField.value = newphoneNumber;

    return newphoneNumber;
}


function updatePhoneTotalPrice(newphoneNumber) {
    const phoneTotalPrice = newphoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');

    phoneTotalElement.innerText = phoneTotalPrice;
}

function getTextElementValueById(elementId){
    
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementById(elementId,value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
}

function calculateSubtotal(){
    //calculate total:
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');


    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementById('sub-total', currentSubTotal);


    //calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount= parseFloat(taxAmountString)
    setTextElementById('tax-amount', taxAmount);

    //final amount
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalAmount);

}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newphoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newphoneNumber);
    calculateSubtotal();


})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newphoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newphoneNumber);
    calculateSubtotal();
})
