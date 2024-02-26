const registerForm = document.querySelector(".login-form"); // Ищем форму

registerForm.addEventListener("submit", handleSubmit); // Слушатель событий кнопки "submit"

// Обработчик событий
function handleSubmit(event) {

  event.preventDefault(); // Блокирует презагрузку страницы после отправки данных
  const form = event.target; // Поиск свойств формы
  const email = form.elements.email.value; // Определение введённого email
  const password = form.elements.password.value; // Определение введённого пароля
  
    // Если хотя бы одно поле не заполнено - выводится предупреждение
    if (email === "" || password === "") {
      const message = "Все поля должны быть заполнены!";
    return alert(message);
    }
  
  // Добавление введённых данных в объект
  const dataOfUser = {
    email: email,
    password: password,
  };
  

  console.log(dataOfUser);
  form.reset(); // Сброс формы
  
}
