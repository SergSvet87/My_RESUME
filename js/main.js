const select = document.querySelector('select');
const allLang = ['en', 'ua', 'ru'];

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
    console.log(hash);
  }
  select.value = hash;


  for (let key in langArr) {
    let elem = document.querySelector('.lang-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLang();