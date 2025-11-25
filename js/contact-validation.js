// contact-validation.js
(function () {
  let form = document.querySelector('#contact-form');
  let nameInput = document.querySelector('#name');
  let emailInput = document.querySelector('#email');
  let messageInput = document.querySelector('#message');

  function showErrorMessage(input, message) {
    let container = input.parentElement;

    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    if (message) {
      let errorElement = document.createElement('div');
      errorElement.classList.add('error-message');
      errorElement.innerText = message;
      container.appendChild(errorElement);
      input.classList.add('input-error');
    } else {
      input.classList.remove('input-error');
    }
  }

  function validateName() {
    let value = nameInput.value.trim();

    if (!value) {
      showErrorMessage(nameInput, 'Name is a required field.');
      return false;
    }

    showErrorMessage(nameInput, null);
    return true;
  }

  function validateEmail() {
    let value = emailInput.value.trim();

    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }

  if (!value.includes('@') && !value.includes('.')) {
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validateMessage() {
    let value = messageInput.value.trim();

    if (!value) {
      showErrorMessage(messageInput, 'Message is a required field.');
      return false;
    }

    showErrorMessage(messageInput, null);
    return true;
  }

  function validateForm() {
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isMessageValid = validateMessage();

    return isNameValid && isEmailValid && isMessageValid;
  }

  form.addEventListener('submit', function (e) {
    if (!validateForm()) {
      e.preventDefault();
    }
  });

  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  messageInput.addEventListener('input', validateMessage);
})();
