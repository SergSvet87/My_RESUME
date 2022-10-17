const select = document.querySelector('select');
const allLang = ['en', 'ua', 'ru'];
const header = document.querySelector('.header');
const alertMessage = document.querySelector('.alert');
const alertCloseBtn = document.querySelector('.alert__close-btn');

// Изменение селекта
select.addEventListener('change', changeLangURL);

// Преобразование строки с дописанием выбраннного языка
function changeLangURL() {
  let lang = select.value;
  location.href = `${window.location.pathname}#${lang}`;
  location.reload();
}

// Изменение языка на сайте с помощью lang.js
function changeLang() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)) {
    location.href = `${window.location.pathname}#ua`;
    location.reload();
  }
  select.value = hash;

  if (hash === 'ru') {
    toggleLoader();
    toggleClassAlert();
  }

  for (let key in translateArr) {
    let elem = document.querySelector('.lang-' + key);
    if (elem) {
      toggleLoader();
      elem.innerHTML = translateArr[key][hash];
    }
  }
}

// Изменение бэкграунда хедера
function changeLangBg() {
  for (let elem of allLang) {
    if (elem === 'ua') {
      header.style.background = "url(img/flag-of-ua.webp) center / cover no-repeat"
    } else if (select.value === 'en') {
      header.style.background = "url(img/flag-of-en.webp) no-repeat";
      header.style.backgroundSize = "100% 100%";
    } else if (select.value === 'ru') {
      header.style.background = "url(img/flag-of-ua.webp) 50% / cover no-repeat";
      header.style.backgroundSize = "100% 100%";
    } else {
      header.style.background = "url(img/flag-of-ua.webp) center / cover no-repeat"
    }
  }
}

// Функция закрытия-открытия модального окна
function toggleClassAlert() {
  alertMessage.classList.toggle('is-open');
}

// Вешаю событие клик на кнопку закрыть вспомогательное окно
alertCloseBtn.addEventListener('click', () => {
  toggleClassAlert();
  toggleLoader();
  location.replace('index.html');
})

// Функция включения-отключения окна временной загрузки
function toggleLoader() {
  // Получаю элемент предзагрузки
  const preloader = document.getElementById('preloder');

  // Подключаем класс активности к элементу предзагрузки
  preloader.classList.add('active');

  // Устанавливаю время работы элемента предзагрузки
  setTimeout(() => {
    preloader.classList.remove('active');
  }, 800);
}

changeLang();
changeLangBg();