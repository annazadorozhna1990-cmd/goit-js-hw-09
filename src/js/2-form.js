const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 1️⃣ Объект состояния формы
let formData = {
  email: '',
  message: '',
};

// 2️⃣ Восстанавливаем данные из localStorage при загрузке
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// 3️⃣ Обработчик input — обновляем formData и localStorage
form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (!name) return; // только для полей с name

  formData[name] = value; // сохраняем актуальное значение
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 4️⃣ Обработчик submit — валидация, логирование и очистка
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

  // Очистка
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
