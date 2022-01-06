let tipForm = document.querySelector('#tipForm')
document.querySelector('#tipRange').value = 0;

tipForm.addEventListener('change', () => {
    let totalBill = Number(document.querySelector('#totalBill').value);
    let tipRange = document.querySelector('#tipRange').value;
    document.querySelector('#tipValue').innerHTML = `${tipRange}%`;
    let tipValue = totalBill * (tipRange/100)
    let finalAmount = totalBill + tipValue
    
    let tipAmount = document.querySelector('#tipAmount')
    let totalAmount = document.querySelector('#totalAmount')
  
    tipAmount.value = tipValue.toFixed(2);
    totalAmount.value = finalAmount.toFixed(2);
  
    document.querySelector('#results').style.display="block"
})