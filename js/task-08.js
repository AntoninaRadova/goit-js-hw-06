// Пошук формми
const form = document.querySelector(".login-form");

// Додавання слухача події
form.addEventListener("submit", handleSubmit);

// Відправка форми
function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  // Всі поля заповнені?
  if (email.value === "" || password.value === "") {
    return alert("Заповни всі поля!");
  }

  // Про користувача
  const userInfo = {
    email: email.value,
    password: password.value,
  };

  console.log(userInfo);

  event.currentTarget.reset();
}
