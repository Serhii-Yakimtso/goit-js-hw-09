const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
// console.log(localStorage);

fillingForm();

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput() {
  const localStorageData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
}

function onSubmit(e) {
  e.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    return;
  }

  const obj = {
    mail: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  console.log(obj);
  localStorage.removeItem(localStorageKey);
  form.reset();
}

function fillingForm() {
  const savedLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));

  if (savedLocalStorage !== null) {
    form.elements.email.value = savedLocalStorage.email;
    form.elements.message.value = savedLocalStorage.message;
  }
}
