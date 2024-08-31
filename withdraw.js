document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount=getInputFieldValueById('withdraw-input-field');
    
    const previousWithdrawTotal=getTextElementValueById('withdraw-total');

    //  calculate the total amount
    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
//set the total amount
setTextElementValueById('withdraw-total',newWithdrawTotal);

// balance 
const previousBalanceTotal=getTextElementValueById('total-balance');

// calculate balance total 
const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;

// set the balance total 
setTextElementValueById('total-balance',newBalanceTotal);

})