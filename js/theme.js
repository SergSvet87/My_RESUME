// Тема сайта
const themeMain = () => {
  let themeLinkHead = document.querySelector('[title="theme"]');
  let changeThemeButtons = document.querySelectorAll('.theme__change');
  let activeTheme = localStorage.getItem('theme');        // Получаю в переменную значение для 'theme' из LocalStorage
  
  // Проверяем есть ли какое-нибудь значение для 'theme' в LocalStorage
  if (activeTheme === null || activeTheme === 'light') { // Если значение не записано или есть запись light      
    applyTheme('light');                                 // - применяем светлую тему
  } else {
    applyTheme('dark');
  }

  // Функция применения темы
  function applyTheme(themeName) {
    themeLinkHead.setAttribute('href', `css/theme-${themeName}.min.css`); // Подключаю неоходимую таблицу со стилями
    
    changeThemeButtons.forEach(button => {
        button.style.display = 'block';                                // Кнопка с нужной svg стает активной
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; // Кнопка с 2 svg стает неактивной
    localStorage.setItem('theme', themeName);                        // Делаю запись в localStorage
  }

  // Применение темы к сайту  по нажатию на кнопку
  changeThemeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let theme = button.getAttribute('data-theme');
      if (theme === 'light') {                                       // Если есть значение light
        applyTheme(theme);                                           // Меняю на темную тему
      } else {                                                       // Иначе применяю светлую тему
        applyTheme(theme);
      }
    })
  })
}

themeMain();