const select = document.querySelector('select');
const allLang = ['en', 'ua', 'ru'];
const header = document.querySelector('.header')
const sidebar = document.querySelector('.sidebar')

let changeThemeButtons = document.querySelectorAll('.changeTheme');

let activeTheme = localStorage.getItem('theme'); // Присваиваю в переменную значение для 'theme' в LocalStorage  

// Применение темы к сайту
changeThemeButtons.forEach(button => {
  button.addEventListener('click', function () {
    let theme = this.dataset.theme;
    applyTheme(theme);
  });
});

// Изменение темы сайта
function applyTheme(themeName) {
  document.querySelector('[title="theme"]').setAttribute('href', `../styles/theme-${themeName}.css`);
  changeThemeButtons.forEach(button => {
    button.style.display = 'block';
  });
  document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
  localStorage.setItem('theme', themeName);
}

// Проверяем есть ли значение для 'theme' в LocalStorage

if (activeTheme === null || activeTheme === 'light') { // Если значение не записано, или оно равно 'light' - применяем светлую тему
  applyTheme('light');
} else if (activeTheme === 'dark') { // Если значение равно 'dark' - применяем темную
  applyTheme('dark');
}

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


  for (let key in translateArr) {
    let elem = document.querySelector('.lang-' + key);
    if (elem) {
      elem.innerHTML = translateArr[key][hash];
    }
  }
}

// Изменение бэкграунда хедера
function changeLangBg() {
  for (let elem of allLang) {
    if (elem === 'ua') {
      header.style.background = "url(./img/flag-of-ua.webp) center / cover no-repeat"
    } else if (select.value === 'en') {
      header.style.background = "url(./img/flag-of-en.webp) no-repeat";
      header.style.backgroundSize = "100% 100%";
    } else if (select.value === 'ru') {
      header.style.background = "url(./img/flag-of-ru.webp) 50% / cover no-repeat";
      header.style.backgroundSize = "100% 100%";
    } else {
      header.style.background = "url(./img/flag-of-ua.webp) center / cover no-repeat"
    }
  }
}

changeLang();
changeLangBg();