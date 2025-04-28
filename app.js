/**
 * @param {HTMLElement} id
 */
function app(element) {
  const startNumericInput = document.createElement("input");
  startNumericInput.placeholder = "Enter A";

  const endNumericInput = document.createElement("input");
  endNumericInput.placeholder = "Enter B";

  // TODO: not implemented
  const mathSignInput = document.createElement("input");
  mathSignInput.placeholder = "Enter a sign";

  const mathResultElement = document.createElement("div");

  const calcButton = document.createElement("button");
  calcButton.textContent = "=";
  // TODO: not implemented
  calcButton.onclick = () => {
    mathResultElement.textContent =
      startNumericInput.value - endNumericInput.value;
  };

  element.appendChild(startNumericInput);
  element.appendChild(endNumericInput);
  element.appendChild(calcButton);
  element.appendChild(mathResultElement);
}

const appElement = document.getElementById("app");

if (appElement) {
  app(appElement);
}
