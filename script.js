//get input elements
const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('MonthInput');
const yearInput = document.getElementById('YearInput');

//get result elements
const yearResult = document.getElementById('year-result');
const monthResult = document.getElementById('month-result');
const dayResult = document.getElementById('day-result');

//get other elements
const labelText = document.getElementById('label');
const button = document.getElementById('calculateButton');
const inputElement = document.getElementsByClassName('input-element');

  const birthDay = parseInt(dayInput.value);
  const birthMonth = parseInt(monthInput.value);
  const birthYear = parseInt(yearInput.value);

  const birthDate = new Date(birthDay, birthMonth, birthYear);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  const today = new Date(currentDay, currentMonth, currentYear);


  function calculateAge() {
  if(isValidDate() && checkInputIsNotEmpty()){
    let year_difference = today.getFullYear() - birthDate.getFullYear();
    let one_or_zero = (today.getMonth() < birthDate.getMonth()) || 
                      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
     let age = year_difference - one_or_zero;  
     return age;               
  // display calculated age

    yearResult.textContent = ageYear;
    monthResult.textContent = ageMonth;
    dayResult.textContent = ageDay;
} else {
  alert('Date is not valid')};
}

  function checkInputIsNotEmpty(){
    if (!yearInput.value || !monthInput.value || !dayInput.value) {
      showError('Please fill in all the fields.');
      labelText.classList.add('error-label');
      inputElement.classList.add('error-input');
      return;
    }
  }
  // Check if the entered year is in the future

  

  function isValidDate() {
  const DaysInMonth = getDaysInMonth(birthYear, birthMonth);
  if(birthDay < 1 || birthDay > DaysInMonth) {
    showError('Invalid day. Please enter a valid day.');
    labelText.classList.add('error-label');
    inputElement.classList.add('error-input');
    return;
  }
  if(birthYear > currentYear){
    showError('Invalid year. Please enter a valid year.');
    labelText.classList.add('error-label');
    inputElement.classList.add('error-input');
    return;
  }

  // Check if the entered month is valid

  if(birthMonth < 1 || birthMonth > 12){
    showError('Invalid month. Please enter a valid month.');
    labelText.classList.add('error-label');
    inputElement.classList.add('error-input');
    return;
  }
}

  // calculate age

  

function getDaysInMonth(year, month) {
  if (month === 2) {
    // February
    return isLeapYear(year) ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(month)) {
    // April, June, September, November
    return 30;
  } else {
    // Other months
    return 31;
  }
}

  // Check if a year is a leap year

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  function showError(message) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;

    const dataInput = document.getElementById('data-input');
    dataInput.innerHTML = '- -';
    dataInput.appendChild(errorElement);
  }

button.addEventListener('click', calculateAge());











  
