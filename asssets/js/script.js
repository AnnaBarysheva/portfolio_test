document.addEventListener('DOMContentLoaded', () => {

const burgerMenu = document.querySelector('.burger-btn');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.sidebar__close-btn');
// console.log('Клик по бургеру:', burgerMenu);

burgerMenu.addEventListener('click', () => {
  overlay.classList.add('active');
  document.body.classList.add('menu-open');
});


closeButton.addEventListener('click', () => {
  overlay.classList.remove('active');
  document.body.classList.remove('menu-open');
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});

document.querySelector(".contacts__form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";

  let isValid = true;
  name.value = name.value.trim();

  if (name.value === "") {
    nameError.textContent = "Пожалуйста, введите ваше имя";
    nameError.style.display = "block";
    isValid = false;
  } else if(name.value.length > 20) {
    nameError.textContent = "Имя не должно превышать 20 символов";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }


  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Пожалуйста, введите ваш email";
    emailError.style.display = "block";
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.textContent = "Введите корректный email";
    emailError.style.display = "block";
    isValid = false;
  }

  message.value = message.value.trim();
  
  if (message.value.length > 500) {
    messageError.textContent = "Сообщение не должно превышать 500 символов.";
    messageError.style.display = "block";
    isValid = false;
  } else {
    messageError.style.display = "none"; 
  }


  if (isValid) {

    alert("Форма отправлена!");

    const formData = {
      name: name.value,
      email: email.value,
      message: message.value || "Пустое сообщение", 
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Ответ от сервера:", data);
        alert("Данные успешно отправлены на сервер!");

        name.value = "";
        email.value = "";
        message.value = "";
      })
      .catch((error) => {
        console.error("Ошибка при отправке:", error);
        alert("Ошибка при отправке данных!");
      
      });
  }
});


});

//Задача
function nthFibo(n) {
  n = Number(n);
  if (n === 1) return 0;
  if (n === 2) return 1;

  let x = 0, y = 1;
  for (let i = 3; i <= n; i++) {
      let temp = x + y;
      x = y;
      y = temp;
  }
  return y;
}

console.log("Fibonacci 1:", nthFibo(1)); 
console.log("Fibonacci 2:", nthFibo(2)); 
console.log("Fibonacci 3:", nthFibo(3)); 
console.log("Fibonacci 4:", nthFibo(4)); 
console.log("Fibonacci 5:", nthFibo(5)); 
console.log("Fibonacci 6:", nthFibo(6)); 
console.log("Fibonacci 10:", nthFibo(10)); 
console.log("Fibonacci 77:", nthFibo(77)); 
