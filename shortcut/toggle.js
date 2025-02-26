document.getElementById('withdraw-money').style.display = 'none';
document.getElementById('transaction-container').style.display = 'none';

document.getElementById('cashOut-card').addEventListener('click', function(event){
    event.preventDefault();
    handleToggle('add-money', 'none');
    handleToggle('withdraw-money', 'block')
    handleToggle('transaction-container', 'none')
})
document.getElementById("add-money-card").addEventListener('click', function(event){
    event.preventDefault();
    handleToggle('add-money', 'block');
    handleToggle('withdraw-money', 'none');
    handleToggle('transaction-container','none')
})