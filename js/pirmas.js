// Pirma uzduotys:
let a = 1;
let string = 'Kintamojo a reiksme: ';
console.log(string + a);

a = 2
console.log(string + a);

let b = `Mano vardas `;
let c = `Lukas`;
console.log(b + c);

/* ---- Kintamieji, matemika: 

1. Sudarykite programa, kuri is jusu gimimo datos (metai, menuo, diena tai atskiri kintamieji) paskutiniu skaitmenu gautu ju suma ir parodykite developer tools konsoleje. */

let metai = 2005;
let menuo = 08;
let diena = 18;

let paskutinisSkaicius = (metai % 10) + (menuo % 10) + (diena % 10);

console.log(`Paskutinių skaitmenų suma: ${paskutinisSkaicius}`);

/* 2. Duotas kintamasis r = 15. Sukurti algoritmus kurie skaiciuotu apskritimo ilgi ir plota: */

let r = 15;

let pi = 3.14;

let C = 2 * pi * r;

let S = pi * r ** 2;

console.log(`Ilgis: ${C}`);
console.log(`Plotas: ${S}`);


/* ---- Kintamuju tipai:

1. Duoti du sveukuju skaiciu intervalai [a; b] ir [c; d], kur a <= c. Sudarykite programa kuri nustatytu ar egzistuoja siu intervalu sankirta ir jeigu sankirtas egzistuoja, tai raskite jos rezius [x; y] */

let a1 = -5;
let b1 = 0;
let c1 = -4;
let d1 = 4;

if (b1 < c1 || d1 < a1) {
  console.log('Sankirtos nėra');
} else {
  const x1 = Math.max(a1, c1);
  const y1 = Math.min(b1, d1);
  console.log(`Sankirta: [${x1}; ${y1}]`);
}

// 2. Isveskite visus siuos duomenis sakinio pavidalu

let vardas = `Vardenis`;
let pavarde = `Pavardenis`;
let universitetas = `KTU`;
let amzius = 22;

console.log(`${vardas} ${pavarde} mokosi ${universitetas} jam yra ${amzius} metu.`)

// 3. Isveskite visu kintamuju apibudinimus su tipais (naudoti typeof)

console.log(`Vardas: ${vardas} | Jo tipas: ${typeof vardas}`)
console.log(`Pavarde: ${pavarde} | Jo tipas: ${typeof pavarde}`)
console.log(`Universitetas: ${universitetas} | Jo tipas: ${typeof universitetas}`)
console.log(`Amzius: ${amzius} | Jo tipas: ${typeof amzius}`)

/* Objektai ir masyvai

4. Sukurkite studento objekta, naudokite tuos pacius duomenis vardas, pavarde, ...). */

const studentas = {
  vardas: `Vardenis`,
  pavarde: `Pavardenis`,
  amzius: 22,
  miestas: `Kaunas`,
  pazymiai: [10, 9, 10, 10],
  universitetas: `KTU`
};

console.log(studentas);


// 5. Sukurkite Objektu masyva pagal katik sukurto Studento objekto struktuura

const studentai = [
  {
    vardas: `Vardenis`,
    pavarde: `Pavardenis`,
    amzius: 22,
    miestas: `Kaunas`,
    pazymiai: [10, 9, 10, 10],
    universitetas: `KTU`
  },
  {
    vardas: `Petras`,
    pavarde: `Petraitis`,
    amzius: 21,
    miestas: `Vilnius`,
    pazymiai: [10, 9, 10, 10],
    universitetas: `VGTU`
  },
  {
    vardas: `Ona`,
    pavarde: `Onute`,
    amzius: 22,
    miestas: `Klaipeda`,
    pazymiai: [10, 9, 10, 10],
    universitetas: `KU`
  }
];

console.log(studentai);


// 6. Iveskite penkto objekto duomenis (vienas bendras console.log())

console.log(studentai[2]);

// 7. Iveskite toki pati informacini sakini is objekto duomenu kaip pries tai isvedete is paprastu kintamuju(..) Isbandykite tiek dot notation, tiek bracket notation traukiannt duomenis is masyvo.

console.log(`Studento vardas yra: ${studentas.vardas}, pavarde: ${studentas.pavarde}, amzius: ${studentas.amzius}, miestas: ${studentas.miestas} universitetas: ${studentas.universitetas}.`);

console.log(`Studento vardas yra: ${studentas["vardas"]}, pavarde: ${studentas["pavarde"]}, amzius: ${studentas["amzius"]}, miestas: ${studentas["miestas"]} universitetas: ${studentas["universitetas"]}.`);

/* ---- Funkcijos:

8. Isveskite visus studento pazymius, eesancius objekte. Naudojant for cikla: */

for (let i = 0; i < studentas.pazymiai.length; i++) {
  console.log(studentas.pazymiai[i]);
}

// 9. Pakelkite tris pasirinktus pazymius per viena skaiciu. Taciau atkreipkite demesi ar keliamas pazymys gali buti pakeltas (jei dar ne max), jei jis jau ir taip yra 10, tuomet palikite toki koks yra.

for (let i = 0; i < studentas.pazymiai.length; i++) {
  if (studentas.pazymiai[i] < 10) {
    studentas.pazymiai[i] += 1;
  }
}

console.log(studentas.pazymiai);

// 10. Suskaiciuokite ir isveskite triju pasirinktu pazymiu suma:

let suma = 0;

for (let i = 0; i < 3; i++) {
  suma += studentas.pazymiai[i];
}

console.log(`Suma: ${suma}.`);

// 11. Suskaiciuokite ir isveskite dvieju pasirinktu pazymiu sandauga.

let sandauga = studentas.pazymiai[1] * studentas.pazymiai[2];

console.log(`Pasirinktų pažymių sandauga yra ${sandauga}.`);
