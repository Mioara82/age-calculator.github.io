
const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('MonthInput');
const yearInput = document.getElementById('YearInput');
const yearResult = document.getElementById('year-result');
const monthResult = document.getElementById('month-result');
const dayResult = document.getElementById('day-result');
const labelText = document.getElementById('label');
const dataInput = document.getElementById('data-input');

// Add an event listener to the input elements
dayInput.addEventListener('input', calculateAge);
monthInput.addEventListener('input', calculateAge);
yearInput.addEventListener('input', calculateAge);

function isValidDay(day, month, year) {
	if (month === 2 && const maxDaysInMonth = new Date(year, month, 0).getDate()) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return day >= 1 && day <= (isLeapYear ? 29 : 28);
  } else if ([4, 6, 9, 11].includes(month)) {
    // Check for months with 30 days: April (4), June (6), September (9), November (11)
    return day >= 1 && day <=maxDaysInMonth ;
  } else {
    // Check for months with 31 days
    return day >= 1 && day <= maxDaysInMonth;
  }  
}

function isValidMonth(month) {
  return month >= 1 && month <= 12;
}

function isValidYear(year) {
  const currentYear = new Date().getFullYear();
  return year >= 1900 && year <= currentYear;
}

function displayErrorMessage(inputElement, message) {
  const errorElement = inputElement.nextElementSibling;
  errorElement.textContent = message;
  errorElement.classList.add('error-message');

  inputElement.classList.add('error-input');
  const label = document.querySelector(`label[for="${inputElement.id}"]`);
  label.classList.add('error-label');
}

function removeErrorMessage(element) {
  const errorElement = inputElement.nextElementSibling;
  errorElement.textContent = '';
  errorElement.classList.remove('error-message');

  inputElement.classList.remove('error-input');
  const label = document.querySelector(`label[for="${inputElement.id}"]`);
  label.classList.remove('error-label');
}

function calculateAge() {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  const isValidDayValue = isValidDay(day, month, year);
  const isValidMonthValue = isValidMonth(month);
  const isValidYearValue = isValidYear(year);

  if (!isValidDayValue) {
    displayErrorMessage(dayInput, 'Must be a valid day');
  } else {
    removeErrorMessage(dayInput);
  }

  if (!isValidMonthValue) {
    displayErrorMessage(monthInput, 'Must be a valid month');
  } else {
    removeErrorMessage(monthInput);
  }

  if (!isValidYearValue) {
    displayErrorMessage(yearInput, 'Must be in the past');
  } else {
    removeErrorMessage(yearInput);
  }

  if (isValidDayValue && isValidMonthValue && isValidYearValue) {
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    yearResult.textContent = years;
    monthResult.textContent = months;
    dayResult.textContent = days;
  } else {
    yearResult.textContent = '- -';
    monthResult.textContent = '- -';
    dayResult.textContent = '- -';
    dayInput = "";
    monthInput = "";
    yearInput ="";
  }
}
