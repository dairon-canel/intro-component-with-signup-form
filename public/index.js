const form = document.querySelector('form');
const email = document.getElementById('mail');
const error = email.nextElementSibling;

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const setError = errorString => {
  email.classList.add('invalid-form');
  error.textContent = errorString;
  error.classList.remove('hidden');
};

const setValidate = () => {
  email.classList.remove('invalid-form');
  error.textContent = '';
  error.classList.add('hidden');
};

const validate = () => {
  setValidate();
  window.alert(email.value);
  email.value = '';
};

email.addEventListener('focus', event => {
  setValidate();
});

email.addEventListener('blur', event => {
  setValidate();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  let errorMessage = '';

  if (email.value.length === 0) {
    errorMessage = 'Whoops! It looks like you forgot to add your email';
    setError(errorMessage);
    return;
  }

  if (!emailRegExp.test(email.value)) {
    errorMessage = 'Please provide a valid email address';
    setError(errorMessage);
    return;
  }

  validate();
});
