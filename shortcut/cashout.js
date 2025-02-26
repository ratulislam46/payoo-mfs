document.getElementById(id="withdraw-money-btn").addEventListener('click', function(event){
    event.preventDefault();
    const mainAmmount = getInnerTextById("main-ammount")
    const withdrawAmmount = getInputValueById('withdraw-ammount');
    const withdrawPin = getInputValueById('withdraw-pin');
    const agentNumber = document.getElementById("Agent-number").value;
    
    if(mainAmmount < withdrawAmmount){
        alert('Amount not available')
        return;
    }

    if(agentNumber.length === 11){
        if(withdrawPin===1234){
            const subtraction = mainAmmount - withdrawAmmount;
            setInnerTextByIdAndValue('main-ammount', subtraction)
        }
        else{
            alert('Invalid your PIN')
        }
    }
    else{
        alert('Invalid your Agent Number')
    }

    //this code will write for transaction section
    const container = document.getElementById("transaction-container");
    const div = document.createElement('div');
    div.classList.add('bg-red-400')
    div.innerHTML = `
    <p > From ${agentNumber}</p>
    <p class ="text-white"> Amount ${withdrawAmmount}</p>

    `
    container.appendChild(div)
})
