
document.getElementById('btn-deposit').addEventListener('click',function(){
    
    const newDepositAmount=getInputFieldValueById('deposit-input-field');
    const previousDepositTotal=getTextElementValueById('deposit-total');

    // calculate 
    const newDepositTotal=previousDepositTotal+newDepositAmount;

    // set the value 
    setTextElementValueById('deposit-total',newDepositTotal);

    // balance 
const previousBalanceTotal=getTextElementValueById('total-balance');

// calculate balance 
const newBalanceTotal=previousBalanceTotal+newDepositAmount;

//  set the balance 
setTextElementValueById('total-balance',newBalanceTotal);

})

