const select = document.querySelector('select');
const allLang = ['en', 'ua', 'ru'];
const header = document.querySelector('.header')
const sidebar = document.querySelector('.sidebar')

select.addEventListener('change', changeLangURL, changeLangBg);


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
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)) {
    location.href = `${window.location.pathname}#ua`;
    location.reload();
  }

  select.value = hash;

  for (let key in allLang) {
    console.log(header);
    console.log(key[1]);
    console.log(allLang[1]);
    // if (elem) {
    //   header.style.background = `../img/flag-of-${key}.webp`;
    //   header.style.backgroundPosition = center;
    //   header.style.backgroundRepeat = no-repeat;
    // }
  }
}

changeLang();