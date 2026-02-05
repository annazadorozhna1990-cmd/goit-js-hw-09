const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData = {
    email: parsedData.email || '',
    message: parsedData.message || '',
  };

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const trimmedData = {
    email: formData.email.trim(),
    message: formData.message.trim(),
  };

  if (!trimmedData.email || !trimmedData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(trimmedData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
