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

let taxSum = 0;

if(taxIncome < 0)
{
    //Output an error message(Cann't input a negative number)
    showError('Please input a number greater than 0(Positive number)!!!');
    return;
}else if(taxIncome == '' || isNaN(taxIncome)) //Checking if the input is empty or the input consist of letters(isNaN->returns false when it is a Number). NaN(Not-a-Number)
{
    //Output an error message(Can not be empty or a word)
    showError('Please input a number');
}else if(taxIncome >= 0 && taxIncome <= 10000)
{
    //Calculating tax owed at 0%
    taxSum = taxIncome * (0/100);
}else if(taxIncome > 10000 && taxIncome <= 20000)
{
    //1st bracket results at 0%
    //10000*(0/100) = 0
    let taxBrac = 0;
    //Calculating tax owed at 10%
    let taxStart = taxIncome - 10000;
    taxStart = taxStart * (10/100);

    taxSum = taxBrac + taxStart;
}else if(taxIncome > 20000 && taxIncome <= 50000)
{
    
}