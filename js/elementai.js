// -- 1. Punktas =>

// Suskaiciuoja kiek HTML faile yra <img> tagu ir isveda atsakyma i konsole.
const imgElementas = document.getElementsByTagName('img');
const imgSkaiciavimas = imgElementas.length;

// Atsakyma isveda i konsole.
console.log(`Siame puslapyje yra ${imgSkaiciavimas} paveiksleliai`);

// -- 2. Punktas =>

// Atsakyma parodo puslapyje.
document.getElementById("uuid").textContent = `Siame puslapyje yra ${imgSkaiciavimas} paveiksleliai`;

// -- 3. Punktas =>

// Mygtuko suradimas pagal id.
const skaiciuotiImg = document.getElementById('skaiciuoti-img');

// Priskiriame click funkcija mygtukui.
skaiciuotiImg.addEventListener('click', () => {
  window.alert(`Siame puslapyje yra ${imgSkaiciavimas} paveiksleliai`);
});

// -- 4. Punktas =>

// Pereinant per visus <img> elementus, kas antras elementas pakeiciamas i zodi "testas".
for (let i = 0; i < imgElementas.length; i++) {
    if (i % 2 === 1) {
      imgElementas[i].alt = "testas";
    }
}

// -- 5. Punktas =>

// Suranda HTML elementa su id "uuid".
const uuidElementas = document.getElementById('uuid');

// Elemento "uuid" CSS pakeitimai
uuidElementas.style.fontSize = "24px";
uuidElementas.style.backgroundColor = "green";
uuidElementas.style.width = "200px";
uuidElementas.style.height = "200px";
