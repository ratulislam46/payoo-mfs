
document.getElementById('add-amount').addEventListener('click', function(event){
    event.preventDefault();
    const ammount = document.getElementById('ammount').value;
    const convertAmmount = parseFloat(ammount)
    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin);
    const mainAmmount = document.getElementById('main-ammount').innerText;
    const converMainAmmount = parseFloat(mainAmmount)
    
    if(convertPin===1234){
        const sum = converMainAmmount + convertAmmount;
        document.getElementById('main-ammount').innerText = sum;
    }
    else{
        alert('Invalid PIN')
    }
})