const taxIncome = document.getElementById('taxIncome');//input tag field
// const clearBtn = document.getElementById('clearButton');//clear tag button
const calcTax = document.getElementById('calcTax');//calcalate tax tag button
const taxResult = document.getElementById('taxResult');//output tag field
const netResult = document.getElementById('netResult');//output tag field
const bracResZ = document.getElementById('bracResZ');//output tag field for the 1st bracket(0%)
const bracResO = document.getElementById('bracResO');//output tag field for the 2nd bracket(10%)
const bracResT = document.getElementById('bracResT');//output tag field for the 3rd bracket(20%)
const bracResA = document.getElementById('bracResA');//output tag field for the 4th bracket(30%)

// //Function that will display an error message.
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

//Function that will calculate tax owed according to their income(inputted by the user)
function taxCalc(taxIncome)
{
    // const taxIncome = Number(income);
    let taxSum = 0;

    if(taxIncome < 0)
    {
        //Output an error message(Cann't input a negative number)
        showError('Please input a number greater than 0(Positive number)!!!');
        return 0;
    }else if(taxIncome === '' || isNaN(taxIncome)) //Checking if the input is empty or the input consist of letters(isNaN->returns false when it is a Number). NaN(Not-a-Number)
    {
        //Output an error message(Can not be empty or a word)
        showError('Please input a number');
        return 0;
    }else if(taxIncome >= 0 && taxIncome <= 10000)//1st Bracket
    {
        //Calculating tax owed at 0%
        taxSum = taxIncome * (0/100);
    }else if(taxIncome > 10000 && taxIncome <= 20000)//2nd Bracket
    {
        //1st bracket results at 0%
        //10000*(0/100) = 0
        let taxBrac = 0;
        //Calculating tax owed at 10%
        let taxStart = taxIncome - 10000;
        taxStart = taxStart * (10/100);
    
        //Sum up the tax owed at their respectful tax bracket
        taxSum = taxBrac + taxStart;
    }else if(taxIncome > 20000 && taxIncome <= 50000)//3rd Bracket
    {
        //2nd bracket results at 0% and 10%
        //[10000*(0/100) + 10000*(10/100)] = 1000
        let taxBrac = 1000;
        //Calculating tax owed at 20%
        let taxStart = taxIncome - 20000;
        taxStart = taxStart * (20/100);
    
        //Sum up the tax owed at their respectful tax bracket
        taxSum = taxBrac + taxStart;
    }else if(taxIncome > 50000)//4th Bracket
    {
        //3rd bracket results at 0% and 10% and 20%
        //[10000*(0/100) + 10000*(10/100) + 30000*(20/100)] = 7000
        let taxBrac = 7000;
        //Calculating tax owed at 30%
        let taxStart = taxIncome - 50000;
        taxStart = taxStart * (30/100);
    
        //Sum up the tax owed at their respectful tax bracket
        taxSum = taxBrac + taxStart;
    }//Try catch error if any for error handling.....................................................................................

    //return tax to be paid(owed)
    return taxSum;
}

// function taxBreak()
// {

// }

//Fuction to calculate the Net-Income (taxIncome - taxOwed)
function netIncome(taxIncome)
{
    let netSum = 0;

    // if(taxIncome === '' || isNaN(taxIncome))//Checking if the input is empty or the input consist of letters(isNaN->returns false when it is a Number). NaN(Not-a-Number)
    // {
    //     return 0;
    // }
    //Net income = Income - Tax
    netSum = taxIncome - taxCalc(taxIncome);

    //Return Net-Income
    return netSum;
}

/*Still have to work on it
//Once the button is clicked thweb will reset to it's original state.
clearBtn.addEventListener('click', () =>
{
    taxIncome.innerText = '';
    taxIncome.value = '';
    taxResult.innerText = '';
    taxResult.value = '';
});

// // //Function to Clear the screen(form and results)=can be a button
function clearScreen()
{
    //Once the button is clicked thweb will reset to it's original state.
    clearBtn.addEventListener('click', () =>
    {
        taxIncome.innerText = '';
        taxIncome.value = '';
        taxResult.innerText = '';
        taxResult.value = '';
    });
}*/

//////Function to Clear the screen(form and results)=can be a button
function clearScreen()
{
    //Once the button is clicked thweb will reset to it's original state.
    const taxReset = () =>
    {
        taxIncome.innerText = '';
        taxIncome.value = '';
        taxResult.innerText = '';
        taxResult.value = '';
    };

    return taxReset;
}

//Event listener for the calculate tax button
calcTax.addEventListener('click', () =>
{
    console.log('Button clicked');
    //Display the tax owed
    taxResult.textContent = `R ${taxCalc(taxIncome.value).toFixed(2)}`;

    //Display the net income
    netResult.textContent = `R ${netIncome(taxIncome.value).toFixed(2)}`;

    //This evaluation still needs work!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
    if(taxIncome.value >= 0 && taxIncome.value <= 10000)
    {
        console.log('1st Bracket');
        bracResZ.textContent = `R ${taxCalc(taxIncome.value).toFixed(2)}`;
    }else if(taxIncome.value > 10000 && taxIncome.value <= 20000)
    {
        console.log('2nd Bracket');
        bracResZ.textContent = `R 0.00`;
        bracResO.textContent = `R ${taxCalc(taxIncome.value).toFixed(2)}`;
    }else if(taxIncome.value > 20000 && taxIncome.value <= 50000)
    {
        console.log('3rd Bracket');
        bracResZ.textContent = `R 0.00`;
        bracResO.textContent = `R 1000.00`;
        bracResT.textContent = `R ${taxCalc(taxIncome.value).toFixed(2)}`;
    }else if(taxIncome.value > 50000)
    {
        console.log('4th Bracket');
        bracResZ.textContent = `R 0.00`;
        bracResO.textContent = `R 1000.00`;
        bracResT.textContent = `R 7000.00`;
        bracResA.textContent = `R ${taxCalc(taxIncome.value).toFixed(2)} `;
    }
});

//Still have to work on it
//Event listener for the clear button


//Once the button is clicked thweb will reset to it's original state.
/*clearBtn.addEventListener('click', clearScreen());*/

/*Still have to work on it
//////Function to Clear the screen(form and results)=can be a button
function clearScreen()
{
    //Once the button is clicked thweb will reset to it's original state.
    taxIncome.innerText = '';
    taxIncome.value = '';
    taxResult.innerText = '';
    taxResult.value = '';
}
clearBtn.addEventListener('click', clearScreen);*/

/*Still have to work on it
//Function to show the tax braekdown per bracket for the Incomes(Showing into what bracket it fails under)
function showBrac()
{

}*/

//Testing the calculate tax functionality and net-income
// const taxIncomeTest = 81000;
// const taxResultTest = taxCalc(taxIncomeTest);
// const netIncomeTest = netIncome(taxIncomeTest);
// console.log(`Tax-Income:${taxIncomeTest} \nTax-Owned:${taxResultTest} \nNet-Income:${netIncomeTest}`);
// console.assert(taxResultTest === 16300, '\n');
// console.assert(netIncomeTest === 64700);