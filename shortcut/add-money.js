document.getElementById("add-amount").addEventListener('click', function(event){
    event.preventDefault();
    const ammount =getInputValueById('ammount');
    const pin = getInputValueById('pin');
    const accountNumber = document.getElementById('Account-number').value;
    const mainAmmount = getInnerTextById('main-ammount')

    if(ammount<0){
        alert('Please give positive ammount')
        return;
    }
    
    if(accountNumber.length===11){
        if(pin===1234){
            const sum = mainAmmount + ammount;
            // document.getElementById('main-ammount').innerText= sum;
            setInnerTextByIdAndValue ('main-ammount', sum)
        }
        else{
            alert('Invalid your PIN')
        }
    }
    else{
        alert('Invalid your Account Number')
    }

    // this code create to transaction section

    const container = document.getElementById("transaction-container");
    const p = document.createElement('p');
    p.innerText = `
    Added ${ammount} taka from ${accountNumber} this number.
    `;
    container.appendChild(p)

})