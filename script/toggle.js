// document.getElementById('withdraw-money').style.display = 'none'

document.getElementById('cashOut-card').addEventListener('click', function(){
    document.getElementById('withdraw-money').style.display = 'block'
    document.getElementById('add-money').style.display = 'none'
});

document.getElementById('add-money-card').addEventListener('click', function(){
    document.getElementById('add-money').style.display ='block'
    document.getElementById('withdraw-money').style.display = 'none'
})