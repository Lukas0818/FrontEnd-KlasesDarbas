const page = window.location.pathname;

function getRedirectPage(pageWithoutExtension = null) {
    let redir = null;
    switch (pageWithoutExtension) {
        case '/':
        case '/index':
            if (page !== '/index.html') {
                redir = 'index.html';
            }
            break;
        case '/cv':
            if (page !== '/cv.html') {
                redir = 'cv.html';
            }
            break;
        case '/portfolio':
            if (page !== '/portfolio.html') {
                redir = 'portfolio.html';
            }
            break;
        case '/lentele':
            if (page !== '/lentele.html') {
                redir = 'lentele.html';
            }
            break;
        case '/kontaktai':
            if (page !== '/kontaktai.html') {
                redir = 'kontaktai.html';
            }
            break;
        case '/404':
            if (page !== '/404.html') {
                redir = '404.html';
            }
            break;
        default:
            redir = '404.html';
            break;
    }

    return redir;
}

function redirectPage() {
    const pageWithoutExtension = page.replace(/\.html$/, '');

    let redir = getRedirectPage(pageWithoutExtension);

    if (redir) {
        window.location.href = redir;
    }
}

function getMeniuJsonString() {
    return '[{"title":"Pradžia", "url":"/"},{"title":"CV", "url":"/cv"},{"title":"Portfolio", "url":"/portfolio"},{"title":"Lentele", "url":"/lentele"},{"title":"Kontaktai", "url":"/kontaktai"}]';
}

if (page) {
    redirectPage();
}

function getMeniuList() {
    const jsonMeniu = getMeniuJsonString();

    return JSON.parse(jsonMeniu);
}

let meniuList = getMeniuList();

let kurDetiMeniuHTML = document.querySelector('body > header > nav > ul');

kurDetiMeniuHTML.innerHTML = '';

for (let i = 0; i < meniuList.length; i++) {
    let meniuItemData = meniuList[i];
    let klase = meniuItemData.url === page ? 'active' : '';


    kurDetiMeniuHTML.innerHTML += "<li class='"+ klase +"'><span data-href='" + meniuItemData.url + "' class='link'>" + meniuItemData.title + "</span></li>";
}

function navigateToUrl(event) {
  const target = event.target;
  const url = target.getAttribute('data-href');
  if (url) {
    target.classList.remove('link');
    window.location.href = url;
  }
}


const spanElements = document.querySelectorAll('body > header > nav > ul > li > span.link');
for (let i = 0; i < spanElements.length; i++) {
  spanElements[i].addEventListener('click', navigateToUrl);
}

