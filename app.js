/**
 * @param {HTMLElement} id
 */
function app(element) {
  const startNumericInput = document.createElement('input');
  startNumericInput.placeholder = 'Enter A';

  const endNumericInput = document.createElement('input');
  endNumericInput.placeholder = 'Enter B';

  const mathSignInput = document.createElement('select');
  ['+', '-', '*', '/'].forEach((sign) => {
    const option = document.createElement('option');
    option.value = sign;
    option.textContent = sign;
    mathSignInput.appendChild(option);
  });

  const mathResultElement = document.createElement('div');

  const calcButton = document.createElement('button');
  calcButton.textContent = '=';
  const style = document.createElement('style');
  style.textContent = `
    .input-error {
      border: 2px solid red;
      background-color:rgb(233, 0, 0);
    }
  `;
  document.head.appendChild(style);

  [startNumericInput, endNumericInput].forEach((input) => {
    input.addEventListener('input', () => {
      const val = input.value;
      if (isNaN(Number(val)) || val.trim() === '') {
        input.classList.add('input-error');
      } else {
        input.classList.remove('input-error');
      }
    });
  });

  calcButton.onclick = () => {
    numA = Number(startNumericInput.value);
    numB = Number(endNumericInput.value);
    const sign = mathSignInput.value;
    if (
      isNaN(numA) ||
      isNaN(numB) ||
      typeof numA !== 'number' ||
      typeof numB !== 'number'
    ) {
      mathResultElement.textContent = 'Введите корректные числа';
      return;
    }

    let result;
    if (sign === '/') result = numA / numB;
    if (sign === '*') result = numA * numB;
    if (sign === '+') result = numA + numB;
    if (sign === '-') result = numA - numB;

    mathResultElement.textContent = `${result}`;
  };
  element.appendChild(startNumericInput);
  element.appendChild(mathSignInput);
  element.appendChild(endNumericInput);
  element.appendChild(calcButton);
  element.appendChild(mathResultElement);
}
const appElement = document.getElementById('app');

if (appElement) {
  app(appElement);
}
