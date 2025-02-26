function getInputValueById (id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convartedValue = parseFloat(value);
    return convartedValue;
}

function setInnerTextByIdAndValue (id, value){
    document.getElementById(id).innerText = value
}

// for toggle
function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}