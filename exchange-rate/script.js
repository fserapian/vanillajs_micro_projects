const selectElement1 = document.getElementById('currency-1');
const selectElement2 = document.getElementById('currency-2');
const inputElement1 = document.getElementById('amount-1');
const inputElement2 = document.getElementById('amount-2');
const buttonElement = document.getElementById('swap');

const rateElement = document.getElementById('rate');

const api_key = 'your_api_key';

function calculate() {
  const selection1 = selectElement1.value;
  const selection2 = selectElement2.value;

  fetch(`https://v6.exchangerate-api.com/v6/${api_key}/latest/${selection1}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[selection2].toFixed(2);

      rateElement.innerHTML = `1 USD = ${rate} ${selection2}`;

      inputElement2.value = (inputElement1.value * rate).toFixed(2);
    });
}

function swapButtons() {
  const temp = selectElement1.value;
  selectElement1.value = selectElement2.value;
  selectElement2.value = temp;
  calculate();
}

// Event listeners
selectElement1.addEventListener('change', calculate);
inputElement1.addEventListener('input', calculate);
selectElement2.addEventListener('change', calculate);
inputElement2.addEventListener('input', calculate);
buttonElement.addEventListener('click', swapButtons);
