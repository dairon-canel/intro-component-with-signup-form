const form = document.querySelector('form');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('mail');
const password = document.getElementById('password');

const inputList = [firstName, lastName, email, password];

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const textRegExp = /^[a-zA-Z]*$/;

const setError = (element, errorString) => {
  element.classList.add('invalid-form');
  element.classList.add('invalid-form-icon');
  element.nextElementSibling.textContent = errorString;
  element.nextElementSibling.classList.remove('hidden');
};

const setValidate = element => {
  element.classList.remove('invalid-form');
  element.classList.remove('invalid-form-icon');
  element.nextElementSibling.textContent = '';
  element.nextElementSibling.classList.add('hidden');
};

const validateInput = input => {
  let errorMessage = ' ';

  if (input.value.length === 0) {
    errorMessage = `${input.name} cannot be empty`;
    setError(input, errorMessage);
    return false;
  }

  if (input.type === 'email' && !emailRegExp.test(input.value)) {
    errorMessage = 'Looks like this is not an email';
    setError(input, errorMessage);
    return false;
  }

  if (input.type === 'text' && !textRegExp.test(input.value)) {
    errorMessage = 'Just letters permitted';
    setError(input, errorMessage);
    return false;
  }

  if (input.type === 'password' && input.value.length < 8) {
    errorMessage = 'Minimum eight characters';
    setError(input, errorMessage);
    return false;
  }

  return true;
};

const validateAll = () => {
  inputList.forEach(input => setValidate(input));

  const alertMessage = `
    First Name: ${firstName.value}
    Last Name: ${lastName.value}
    Email: ${email.value}
    Password: Shhh!, it's a secret ;)
  `;

  window.alert(alertMessage);

  inputList.forEach(input => (input.value = ''));
};

inputList.forEach(input => {
  input.addEventListener('focus', () => {
    setValidate(input);
  });
  input.addEventListener('blur', () => {
    setValidate(input);
  });
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const validations = inputList.map(input => validateInput(input));

  if (validations.includes(false)) {
    return;
  }

  validateAll();
});
