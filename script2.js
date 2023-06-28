const dayInput = document.getElementById('dayInput');
const labelText = document.getElementById('label');

function isValidDay(day){
	const dayRegex = ^(0?[1-9]|[1-2][0-9]|3[0-1])$
	const day = parseInt(dayInput.value);
	if(dayRegex.test(day)) {
		removeErrorMessage();
		dayInput ="";
	} else {
		displayErrorMessage();
	}
}

dayInput.addEventListener('input', isValidDay());

function displayErrorMessage(inputElement, message){
	labelText.classList.add('error-label');
	const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = message;
    errorElement.classList.add('error-message');
	inputElement.classList.add('error-input');
}

function removeErrorMessage(element) {
  const errorElement = inputElement.nextElementSibling;
  errorElement.textContent = '';
  errorElement.classList.remove('error-message');
  labelText.classList.remove('error-label');
  inputElement.classList.remove('error-input');
}