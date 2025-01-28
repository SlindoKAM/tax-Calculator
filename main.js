const taxIncome = document.getElementById('taxIncome');

//Function that will display an error message.
function showError(msg)
{
    //HTML element for the error message.
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.textContent = msg;

    //Automatically clear the error message after 5 seconds
    setTimeout( () =>
    {
        errorMsg.textContent = ' ';
    }, 5000);
}

if(taxIncome < 0)
{
    //Output an error message(Cann't input a negative number)
    showError('Please input a number greater than 0(Positive number)!!!');
    return;
}else if(taxIncome == '' || isNaN(taxIncome)) //Checking if the input is empty or the input consist of letters(isNaN->returns false when it is a Number). NaN(Not-a-Number)
{
    //Output an error message(Can not be empty or a word)
    showError('Please input a number');
}