
document.getElementById('log-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('Account-number').value;
    const pin = document.getElementById('pin').value;
    if(accountNumber.length ===11){
        if(pin === '1234'){
            window.location.href="./main.html"
        }
        else{
            alert('unvalid your pin')
        }
    }
    else{
        alert('need valid number')
    }
})
