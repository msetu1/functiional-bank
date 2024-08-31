
// get the input field 
function getInputFieldValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    // clear the field 
    inputField.value='';
    // condition 
    // if(isNaN(inputFieldValue)){
    //     alert('Please provide a number')
    //     return;
    // }
    return inputFieldValue;
    
    }
    // get the element 
    function getTextElementValueById(elementId){
        const textElement=document.getElementById(elementId);
        const textElementValueString=textElement.innerText;
        const textElementValue=parseFloat(textElementValueString);
        return textElementValue;
    }
    
    // set the total deposit 
    function setTextElementValueById(inputId,newValue){
        const textElement=document.getElementById(inputId);
        textElement.innerText=newValue;
    } 
    