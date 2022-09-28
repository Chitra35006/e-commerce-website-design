document.getElementById('btn-plus').addEventListener('click',function(){
    const newItemCountVal = updateCount(true);

    updatePriceTotalPrice(newItemCountVal);
    calculateSubtotal();
})

document.getElementById('btn-minus').addEventListener('click',function(){
    const newItemCountVal = updateCount(false);

    updatePriceTotalPrice(newItemCountVal);
    calculateSubtotal();
})




//Item Counting Task
function updateCount(isIncrease) {
    const itemCountObj = document.getElementById('item-count');
    const itemCountString = itemCountObj.value;
    const prevItemCountVal = parseInt(itemCountString);

    let newItemCountVal;

    if (isIncrease === true) {
        newItemCountVal = prevItemCountVal + 1;
        //Enable Button
        document.getElementById('btn-minus').disabled = false;
    }
    else {
        newItemCountVal = prevItemCountVal - 1;

        if(newItemCountVal===0){
            //Disable Button
            document.getElementById('btn-minus').disabled = true;
        }
    }
    itemCountObj.value = newItemCountVal;

    return newItemCountVal;
}





//Calculating Prices
function updatePriceTotalPrice(newpriceNumber) {
    const priceTotalPrice = newpriceNumber * 1219;
    const priceTotalElement = document.getElementById('price-total');

    priceTotalElement.innerText = priceTotalPrice;
}

function getTextElementValueById(elementId){
    
    const priceTotalElement = document.getElementById(elementId);
    const currentPriceTotalString = priceTotalElement.innerText;
    const currentPriceTotal = parseInt(currentPriceTotalString);
    return currentPriceTotal;
}

function setTextElementById(elementId,value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
}

function calculateSubtotal(){
    //calculate total:
    const currentPriceTotal = getTextElementValueById('price-total');
    const currentCaseTotal = getTextElementValueById('case-total');


    const currentSubTotal = currentPriceTotal + currentCaseTotal;

    setTextElementById('sub-total', currentSubTotal);


    //calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount= parseFloat(taxAmountString)
    setTextElementById('tax-amount', taxAmount);

    //final amount
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalAmount);

}