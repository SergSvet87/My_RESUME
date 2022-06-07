const select = document.querySelector('select');
const allLang = ['en', 'ua', 'ru'];
const header = document.querySelector('.header')
const sidebar = document.querySelector('.sidebar')


select.addEventListener('change', changeLangURL);


function changeLangURL() {
  let lang = select.value;
  location.href = `${window.location.pathname}#${lang}`;
  location.reload();
}

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

function changeLangBg() {
  if (select.value === allLang[1]) {
    header.style.background = "url(../img/flag-of-ua.webp) center / cover no-repeat"
  } else if (select.value === allLang[0]) {
    header.style.background = "url(../img/flag-of-en.webp) no-repeat";
    // header.style.backgroundSize = "100% 100%";
  } else if (select.value === allLang[2]) {
    header.style.background = "url(../img/flag-of-ru.webp) 50% / cover no-repeat";
    // header.style.backgroundSize = "100% 100%";
  }
}

changeLang();
changeLangBg();