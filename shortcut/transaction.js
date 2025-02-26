document.getElementById("transaction-box").addEventListener('click', function(event){
    event.preventDefault();
    handleToggle('transaction-container', 'block')
    handleToggle('add-money', 'none');
    handleToggle('withdraw-money', 'none');
})