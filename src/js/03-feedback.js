import throttle from "lodash.throttle";

const formElement = document.querySelector('.feedback-form');
const emailInput = formElement.querySelector('input[name="email"]');
const messageInput = formElement.querySelector('textarea[name="message"]');

const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (storedData) {
  emailInput.value = storedData.email || '';
  messageInput.value = storedData.message || '';
}

const updateLocalStorage = throttle(() => {
  const dataToStore = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(dataToStore));
}, 500);

emailInput.addEventListener('input', updateLocalStorage);
messageInput.addEventListener('input', updateLocalStorage);

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const dataToRemove = JSON.parse(localStorage.getItem('feedback-form-state'));

  console.log(dataToRemove);

  localStorage.removeItem('feedback-form-state');

  emailInput.value = '';
  messageInput.value = '';
});
