document.getElementById('withdraw-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const withdrawAmmount = document.getElementById('withdraw-ammount').value;
    const convertwithdrawAmmount = parseFloat(withdrawAmmount);
    const withdrawPin = document.getElementById('withdraw-pin').value;
    const convertWithdrawPin = parseInt(withdrawPin)
    const mainAmmount = document.getElementById('main-ammount').innerText;
    const convertMainAmmount = parseFloat(mainAmmount);

    if(convertWithdrawPin===1234){
        const subtraction = convertMainAmmount - convertwithdrawAmmount ;
        document.getElementById('main-ammount').innerText = subtraction;
    }
    else{
        console.log('Invalid your PIN')
    }
})